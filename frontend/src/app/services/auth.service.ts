import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  success: boolean;
  message: string;
  token: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = 'http://localhost:8080/api/auth/login';

  readonly isAuthenticated = signal(false);
  readonly token = signal<string | null>(null);
  readonly errorMessage = signal<string | null>(null);

  constructor(private readonly http: HttpClient) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { username, password });
  }

  setAuthenticated(response: LoginResponse): void {
    this.isAuthenticated.set(response.success);
    this.token.set(response.token);
    this.errorMessage.set(response.success ? null : response.message);
  }

  logout(): void {
    this.isAuthenticated.set(false);
    this.token.set(null);
    this.errorMessage.set(null);
  }
}
