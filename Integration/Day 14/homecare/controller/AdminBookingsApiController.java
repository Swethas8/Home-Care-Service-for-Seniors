package com.example.homecare.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.homecare.dto.AdminBookingsDto;
import com.example.homecare.models.Bookings;
import com.example.homecare.service.AdminBookingsApiService;

@RestController
@RequestMapping("/bookings")

public class AdminBookingsApiController {

    @Autowired
    AdminBookingsApiService service;

    @GetMapping("/display")
    public List<Bookings> read() {
        return service.getBookings();
    }

    @GetMapping("/display/{bookingId}")
    public List<Bookings> getBookingsByBookingId(@PathVariable int bookingId) {
        return service.getBookingsByBookingId(bookingId);
    }

    @PutMapping("/update/{bookingId}")
    public boolean updateUser(@PathVariable int bookingId, @RequestBody AdminBookingsDto bookings) {
        if (service.updateUser(bookingId, bookings)) {

            return true;
        } 
        else {
            return false;
        }
    }

}