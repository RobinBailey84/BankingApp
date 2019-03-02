package com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository <Customer, Long>{

    List<Customer> findCustomerByNameAndPassword(String name, String password);

}
