#!/bin/bash
# ============================================================
# AWS ECS Deployment Script
# Usage: ./deploy.sh
# Requires: AWS CLI configured with proper credentials
# ============================================================

set -e

# Load environment variables
source "$(dirname "$0")/dummy-secrets.env"

echo "=== AWS ECS Deployment for Login App ==="

# Step 1: Create ECR repositories (if they don't exist)
echo "Creating ECR repositories..."
aws ecr create-repository --repository-name login-app-backend --region $AWS_DEFAULT_REGION 2>/dev/null || echo "Backend repo already exists"
aws ecr create-repository --repository-name login-app-frontend --region $AWS_DEFAULT_REGION 2>/dev/null || echo "Frontend repo already exists"

# Step 2: Login to ECR
echo "Logging in to ECR..."
aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com

# Step 3: Build and push Docker images
echo "Building and pushing backend image..."
docker build -t login-app-backend ./backend
docker tag login-app-backend:latest $ECR_BACKEND_REPO:latest
docker push $ECR_BACKEND_REPO:latest

echo "Building and pushing frontend image..."
docker build -t login-app-frontend ./frontend
docker tag login-app-frontend:latest $ECR_FRONTEND_REPO:latest
docker push $ECR_FRONTEND_REPO:latest

# Step 4: Store JWT secret in AWS Secrets Manager
echo "Storing JWT secret in Secrets Manager..."
aws secretsmanager create-secret \
  --name login-app/jwt-secret \
  --secret-string "$JWT_SECRET" \
  --region $AWS_DEFAULT_REGION 2>/dev/null || \
aws secretsmanager update-secret \
  --secret-id login-app/jwt-secret \
  --secret-string "$JWT_SECRET" \
  --region $AWS_DEFAULT_REGION

# Step 5: Create ECS cluster (if it doesn't exist)
echo "Creating ECS cluster..."
aws ecs create-cluster --cluster-name $ECS_CLUSTER_NAME --region $AWS_DEFAULT_REGION 2>/dev/null || echo "Cluster already exists"

# Step 6: Register task definition
echo "Registering ECS task definition..."
TASK_DEF=$(sed "s/ACCOUNT_ID/$AWS_ACCOUNT_ID/g" "$(dirname "$0")/ecs-task-definition.json")
echo "$TASK_DEF" | aws ecs register-task-definition --cli-input-json file:///dev/stdin --region $AWS_DEFAULT_REGION

# Step 7: Create or update ECS service
echo "Creating/updating ECS service..."
aws ecs create-service \
  --cluster $ECS_CLUSTER_NAME \
  --service-name $ECS_SERVICE_NAME \
  --task-definition $ECS_TASK_FAMILY \
  --desired-count 1 \
  --launch-type FARGATE \
  --network-configuration "awsvpcConfiguration={subnets=[subnet-EXAMPLE],securityGroups=[sg-EXAMPLE],assignPublicIp=ENABLED}" \
  --region $AWS_DEFAULT_REGION 2>/dev/null || \
aws ecs update-service \
  --cluster $ECS_CLUSTER_NAME \
  --service-name $ECS_SERVICE_NAME \
  --task-definition $ECS_TASK_FAMILY \
  --force-new-deployment \
  --region $AWS_DEFAULT_REGION

echo "=== Deployment complete! ==="
