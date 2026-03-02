import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection, signal } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthService } from '../services/auth.service';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  const mockIsAuthenticated = signal(false);
  const mockErrorMessage = signal<string | null>(null);
  const mockToken = signal<string | null>(null);

  const mockAuthService = {
    isAuthenticated: mockIsAuthenticated,
    errorMessage: mockErrorMessage,
    token: mockToken,
    login: vi.fn(),
    setAuthenticated: vi.fn(),
    logout: vi.fn(),
  };

  beforeEach(async () => {
    mockIsAuthenticated.set(false);
    mockErrorMessage.set(null);
    mockToken.set(null);
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(),
        { provide: AuthService, useValue: mockAuthService },
      ],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should have an invalid form when empty', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should have a valid form when both fields are filled', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    component.loginForm.controls.username.setValue('admin');
    component.loginForm.controls.password.setValue('password123');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should not submit when form is invalid', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    component.onSubmit();
    expect(mockAuthService.login).not.toHaveBeenCalled();
  });

  it('should call authService.login on valid submit', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    mockAuthService.login.mockReturnValue(
      of({ success: true, message: 'Login successful', token: 'test-jwt' })
    );

    component.loginForm.controls.username.setValue('admin');
    component.loginForm.controls.password.setValue('password123');
    component.onSubmit();

    expect(mockAuthService.login).toHaveBeenCalledWith('admin', 'password123');
    expect(mockAuthService.setAuthenticated).toHaveBeenCalledWith({
      success: true,
      message: 'Login successful',
      token: 'test-jwt',
    });
  });

  it('should render a login form', async () => {
    const fixture = TestBed.createComponent(LoginComponent);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
    expect(compiled.querySelector('input#username')).toBeTruthy();
    expect(compiled.querySelector('input#password')).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });
});
