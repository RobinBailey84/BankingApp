package com.codeclan.onlinebankingapp.OnlineBankingApp.components;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Account;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Transaction;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Account.AccountRepository;
<<<<<<< HEAD

import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer.CustomerRepository;

=======
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer.CustomerRepository;
>>>>>>> 154398df6f0c862d1f901bdb1b71dc655764285f
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

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


        Account account1 = new Account(12345678, 123456, "regular", 1, 1000, customer1, "Current Account");
        accountRepository.save(account1);

        Account account2 = new Account(11223344, 654321, "holiday saver", 3, 0, customer2, "Saving Account");
        accountRepository.save(account2);

        Account account3 = new Account(22334455, 112233, "car savings", 4, 10, customer3, "ISA Account");
        accountRepository.save(account3);

        DateFormat sfd = new SimpleDateFormat("dd-mm-yyyy");
        String newDate = "01-03-2019";
        Date date = null;
        try {
            date = sfd.parse(newDate);
        }	catch (ParseException e){
            e.printStackTrace();
        }
        Transaction transaction1 = new Transaction(100, "Holiday",date);
        transactionRepository.save(transaction1);

        Transaction transaction2 = new Transaction(55, "Petrol Station", date);
        transactionRepository.save(transaction2);

        Transaction transaction3 = new Transaction(75, "Marks & Spencer", date);
        transactionRepository.save(transaction3);

        account1.addTransaction(transaction1);
        account1.addTransaction(transaction2);
        accountRepository.save(account1);

        



    }



}

