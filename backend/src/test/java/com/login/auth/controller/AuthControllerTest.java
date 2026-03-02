package com.login.auth.controller;

import com.login.auth.model.LoginResponse;
import com.login.auth.service.AuthService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AuthController.class)
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockitoBean
    private AuthService authService;

    @Test
    @DisplayName("Should return 200 and JWT token for valid credentials")
    void loginWithValidCredentials() throws Exception {
        LoginResponse successResponse = new LoginResponse(true, "Login successful", "mock-jwt-token");
        org.mockito.Mockito.when(authService.authenticate("admin", "password123"))
                .thenReturn(successResponse);

        mockMvc.perform(get("/api/auth/login")
                        .param("username", "admin")
                        .param("password", "password123"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.success").value(true))
                .andExpect(jsonPath("$.message").value("Login successful"))
                .andExpect(jsonPath("$.token").value("mock-jwt-token"));
    }

    @Test
    @DisplayName("Should return 401 for invalid credentials")
    void loginWithInvalidCredentials() throws Exception {
        LoginResponse failResponse = new LoginResponse(false, "Invalid username or password", null);
        org.mockito.Mockito.when(authService.authenticate("wrong", "wrong"))
                .thenReturn(failResponse);

        mockMvc.perform(get("/api/auth/login")
                        .param("username", "wrong")
                        .param("password", "wrong"))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.success").value(false))
                .andExpect(jsonPath("$.message").value("Invalid username or password"))
                .andExpect(jsonPath("$.token").doesNotExist());
    }

    @Test
    @DisplayName("Should return 400 when username parameter is missing")
    void loginWithMissingUsername() throws Exception {
        mockMvc.perform(get("/api/auth/login")
                        .param("password", "password123"))
                .andExpect(status().isBadRequest());
    }

    @Test
    @DisplayName("Should return 400 when password parameter is missing")
    void loginWithMissingPassword() throws Exception {
        mockMvc.perform(get("/api/auth/login")
                        .param("username", "admin"))
                .andExpect(status().isBadRequest());
    }
}
