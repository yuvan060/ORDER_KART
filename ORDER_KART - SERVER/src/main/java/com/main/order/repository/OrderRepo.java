package com.main.order.repository;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.main.order.model.Customer;
import com.main.order.model.Order;

public interface OrderRepo extends JpaRepository<Order,Integer>{
	public Optional<Order> findBycustId(Customer custId);
}
