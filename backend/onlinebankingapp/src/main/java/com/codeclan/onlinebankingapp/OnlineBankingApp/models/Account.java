package com.codeclan.onlinebankingapp.OnlineBankingApp.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    @Column(name = "account_number")
    private int accountNumber;

    @Column(name="sort_code")
    private int sortCode;

    @Column(name = "account_name")
    private String accountName;

    @Column(name = "account_type")
    private String accountType;

    @Column(name = "interest_rate")
    private int interestRate;

    @Column(name = "balance")
    private double balance;

    @JsonIgnoreProperties(value = "accounts")
    @ManyToOne
    @JoinColumn(name="customer_id", nullable = false)
    private Customer customer;

    @OneToMany(mappedBy = "account")
    private List<Transaction> transactions;


    public Account(int accountNumber, int sortCode, String accountName, int interestRate, double balance, Customer customer, String accountType) {
        this.accountNumber = accountNumber;
        this.sortCode = sortCode;
        this.accountName = accountName;
        this.interestRate = interestRate;
        this.balance = balance;
        this.customer = customer;
        this.transactions = new ArrayList<>();
        this.accountType = accountType;
    }

    public Account() {
    }

    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public int getSortCode() {
        return sortCode;
    }

    public void setSortCode(int sortCode) {
        this.sortCode = sortCode;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

    public int getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(int interestRate) {
        this.interestRate = interestRate;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }

    public void addTransaction(Transaction transaction) {
        this.transactions.add(transaction);
    }
}
