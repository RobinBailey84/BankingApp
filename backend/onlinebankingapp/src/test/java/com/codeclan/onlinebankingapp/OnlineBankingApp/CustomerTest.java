package com.codeclan.onlinebankingapp.OnlineBankingApp;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer.CustomerRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerTest {

    @Autowired
    CustomerRepository customerRepository;

    @Test
    public void contextLoads() {
    }

    @Test
    public void findCustomerByNameAndPassword(){
        Customer customer1 = new Customer("Minal", "Codeclan", "25 Ninian Crescent", 3000, 5 );
        customerRepository.save(customer1);
        List<Customer> foundResults = customerRepository.findCustomerByNameAndPassword("Minal", "Codeclan");
        assertEquals(1, foundResults.size());
    }
}
