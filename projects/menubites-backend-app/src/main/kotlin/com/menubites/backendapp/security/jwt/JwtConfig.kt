package com.menubites.backendapp.security.jwt

import com.nimbusds.jose.jwk.JWKSet
import com.nimbusds.jose.jwk.RSAKey
import com.nimbusds.jose.jwk.source.ImmutableJWKSet
import com.nimbusds.jose.jwk.source.JWKSource
import com.nimbusds.jose.proc.SecurityContext
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.oauth2.jwt.JwtDecoder
import org.springframework.security.oauth2.jwt.JwtEncoder
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter

@Configuration
class JwtConfig(
    private val rsaKeyProperties: RsaKeyProperties,
) {

    @Bean
    fun jwtAuthenticationConverter(): JwtAuthenticationConverter {
        val grantedAuthoritiesConverter = JwtGrantedAuthoritiesConverter()
        grantedAuthoritiesConverter.setAuthorityPrefix("")

        val jwtAuthenticationConverter = JwtAuthenticationConverter()
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(grantedAuthoritiesConverter)
        return jwtAuthenticationConverter
    }

    @Bean
    fun jwtDecoder(): JwtDecoder {
        return NimbusJwtDecoder
            .withPublicKey(rsaKeyProperties.publicKey)
            .build()
    }

    @Bean
    fun jwtEncoder(): JwtEncoder {
        val jwk =
            RSAKey.Builder(rsaKeyProperties.publicKey)
                .privateKey(rsaKeyProperties.privateKey)
                .build()
        val jwkSource: JWKSource<SecurityContext> = ImmutableJWKSet(JWKSet(jwk))

        return NimbusJwtEncoder(jwkSource)
    }
}
