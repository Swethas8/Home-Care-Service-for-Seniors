package com.example.homecare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.models.AdminLogin;
import com.example.homecare.repository.AdminLoginRepo;

@Service

public class AdminLoginDtoService {

    @Autowired
    AdminLoginRepo repository;

    public boolean addAdmin(AdminLogin adminlogin) {
        repository.save(adminlogin);
        return true;
    }
}
