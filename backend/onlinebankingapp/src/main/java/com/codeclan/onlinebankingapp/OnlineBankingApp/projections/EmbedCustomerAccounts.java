package com.codeclan.onlinebankingapp.OnlineBankingApp.projections;


import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Account;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;

import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedCustomerAccounts", types = Customer.class )
public interface EmbedCustomerAccounts {
  long getId();
  String getName();
  String getPassword();
  String getAddress();
  int getsalary();
  int getCreditRating();
  List<Account> getAccounts();

}
