package com.pbl03.pbl03cnpm.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "nhanhieu")
public class NhanHieu {
	@Id
	@Column(name = "MaNH")
	private String maNH;
	@Column(name = "TenNH")
	private String tenNH;
	@Column(name = "MaKV")
	private String maKV;
	public NhanHieu() {
		// TODO Auto-generated constructor stub
	}
	public NhanHieu(String maNH, String tenNH, String maKV) {
		super();
		this.maNH = maNH;
		this.tenNH = tenNH;
		this.maKV = maKV;
	}
	public String getMaNH() {
		return maNH;
	}
	public void setMaNH(String maNH) {
		this.maNH = maNH;
	}
	public String getTenNH() {
		return tenNH;
	}
	public void setTenNH(String tenNH) {
		this.tenNH = tenNH;
	}
	public String getMaKV() {
		return maKV;
	}
	public void setMaKV(String maKV) {
		this.maKV = maKV;
	}
	@Override
	public String toString() {
		return "NhanHieu [maNH=" + maNH + ", tenNH=" + tenNH + ", maKV=" + maKV + "]";
	}
	
}
