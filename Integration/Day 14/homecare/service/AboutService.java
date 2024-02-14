package com.example.homecare.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.models.About;
import com.example.homecare.repository.AboutRepo;

@Service
public class AboutService
{
	@Autowired
	AboutRepo repository;
	public boolean addAbout(About about)
	{
		repository.save(about);
		return true;
	}
	public List<About>getAbout()
	{
		return repository.findAll();
	}
	
}