package com.pbl03.pbl03cnpm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "chitiethoadon")
public class BillDetail {
	@Id
	private String id;
	@Column(name = "MaSP")
	private String maSP;
	@Column(name = "TenSP")
	private String tenSP;
	@Column(name = "MaMau")
	private String maMau;
	@Column(name = "MaKC")
	private String maKC;
	@Column(name = "SoLuong")
	private Integer soluong;
	public BillDetail() {
		// TODO Auto-generated constructor stub
	}
	public BillDetail(String id, String maSP, String tenSP, String maMau, String maKC, Integer soluong) {
		super();
		this.id = id;
		this.maSP = maSP;
		this.tenSP = tenSP;
		this.maMau = maMau;
		this.maKC = maKC;
		this.soluong = soluong;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMaSP() {
		return maSP;
	}
	public void setMaSP(String maSP) {
		this.maSP = maSP;
	}
	public String getTenSP() {
		return tenSP;
	}
	public void setTenSP(String tenSP) {
		this.tenSP = tenSP;
	}
	public String getMaMau() {
		return maMau;
	}
	public void setMaMau(String maMau) {
		this.maMau = maMau;
	}
	public String getMaKC() {
		return maKC;
	}
	public void setMaKC(String maKC) {
		this.maKC = maKC;
	}
	public Integer getSoluong() {
		return soluong;
	}
	public void setSoluong(Integer soluong) {
		this.soluong = soluong;
	}
	@Override
	public String toString() {
		return "BillDetail [id=" + id + ", maSP=" + maSP + ", tenSP=" + tenSP + ", maMau=" + maMau + ", maKC=" + maKC
				+ ", soluong=" + soluong + "]";
	}
	
}
