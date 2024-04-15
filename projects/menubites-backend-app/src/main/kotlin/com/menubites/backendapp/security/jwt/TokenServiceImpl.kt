package com.menubites.backendapp.security.jwt

import org.springframework.beans.factory.annotation.Value
import org.springframework.security.core.Authentication
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.oauth2.jwt.JwtClaimsSet
import org.springframework.security.oauth2.jwt.JwtEncoder
import org.springframework.security.oauth2.jwt.JwtEncoderParameters
import org.springframework.stereotype.Service
import java.time.Instant
import java.time.temporal.ChronoUnit

@Service
class TokenServiceImpl(
    private val encoder: JwtEncoder,
) : TokenService {
    @Value(value = "\${app.jwt.ttl.hours:}")
    private val ttlHours: String? = null

    override fun generateToken(authentication: Authentication, userRole: String): String {
        val now = Instant.now()
        val expiration = now.plus(ttlHours!!.toLong(), ChronoUnit.HOURS)

        val claims = JwtClaimsSet.builder()
            .issuer("self")
            .issuedAt(now)
            .expiresAt(expiration)
            .subject(authentication.name)
            .claim("scope", getCustomScope(authentication, userRole))
            .build()

        return this.encoder
            .encode(JwtEncoderParameters.from(claims))
            .tokenValue
    }

    /**
     * This method is used to get the custom scope.
     * Our custom scope is a string that contains the authorities stored in the database and the user role.
     *
     * */
    private fun getCustomScope(authentication: Authentication, userRole: String): String {
        val authorities = authentication.authorities.plus(SimpleGrantedAuthority("ROLE_$userRole"))
        return authorities
            .joinToString(separator = " ") {
                it.toString()
            }
    }
}
