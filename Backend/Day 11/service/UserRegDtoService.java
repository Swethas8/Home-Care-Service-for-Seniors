package com.example.homecare.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.homecare.dto.UserRegisterDto;
import com.example.homecare.models.UserRegister;
import com.example.homecare.repository.UserRegisterRepo;

@Service

public class UserRegDtoService {

    @Autowired
    private UserRegisterRepo userRegRepo;

    private UserRegisterDto convertEntityToDto(UserRegister userReg) {
        UserRegisterDto userRegDto = new UserRegisterDto();
        userRegDto.setUserName(userReg.getUserName());
        userRegDto.setEmail(userReg.getEmail());
        userRegDto.setMobileNumber(userReg.getMobileNumber());
        return userRegDto;
    }

    public List<UserRegisterDto> getAllUsers() {
        return userRegRepo.findAll()
                .stream()
                .map(this::convertEntityToDto)
                .collect(Collectors.toList());
    }

    public List<UserRegisterDto> getUserByUserName(String userName){
        UserRegister existingUser=userRegRepo.findByUserName(userName);
        if(existingUser!=null){
            return Collections.singletonList(convertEntityToDto(existingUser));
        }
        else{
            return Collections.emptyList();
        }
    }

    public boolean updateUser(String userName, UserRegister userReg) {
        UserRegister existingUser = userRegRepo.findByUserName(userName);
        if (existingUser != null) {
            existingUser.setEmail(userReg.getEmail());
            existingUser.setMobileNumber(userReg.getMobileNumber());
            userRegRepo.save(existingUser);
            return true;
        } 
        else {
            return false;
        }
    }
}
