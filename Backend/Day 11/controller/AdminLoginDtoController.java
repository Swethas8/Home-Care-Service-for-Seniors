package com.example.homecare.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.AdminLogin;
import com.example.homecare.service.AdminLoginDtoService;

@RestController
@RequestMapping("/adminlogin")

public class AdminLoginDtoController {

	@Autowired
	AdminLoginDtoService service;

	@PostMapping("/login")
	public boolean create(@RequestBody AdminLogin adminlogin) {
		return service.addAdmin(adminlogin);
	}
}
