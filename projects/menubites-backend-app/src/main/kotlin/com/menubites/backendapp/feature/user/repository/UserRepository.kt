package com.menubites.backendapp.feature.user.repository;

import com.menubites.backendapp.feature.user.domain.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository {

}

interface JpaUserRepository : JpaRepository<User, Long>, UserRepository {

}