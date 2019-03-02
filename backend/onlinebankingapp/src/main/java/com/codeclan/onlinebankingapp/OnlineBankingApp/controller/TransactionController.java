package com.codeclan.onlinebankingapp.OnlineBankingApp.controller;

import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    TransactionRepository transactionRepository;




}
