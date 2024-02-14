package com.example.homecare.controller;

import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.About;
import java.util.List;
import com.example.homecare.service.AboutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/feed")
public class AboutController{
    @Autowired
	
    AboutService service;
	
	@PostMapping("/post")
	public boolean create(@RequestBody About student)
	{
		return service.addAbout(student);
	}
	@GetMapping("/get")
	public List<About>read()
	{
		return service.getAbout();
	}


}