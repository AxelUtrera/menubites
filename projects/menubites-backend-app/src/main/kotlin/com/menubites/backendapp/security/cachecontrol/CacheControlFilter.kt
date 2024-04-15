package com.menubites.backendapp.security.cachecontrol

import jakarta.servlet.FilterChain
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.web.filter.OncePerRequestFilter

class CacheControlFilter : OncePerRequestFilter() {
    /**
     * Add custom headers to the response.
     * These headers are added to the response to improve security and are the recommended headers given by OWASP.
     * See: https://owasp.org/www-project-secure-headers/index.html#configuration-proposal
     *
     * @param request  The request.
     * @param response The response.
     * @param filterChain The filter chain.
     * @throws ServletException If there is a servlet error.
     * @throws IOException If there is an IO error.
     */
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        headers.forEach { (key, value) ->
            response.addHeader(key, value)
        }

        filterChain.doFilter(request, response)
    }
}
