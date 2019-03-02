package com.codeclan.onlinebankingapp.OnlineBankingApp.controller;


import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Account.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @Autowired
    AccountRepository accountRepository;
}
