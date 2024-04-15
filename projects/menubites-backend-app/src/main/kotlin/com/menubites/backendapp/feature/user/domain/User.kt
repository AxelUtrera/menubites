package com.menubites.backendapp.feature.user.domain

import jakarta.persistence.*

@Entity
@Table(
    name = "users",
    indexes = [
        Index(columnList = "email", unique = true)
    ],
    uniqueConstraints = [
        UniqueConstraint(columnNames = ["email"]),
    ]
)
class User (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long?,
    @Column(length = 50, nullable = false)
    var name : String?,
    @Column(length = 50, nullable = false)
    var lastname : String?,
    @Column(unique = true, length = 50, nullable = false)
    var email : String?
)
