package com.example.homecare.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.dto.UserDto;
import com.example.homecare.service.UserApiService;

@RestController
public class UserApiController {

	@Autowired
	UserApiService service;
	
	@GetMapping("/display")
	public List<UserDto> read(){
		return service.getAllUsers();
	}
	
	@GetMapping("/display/{name}")
    public List<UserDto> getUserByUserName(@PathVariable String name) {
        return service.getUserByUserName(name);
    }
    
    @PutMapping("/update/{name}")
    public boolean updateUser(@PathVariable String name, @RequestBody UserDto userReg) {
        if (service.updateUser(name, userReg)) {

            return true;
        } 
        else {
            return false;
        }
    }
    
}
