package com.codeclan.onlinebankingapp.OnlineBankingApp;

import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Account;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Transaction;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Account.AccountRepository;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer.CustomerRepository;
import com.codeclan.onlinebankingapp.OnlineBankingApp.repository.TransactionRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

@RunWith(SpringRunner.class)
@SpringBootTest
public class OnlineBankingAppApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	AccountRepository accountRepository;

	@Autowired
	TransactionRepository transactionRepository;

	@Test
	public void contextLoads() {
	}

	@Test
	public void createCustomerAndSaveCustomer(){
		Customer customer1 = new Customer("Robin Bailey", "Arsenal", "9 Laurel Park", 20000, 4 );
		customerRepository.save(customer1);
	}

	@Test
	public void createAccountAndSaveAccount(){
		Customer customer1 = new Customer("Robin Bailey", "Arseanl", "9 Laurel Park", 20000, 4 );
		customerRepository.save(customer1);


		Account account1 = new Account(12345678, 123456, "regular", 1, 1000, customer1, "Current Account");
		accountRepository.save(account1);
	}

	@Test
	public void canCreateAndSaveTransaction(){
		DateFormat sfd = new SimpleDateFormat("dd-mm-yyyy");
		String newDate = "01-03-2019";
		Date date = null;
		try {
			date = sfd.parse(newDate);
		}	catch (ParseException e){
			e.printStackTrace();
		}

		Transaction transaction1 = new Transaction(100, "Holiday", date);
		transactionRepository.save(transaction1);

	}

	@Test
	public void findCustomerByNameAndPassword(){
		Customer expectedCustomer = new Customer("Robin Bailey", "Arsenal", "9 Laurel Park", 20000, 4 );
		Customer foundCustomer = customerRepository.findCustomerByNameAndPassword("Robin Bailey", "Arsenal");
		assertNotNull(foundCustomer);
		assertEquals(expectedCustomer.getId(), foundCustomer.getId());
		assertEquals(expectedCustomer.getAddress(), foundCustomer.getAddress());
	}




}
