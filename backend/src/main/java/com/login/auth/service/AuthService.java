package com.login.auth.service;

import com.login.auth.model.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private static final String DUMMY_USERNAME = "admin";
    private static final String DUMMY_PASSWORD = "password123";

    private final JwtService jwtService;

    public AuthService(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    public LoginResponse authenticate(String username, String password) {
        if (DUMMY_USERNAME.equals(username) && DUMMY_PASSWORD.equals(password)) {
            String token = jwtService.generateToken(username);
            return new LoginResponse(true, "Login successful", token);
        }
        return new LoginResponse(false, "Invalid username or password", null);
    }
}
