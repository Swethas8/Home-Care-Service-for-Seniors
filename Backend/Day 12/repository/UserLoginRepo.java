package com.example.homecare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.homecare.models.UserLogin;

@Repository

public interface UserLoginRepo extends JpaRepository<UserLogin, Integer> {

}