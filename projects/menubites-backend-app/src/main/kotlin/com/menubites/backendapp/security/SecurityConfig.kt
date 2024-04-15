package com.menubites.backendapp.security

import com.menubites.backendapp.security.cachecontrol.CacheControlFilter
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.Customizer.withDefaults
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.provisioning.JdbcUserDetailsManager
import org.springframework.security.web.SecurityFilterChain
import javax.sql.DataSource

@Configuration
@EnableWebSecurity
class SecurityConfig {
    @Bean
    fun filterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .csrf { it.disable() }
            .authorizeHttpRequests {
                it.requestMatchers("/*").permitAll()
            }
            .sessionManagement { it.sessionCreationPolicy(SessionCreationPolicy.STATELESS) }
            .oauth2ResourceServer { it.jwt(withDefaults()) }
            .httpBasic(withDefaults())
        return http.build()
    }

    @Bean
    fun authenticationManager(config: AuthenticationConfiguration): AuthenticationManager? {
        return config.authenticationManager
    }

    @Bean
    fun userDetailsService(datasource: DataSource): UserDetailsService {
        return JdbcUserDetailsManager(datasource)
    }

    @Bean
    fun passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }

    @Bean
    fun cacheControlFilter(): FilterRegistrationBean<CacheControlFilter> {
        val registrationBean = FilterRegistrationBean(CacheControlFilter())
        registrationBean.filter = CacheControlFilter()
        registrationBean.order = 1
        registrationBean.addUrlPatterns("/*")

        return registrationBean
    }
}
