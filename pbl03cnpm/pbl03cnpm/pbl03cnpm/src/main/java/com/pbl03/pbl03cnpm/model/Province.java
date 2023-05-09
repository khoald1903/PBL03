package com.pbl03.pbl03cnpm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tinh")
public class Province {
	@Id
	@Column(name = "MaTinh")
	private String id;
	@Column(name = "TenTinh")
	private String name;
	@Column(name = "ChiPhiShip")
	private Integer fee;
	public Province() {
		// TODO Auto-generated constructor stub
	}
	public Province(String id, String name, Integer fee) {
		super();
		this.id = id;
		this.name = name;
		this.fee = fee;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getFee() {
		return fee;
	}
	public void setFee(Integer fee) {
		this.fee = fee;
	}
	@Override
	public String toString() {
		return "Province [id=" + id + ", name=" + name + ", fee=" + fee + "]";
	}
	
}
