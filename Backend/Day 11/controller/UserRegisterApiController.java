package com.example.homecare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.UserRegister;
import com.example.homecare.service.UserRegisterApiService;

@RestController
@RequestMapping("/userRegister")

public class UserRegisterApiController {
    
    @Autowired
    UserRegisterApiService service;

    @PostMapping("/add")
    public boolean create(@RequestBody UserRegister userRegister) {
        return service.addStudent(userRegister);
    }

    @DeleteMapping("/delete/{userName}")
    public boolean deleteUser(@PathVariable String userName) {
        if(service.deleteUserByUserName(userName)){
            return true;

        }
        else{
            return false;
        }
    }

}
