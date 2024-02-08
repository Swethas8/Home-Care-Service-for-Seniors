package com.example.homecare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.homecare.models.UserRegister;

@Repository

public interface UserRegisterRepo extends JpaRepository<UserRegister, Integer> {

    public UserRegister findByUserName(String userName);

}