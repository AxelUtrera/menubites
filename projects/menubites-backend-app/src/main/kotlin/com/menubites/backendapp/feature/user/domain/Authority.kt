package com.menubites.backendapp.feature.user.domain

import jakarta.persistence.*


@Entity
@Table(name = "authorities", indexes = [Index(name = "email_index", columnList = "email")])
class Authority(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long?,
    @Column(length = 50, nullable = false)
    var email: String?,
    @Column(length = 50, nullable = false)
    var authority: String?
) {
    override fun toString(): String {
        return "Authority(username='$email', authority='$authority', id=$id)"
    }
}
