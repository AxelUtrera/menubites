package com.menubites.backendapp

import com.menubites.backendapp.security.jwt.RsaKeyProperties
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.context.properties.EnableConfigurationProperties
import org.springframework.boot.runApplication

@SpringBootApplication
@EnableConfigurationProperties(RsaKeyProperties::class)
class ManubitesBackendApplication

fun main(args: Array<String>) {
	runApplication<ManubitesBackendApplication>(*args)
}
