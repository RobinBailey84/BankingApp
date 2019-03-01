//package com.codeclan.onlinebankingapp.OnlineBankingApp.repository.Customer;
//
//import com.codeclan.onlinebankingapp.OnlineBankingApp.models.Customer;
//import org.hibernate.Criteria;
//import org.hibernate.HibernateException;
//import org.hibernate.Session;
//import org.hibernate.criterion.Restrictions;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.transaction.annotation.Transactional;
//
//import javax.persistence.EntityManager;
//import java.util.List;
//
//public class CustomerRepositoryImpl implements CustomerRepositoryCustom{
//
//    @Autowired
//    EntityManager entityManager;
//
//    @Transactional
//    @Override
//    public List<Customer> getCustomerByNameAndPassword(String name, String password) {
//        List<Customer> results = null;
//
//        Session session = entityManager.unwrap(Session.class);
//
//        Criteria cr = null;
//        try{
//            cr = session.createCriteria(Customer.class);
//            cr.add(Restrictions.eq("customer.name", name));
//            cr.add(Restrictions.eq("customer.password", password));
//        } catch (HibernateException e) {
//            e.printStackTrace();
//        }
//        results = cr.list();
//
//        return results;
//    }
//}
