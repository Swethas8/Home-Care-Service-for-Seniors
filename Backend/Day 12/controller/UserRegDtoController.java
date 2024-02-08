package com.example.homecare.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.dto.UserRegisterDto;
import com.example.homecare.models.UserRegister;
import com.example.homecare.service.UserRegDtoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/regdto")

public class UserRegDtoController {

    @Autowired
    private UserRegDtoService userDtoService;

    @GetMapping("/get")
    public List<UserRegisterDto> getAllUsers() {
        return userDtoService.getAllUsers();
    }

    @GetMapping("/get/{userName}")
    public List<UserRegisterDto> getUserByUserName(@PathVariable String userName) {
        return userDtoService.getUserByUserName(userName);
    }
    
    @PutMapping("/put/{userName}")
    public boolean updateUser(@PathVariable String userName, @RequestBody UserRegister userReg) {
        if (userDtoService.updateUser(userName, userReg)) {

            return true;
        } 
        else {
            return false;
        }
    }

}
