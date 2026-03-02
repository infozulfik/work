import { Component, inject, signal, computed } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);

  readonly loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  readonly isLoading = signal(false);
  readonly isAuthenticated = this.authService.isAuthenticated;
  readonly errorMessage = this.authService.errorMessage;
  readonly token = this.authService.token;

  readonly isFormValid = computed(() => this.loginForm.valid);

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading.set(true);
    const { username, password } = this.loginForm.getRawValue();

    this.authService.login(username, password).subscribe({
      next: (response) => {
        this.authService.setAuthenticated(response);
        this.isLoading.set(false);
      },
      error: (err) => {
        const errorResponse = err.error;
        if (errorResponse && errorResponse.message) {
          this.authService.errorMessage.set(errorResponse.message);
        } else {
          this.authService.errorMessage.set('Login failed. Please try again.');
        }
        this.isLoading.set(false);
      },
    });
  }

  onLogout(): void {
    this.authService.logout();
    this.loginForm.reset();
  }
}
