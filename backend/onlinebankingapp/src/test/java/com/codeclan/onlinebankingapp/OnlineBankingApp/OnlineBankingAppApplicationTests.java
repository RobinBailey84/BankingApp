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


		Account account1 = new Account(12345678, 123456, "regular", 1, 1000, customer1, "Current EmbedAccountTransactions");
		accountRepository.save(account1);
	}

	@Test
	public void canCreateAndSaveTransaction(){
		Customer customer1 = new Customer("Robin Bailey", "Arseanl", "9 Laurel Park", 20000, 4 );
		customerRepository.save(customer1);

		Account account1 = new Account(12345678, 123456, "regular", 1, 1000, customer1, "Current EmbedAccountTransactions");
		accountRepository.save(account1);

		DateFormat sfd = new SimpleDateFormat("dd-mm-yyyy");
		String newDate = "01-03-2019";
		Date date = null;
		try {
			date = sfd.parse(newDate);
		}	catch (ParseException e){
			e.printStackTrace();
		}

		Transaction transaction1 = new Transaction(100, "Holiday", date, account1);
		transactionRepository.save(transaction1);

	}

	@Test
	public void findCustomerByNameAndPassword(){
//		Customer customer2 = new Customer("Minal Sakriya", "Java", "5 Glasgow Street", 50000, 2);
//		customerRepository.save(customer2);
		Customer foundCustomer = customerRepository.findCustomerByNameAndPassword("Minal Sakriya", "Java");
//		assertNotNull(foundCustomer);
//		assertEquals(customer2.getId(), foundCustomer.getId());
//		assertEquals(customer2.getAddress(), foundCustomer.getAddress());
		assertEquals("Minal Sakriya", foundCustomer.getName());
	}

//	@Test
//	public void canGetTransactionsByAccount() {
//		Customer customer5 = new Customer("John", "Fish", "25 City Centre", 30700, 3);
//		customerRepository.save(customer5);
//		EmbedAccountTransactions account5 = new EmbedAccountTransactions(12348878, 100456, "regular", 1, 10000, customer5, "Current EmbedAccountTransactions");
//		accountRepository.save(account5);
//		DateFormat sfd = new SimpleDateFormat("dd-mm-yyyy");
//		String newDate = "01-03-2019";
//		Date date = null;
//		try {
//			date = sfd.parse(newDate);
//		}	catch (ParseException e){
//			e.printStackTrace();
//		}
//		Transaction transaction5 = new Transaction(100, "Flights",date, account5);
//		transactionRepository.save(transaction5);
//		List<Transaction> foundTransactions = transactionRepository.findTransactionsByAccountId(account5);
//		assertEquals(1, foundTransactions.size());
//	}
}
