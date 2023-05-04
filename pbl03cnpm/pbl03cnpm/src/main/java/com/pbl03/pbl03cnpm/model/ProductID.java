package com.pbl03.pbl03cnpm.model;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

@Embeddable
public class ProductID implements Serializable{

	private static final long serialVersionUID = 6639844686002858807L;
	@Column(name = "MaSP",insertable=false, updatable=false)
	private String maSP;
	@Column(name = "MaKC",insertable=false, updatable=false)
	private String maKC;
	@Column(name = "MaMau", insertable=false, updatable=false)
	private String maMau;
	public ProductID() {
		// TODO Auto-generated constructor stub
	}
	public ProductID(String maSP, String maKC, String maMau) {
		super();
		this.maSP = maSP;
		this.maKC = maKC;
		this.maMau = maMau;
	}
	public String getMaSP() {
		return maSP;
	}
	public void setMaSP(String maSP) {
		this.maSP = maSP;
	}
	public String getMaKC() {
		return maKC;
	}
	public void setMaKC(String maKC) {
		this.maKC = maKC;
	}
	public String getMaMau() {
		return maMau;
	}
	public void setMaMau(String maMau) {
		this.maMau = maMau;
	}
	@Override
	public String toString() {
		return "ProductID [maSP=" + maSP + ", maKC=" + maKC + ", maMau=" + maMau + "]";
	}
	
}
