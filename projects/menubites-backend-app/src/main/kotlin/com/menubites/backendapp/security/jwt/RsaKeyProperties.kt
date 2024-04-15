package com.menubites.backendapp.security.jwt

import org.springframework.boot.context.properties.ConfigurationProperties
import java.security.interfaces.RSAPrivateKey
import java.security.interfaces.RSAPublicKey

@ConfigurationProperties(prefix = "rsa")
data class RsaKeyProperties(
    var publicKey: RSAPublicKey,
    var privateKey: RSAPrivateKey,
)
