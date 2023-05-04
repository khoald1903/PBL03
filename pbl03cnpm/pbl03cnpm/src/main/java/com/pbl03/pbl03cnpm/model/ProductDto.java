package com.pbl03.pbl03cnpm.model;

import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "sanpham")
public class ProductDto {
	@EmbeddedId
	private ProductID productID;
	@Column(name = "TenSP")
	private String tenSP;
	@Column(name = "MaNH")
	private String maNH;
	@Column(name = "MaMH")
	private String maMH;
	@Column(name = "MaKM")
	private String maKM;
	@Column(name = "SoLuong")
	private String soLuong;
	@Column(name = "GiaBan")
	private Integer giaBan;
	@Column(name = "HinhAnh")
	private String hinhAnh;
	@Column(name = "MoTa")
	private String moTa;
	@Column(name = "TrangThai")
	private Boolean trangthai;
	public ProductDto() {
	}
	public ProductID getProductID() {
		return productID;
	}
	public void setProductID(ProductID productID) {
		this.productID = productID;
	}
	public String getTenSP() {
		return tenSP;
	}
	public void setTenSP(String tenSP) {
		this.tenSP = tenSP;
	}
	public String getMaNH() {
		return maNH;
	}
	public void setMaNH(String maNH) {
		this.maNH = maNH;
	}
	public String getMaMH() {
		return maMH;
	}
	public void setMaMH(String maMH) {
		this.maMH = maMH;
	}
	public String getMaKM() {
		return maKM;
	}
	public void setMaKM(String maKM) {
		this.maKM = maKM;
	}
	public String getSoLuong() {
		return soLuong;
	}
	public void setSoLuong(String soLuong) {
		this.soLuong = soLuong;
	}
	public Integer getGiaBan() {
		return giaBan;
	}
	public void setGiaBan(Integer giaBan) {
		this.giaBan = giaBan;
	}
	public String getHinhAnh() {
		return hinhAnh;
	}
	public void setHinhAnh(String hinhAnh) {
		this.hinhAnh = hinhAnh;
	}
	public String getMoTa() {
		return moTa;
	}
	public void setMoTa(String moTa) {
		this.moTa = moTa;
	}
	public Boolean getTrangthai() {
		return trangthai;
	}
	public void setTrangthai(Boolean trangthai) {
		this.trangthai = trangthai;
	}
	@Override
	public String toString() {
		return "ProductDto [productID=" + productID + ", tenSP=" + tenSP + ", maNH=" + maNH + ", maMH=" + maMH
				+ ", maKM=" + maKM + ", soLuong=" + soLuong + ", giaBan=" + giaBan + ", hinhAnh=" + hinhAnh + ", moTa="
				+ moTa + ", trangthai=" + trangthai + "]";
	}
	public ProductDto(ProductID productID, String tenSP, String maNH, String maMH, String maKM, String soLuong,
			Integer giaBan, String hinhAnh, String moTa, Boolean trangthai) {
		super();
		this.productID = productID;
		this.tenSP = tenSP;
		this.maNH = maNH;
		this.maMH = maMH;
		this.maKM = maKM;
		this.soLuong = soLuong;
		this.giaBan = giaBan;
		this.hinhAnh = hinhAnh;
		this.moTa = moTa;
		this.trangthai = trangthai;
	}
	
	
}
