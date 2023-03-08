package com.main.order.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.order.model.Customer;

public interface CustRepo extends JpaRepository<Customer,Integer>{
	public Optional<Customer> findBymailId(String mailId);
}
