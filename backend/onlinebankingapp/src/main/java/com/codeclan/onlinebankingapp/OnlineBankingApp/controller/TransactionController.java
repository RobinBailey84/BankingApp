package com.codeclan.onlinebankingapp.OnlineBankingApp.controller;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Transaction;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    @Autowired
    TransactionRepository transactionRepository;

//    @GetMapping(value = "/account/{accountId}")
//    public List<Transaction> findTransactionsByAccountId( @PathVariable long accountId){
//        return transactionRepository.findTransactionsByAccountId(accountId);
//    }


}
