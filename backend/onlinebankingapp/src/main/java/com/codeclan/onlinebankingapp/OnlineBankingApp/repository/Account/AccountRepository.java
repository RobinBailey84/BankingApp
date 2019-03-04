package com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Account;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Account;
import com.codeclan.onlinebankingapp.OnlineBankingApp.projections.EmbedAccountTransactions;
import com.codeclan.onlinebankingapp.OnlineBankingApp.projections.EmbedCustomerAccounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedAccountTransactions.class)
public interface AccountRepository extends JpaRepository<Account, Long> {
}
