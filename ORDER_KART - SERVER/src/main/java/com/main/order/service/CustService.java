package com.main.order.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.main.order.model.Customer;
import com.main.order.repository.CustRepo;

@Service
public class CustService {
	@Autowired
	CustRepo repository;
	
	public String addCustomer(Customer customer) {
		repository.save(customer);
		return "Customer added";
	}
	
	public Optional<Customer> getCust(String mailId){
		return repository.findBymailId(mailId);
	}
}
