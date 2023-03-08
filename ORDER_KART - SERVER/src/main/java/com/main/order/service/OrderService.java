package com.main.order.service;

import java.util.List;
//import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.main.order.model.Customer;
import com.main.order.model.Order;
import com.main.order.repository.OrderRepo;

@Service
public class OrderService {
	@Autowired
	OrderRepo repository;
	
	public String addOrder(Order order) {
		
		repository.save(order);
		return "Order Booked";
	}
	
	public Optional<Order> getOrders(int custId){
		return repository.findById(custId);
	}
	
//	public List<Order> getOrderSorted(String field){
//		return repository.findAll(Sort.by(field));
//	}
//	
//	public List<Order> getOrderPaginated(int offset,int size){
//		return repository.findAll(PageRequest.of(offset, size)).getContent();
//	}
//	
//	public List<Order> getOrderPaginated(int offset,int size,String field){
//		return repository.findAll(PageRequest.of(offset, size,Sort.by(field))).getContent();
//	}
	
	public List<Order> getOrder(){
		return repository.findAll();
	}
	public String updateOrder(Order order,int id) {
		Order orders= repository.findById(id).get();
		orders.setAddress(order.getAddress());
		orders.setCustId(order.getCustId());
		orders.setOrderBy(order.getOrderBy());
		orders.setOrderName(order.getOrderName());
		orders.setPhoneNo(order.getPhoneNo());
		repository.save(orders);
		return "Order Updated ";
	}
	
	public String  deleteOrder(int id) {
		repository.deleteById(id);
		return "Order Successfully Deleted";
	}
}
