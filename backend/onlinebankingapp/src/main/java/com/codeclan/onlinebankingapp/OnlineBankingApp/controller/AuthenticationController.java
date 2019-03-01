package com.codeclan.onlinebankingapp.OnlineBankingApp.controller;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.LoginCredentials;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {

    @Autowired
    CustomerRepository customerRepository;

    @PostMapping(value = "/login")
    public Customer login(@RequestBody LoginCredentials credentials){
        return customerRepository.findCustomerByNameAndPassword(credentials.getUsername(), credentials.getPassword());
    }

}
