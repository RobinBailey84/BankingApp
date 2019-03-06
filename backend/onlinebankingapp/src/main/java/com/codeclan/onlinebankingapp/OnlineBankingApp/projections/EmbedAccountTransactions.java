package com.codeclan.onlinebankingapp.OnlineBankingApp.projections;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Account;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Transaction;
import org.springframework.data.rest.core.config.Projection;

import java.util.Date;
import java.util.List;

@Projection(name = "embedAccountTransactions", types = Account.class)
public interface EmbedAccountTransactions {
    long getId();
    int getAccountNumber();
    int getSortCode();
    String getAccountName();
    String getAccountType();
    int getInterestRate();
    int getBalance();
    List<Transaction> getTransactions();


}
