package com.example.homecare.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class About {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int aboutId;

    @Column( nullable = false)
    private String content;    

}