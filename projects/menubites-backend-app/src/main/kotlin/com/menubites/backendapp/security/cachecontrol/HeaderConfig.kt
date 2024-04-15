package com.menubites.backendapp.security.cachecontrol

val headers = mapOf(
    "Cache-Control" to "no-store, max-age=0",

    "Content-Security-Policy" to
        "default-src 'self'; form-action 'self'; object-src 'none'; " +
        "frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content",

    "Cross-Origin-Embedder-Policy" to "require-corp",

    "Cross-Origin-Opener-Policy" to "same-origin",

    "Cross-Origin-Resource-Policy" to "same-origin",

    "Permissions-Policy" to
        "accelerometer=(),ambient-light-sensor=(),autoplay=(),battery=(),camera=(),display-capture=()," +
        "document-domain=(),encrypted-media=(),fullscreen=(),gamepad=(),geolocation=(),gyroscope=()," +
        "layout-animations=(self),legacy-image-formats=(self),magnetometer=(),microphone=(),midi=()," +
        "oversized-images=(self),payment=(),picture-in-picture=(),publickey-credentials-get=()," +
        "speaker-selection=(),sync-xhr=(self),unoptimized-images=(self),unsized-media=(self),usb=()," +
        "screen-wake-lock=(),web-share=(),xr-spatial-tracking=()",

    "Pragma" to "no-cache",

    "Referrer-Policy" to "no-referrer",

    "Strict-Transport-Security" to "max-age=31536000; includeSubDomains",

    "X-Permitted-Cross-Domain-Policies" to "none",

    "X-Content-Type-Options" to "nosniff",

    "X-Frame-Options" to "DENY",

    "X-XSS-Protection" to "1; mode=block",

    "ContentSecurityPolicy" to
        "default-src 'self'; form-action 'self'; object-src 'none'; " +
        "frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content"
)
