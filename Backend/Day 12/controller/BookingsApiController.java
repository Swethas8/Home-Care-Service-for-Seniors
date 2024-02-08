package com.example.homecare.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.homecare.models.Bookings;
import com.example.homecare.service.BookingsApiService;

@RestController
@RequestMapping("/bookings")

public class BookingsApiController {

    @Autowired
    BookingsApiService service;

    @GetMapping("/get")
    public List<Bookings> read() {
        return service.getBookings();
    }

    @GetMapping("/get/{name}")
    public List<Bookings> getBookingsByName(@PathVariable String name) {
        return service.getBookingsByName(name);
    }

    @PutMapping("/update/{name}")
    public boolean updateBookingByName(@PathVariable String name, @RequestParam String status) {
        if (service.updateBookingByName(name, status)) {
            return true;
        }
        else {
            return false;
        }
    }

}
