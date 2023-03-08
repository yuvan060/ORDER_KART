package com.main.order.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Orders")
public class Order {
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(name="orderId")
	private int orderId;
	@Column(name="orderName")
	private String orderName;
	@OneToOne
	private Customer custId;
	@Column(name="orderBy")
	private String orderBy;
	@Column(name="address")
	private String address;
	@Column(name="phoneNo")
	private long phoneNo;
	public Customer getCustId() {
		return custId;
	}
	public void setCustId(Customer custId) {
		this.custId = custId;
	}
	public int getOrderId() {
		return orderId;
	}
	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	public String getOrderName() {
		return orderName;
	}
	public void setOrderName(String orderName) {
		this.orderName = orderName;
	}
	public String getOrderBy() {
		return orderBy;
	}
	public void setOrderBy(String orderBy) {
		this.orderBy = orderBy;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	@Override
	public String toString() {
		return "Order [orderId=" + orderId + ", orderName=" + orderName + ", custId=" + custId + ", orderBy=" + orderBy
				+ ", address=" + address + ", phoneNo=" + phoneNo + "]";
	}
}
