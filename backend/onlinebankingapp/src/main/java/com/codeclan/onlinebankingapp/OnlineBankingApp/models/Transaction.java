package com.codeclan.onlinebankingapp.OnlineBankingApp.models;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;

import java.util.List;

@Entity
@Table(name = "transactions")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column
    private int amount;

    @Column
    private String description;

    @Column
    private Date transactionDate;

    @ManyToMany
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @JoinTable(
            name = "accounts_transactions",
            joinColumns = {@JoinColumn(name = "transaction_id", nullable = false, updatable = false)},
            inverseJoinColumns = {@JoinColumn(name="account_id", nullable = false, updatable = false)}
    )
    private List<Account> accounts;

    public Transaction(int amount, String description, Date transactionDate) {
        this.amount = amount;
        this.description = description;
        this.transactionDate = transactionDate;
        this.accounts = new ArrayList<Account>();
    }

    public Transaction() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Account> getAccounts() {
        return accounts;
    }

    public void setAccounts(List<Account> accounts) {
        this.accounts = accounts;
    }
}
