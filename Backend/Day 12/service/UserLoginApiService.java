package com.example.homecare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.models.UserLogin;
import com.example.homecare.repository.UserLoginRepo;

@Service

public class UserLoginApiService {

    @Autowired
    UserLoginRepo repository;

    public boolean addUser(UserLogin userlogin) {
        repository.save(userlogin);
        return true;
    }
}
