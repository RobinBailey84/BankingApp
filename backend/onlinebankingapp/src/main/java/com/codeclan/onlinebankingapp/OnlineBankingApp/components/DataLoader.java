package com.codeclan.onlinebankingapp.OnlineBankingApp.components;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Account;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Transaction;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Account.AccountRepository;

import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer.CustomerRepository;

import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;
import java.util.Locale;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    TransactionRepository transactionRepository;

    public DataLoader() {

    }

    public void run(ApplicationArguments args) {

        Customer customer1 = new Customer("Robin Bailey", "Arsenal", "9 Laurel Park", 20000, 4);
        customerRepository.save(customer1);

        Customer customer2 = new Customer("Minal Sakriya", "Java", "5 Glasgow Street", 50000, 2);
        customerRepository.save(customer2);

        Customer customer3 = new Customer("Iain Wentworth", "Codeclan", "20 City Centre", 30000, 3);
        customerRepository.save(customer3);


        Account account1 = new Account(12345678, 123456, "regular", 1, 10000, customer1, "Current");
        accountRepository.save(account1);

        Account account2 = new Account(11223344, 654321, "holiday saver", 3, 1200, customer2, "Savings");
        accountRepository.save(account2);

        Account account3 = new Account(22334455, 112233, "car savings", 4, 10, customer3, "ISA");
        accountRepository.save(account3);

        Account account4 = new Account(12395678, 126456, "regular2", 1, 80000, customer1, "Current2");
        accountRepository.save(account4);

        DateFormat sfd = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        String newDate = "06-03-2019 10:05:45";
        Date date = null;
        try {
            date = sfd.parse(newDate);
        }	catch (ParseException e){
            e.printStackTrace();
        }
        Transaction transaction1 = new Transaction(100, "Flights",date, account1);
        transactionRepository.save(transaction1);

        Transaction transaction2 = new Transaction(55, "Petrol Station", date, account1);
        transactionRepository.save(transaction2);

        Transaction transaction3 = new Transaction(75, "Marks & Spencer", date, account1);
        transactionRepository.save(transaction3);

        account1.addTransaction(transaction1);
        account2.addTransaction(transaction2);
        account1.addTransaction(transaction3);
        accountRepository.save(account1);

        customer1.addAccount(account1);
        customer1.addAccount(account2);
        customerRepository.save(customer1);


    }



}

