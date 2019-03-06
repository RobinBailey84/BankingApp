package com.codeclan.onlinebankingapp.OnlineBankingApp.controller;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.LoginCredentials;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;

@RestController
@RequestMapping("/authentication")
public class AuthenticationController {

    @Autowired
    CustomerRepository customerRepository;

    @PostMapping(value = "/login")
    public ResponseEntity login(@RequestBody LoginCredentials credentials){
        Customer customer = customerRepository.findCustomerByNameAndPassword(credentials.getUsername(), credentials.getPassword());
        if(customer != null) {
            return ResponseEntity.ok(customer);
        }else{
            return ResponseEntity.notFound().build();
        }
    }

}
