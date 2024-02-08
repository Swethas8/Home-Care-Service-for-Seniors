package com.example.homecare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.UserLogin;
import com.example.homecare.service.UserLoginApiService;

@RestController
@RequestMapping("/userlogin")

public class UserLoginApiController {
	
	@Autowired
	UserLoginApiService service;

	@PostMapping("/login")
	public boolean create(@RequestBody UserLogin userlogin) {
		return service.addUser(userlogin);
	}
}
