package com.codeclan.onlinebankingapp.OnlineBankingApp.controller;

import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;
}
