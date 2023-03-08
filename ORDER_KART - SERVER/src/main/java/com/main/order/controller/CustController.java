package com.main.order.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.main.order.model.Customer;
import com.main.order.service.CustService;

@RestController
@CrossOrigin
public class CustController {
	@Autowired
	CustService service;
	
	
	@PostMapping("/Customer")
	public String addCustomer(@RequestBody Customer customer) {
		return service.addCustomer(customer);
	}
	
	@GetMapping("/Customer/{mailId}")
	public Optional<Customer> getCustomer(@PathVariable String mailId){
		return service.getCust(mailId);
	}
}
