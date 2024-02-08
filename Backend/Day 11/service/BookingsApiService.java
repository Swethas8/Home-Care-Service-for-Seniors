package com.example.homecare.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.models.Bookings;
import com.example.homecare.repository.BookingsRepo;

@Service

public class BookingsApiService {
    
    @Autowired
    BookingsRepo repository;

    public List<Bookings> getBookings() {
        return repository.findAll();
    }

    public List<Bookings> getBookingsByName(String name)
	{
		return repository.findBookingsByName(name);
    }


    public boolean updateBookingByName(String name,String newStatus) {
        Optional<Bookings> bookingExisting=repository.findByName(name);
        if(bookingExisting.isPresent())
        {
            Bookings existingBooking=bookingExisting.get();
            existingBooking.setStatus(newStatus);
            repository.save(existingBooking);
            return true;
        }
        else{
            return false;
        }
    }

}
