package com.example.homecare.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.homecare.models.About;

@Repository

public interface AboutRepo extends JpaRepository<About, Integer> {

    
}