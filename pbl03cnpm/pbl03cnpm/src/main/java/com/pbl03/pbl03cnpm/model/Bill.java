package com.pbl03.pbl03cnpm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "hoadon")
public class Bill {
	@Id
	@Column(name = "MaHD")
	private String id;

	@ManyToOne
	@JoinColumn(name = "MaKH", referencedColumnName = "MaKH")
	private Customer customer;
	
	@ManyToOne
	@JoinColumn(name = "MaNV", referencedColumnName = "MaNV")
	private Employee employee;
	
	@ManyToOne
	@JoinColumn(name = "MaDVVC", referencedColumnName = "MaDVVC")
	private Donvivanchuyen donvivanchuyen;
	
	@Column(name = "NgayBan")
	private String date;
	
	@ManyToOne
	@JoinColumn(name = "MaTinh", referencedColumnName = "MaTinh")
	private Province province;
	
	@Column(name = "DiaChi")
	private String address;
	
	@Column(name = "TongTien")
	private Integer sumPrice;
	
	@Column(name = "TrangThai")
	private Boolean status;
	
	public Bill() {
	}

	public Bill(String id, Customer customer, Employee employee, Donvivanchuyen donvivanchuyen, String date,
			Province province, String address, Integer sumPrice, Boolean status) {
		this.id = id;
		this.customer = customer;
		this.employee = employee;
		this.donvivanchuyen = donvivanchuyen;
		this.date = date;
		this.province = province;
		this.address = address;
		this.sumPrice = sumPrice;
		this.status = status;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Donvivanchuyen getDonvivanchuyen() {
		return donvivanchuyen;
	}

	public void setDonvivanchuyen(Donvivanchuyen donvivanchuyen) {
		this.donvivanchuyen = donvivanchuyen;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Province getProvince() {
		return province;
	}

	public void setProvince(Province province) {
		this.province = province;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Integer getSumPrice() {
		return sumPrice;
	}

	public void setSumPrice(Integer sumPrice) {
		this.sumPrice = sumPrice;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Bill [id=" + id + ", customer=" + customer + ", employee=" + employee + ", donvivanchuyen="
				+ donvivanchuyen + ", date=" + date + ", province=" + province + ", address=" + address + ", sumPrice="
				+ sumPrice + ", status=" + status + "]";
	}
	
	
}
