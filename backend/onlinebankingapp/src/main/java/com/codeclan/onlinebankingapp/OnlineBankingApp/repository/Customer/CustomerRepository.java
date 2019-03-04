package com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import com.codeclan.onlinebankingapp.OnlineBankingApp.projections.EmbedCustomerAccounts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;



@RepositoryRestResource(excerptProjection = EmbedCustomerAccounts.class)
public interface CustomerRepository extends JpaRepository <Customer, Long>{

    Customer findCustomerByNameAndPassword(String name, String password);

}
