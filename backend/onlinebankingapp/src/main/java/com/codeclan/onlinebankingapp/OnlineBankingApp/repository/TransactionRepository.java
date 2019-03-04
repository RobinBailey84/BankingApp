package com.codeclan.onlinebankingapp.OnlineBankingApp.repository;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Transaction;
import com.codeclan.onlinebankingapp.OnlineBankingApp.projections.EmbedAccountTransactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedAccountTransactions.class)
public interface TransactionRepository extends JpaRepository<Transaction, Long> {

//    List<Transaction> findTransactionsByAccountId(Long accountId);

}
