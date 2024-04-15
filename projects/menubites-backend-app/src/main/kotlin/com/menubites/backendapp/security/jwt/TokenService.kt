package com.menubites.backendapp.security.jwt

import org.springframework.security.core.Authentication

interface TokenService {
    fun generateToken(authentication: Authentication, userRole: String): String
}
