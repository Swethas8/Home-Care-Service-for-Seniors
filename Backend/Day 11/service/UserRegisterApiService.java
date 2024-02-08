package com.example.homecare.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.models.UserRegister;
import com.example.homecare.repository.UserRegisterRepo;

@Service

public class UserRegisterApiService {

    @Autowired
    UserRegisterRepo repository;

    public boolean addStudent(UserRegister userRegister) {
        repository.save(userRegister);
        return true;
    }

    public boolean deleteUserByUserName(String userName) {
        UserRegister existingUser=repository.findByUserName(userName);
        if(existingUser!=null)
        {
            repository.delete(existingUser);
            return true;
        }
        else{
            return false;
        }
    }
}
