package com.pbl03.pbl03cnpm.model;


import jakarta.persistence.Column;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "sanpham")
public class Product {
	@EmbeddedId
	private ProductID productID;
	
	@Column(name = "TenSP")
	private String tenSP;
	
	@ManyToOne
	@JoinColumn(name = "MaKC", referencedColumnName = "MaKC", insertable=false, updatable=false)
	private Size size;
	
	@ManyToOne
	@JoinColumn(name = "MaMau", referencedColumnName = "MaMau", insertable=false, updatable=false)
	private Color mau;
	
	@ManyToOne
	@JoinColumn(name = "MaNH", referencedColumnName = "MaNH", insertable=false, updatable=false)
	private NhanHieu nh;
	
	@ManyToOne
	@JoinColumn(name = "MaMH", referencedColumnName = "MaMH", insertable=false, updatable=false)
	private MatHang mh;
	
	@ManyToOne
	@JoinColumn(name = "MaKM", referencedColumnName = "MaKM", insertable=false, updatable=false)
	private Khuyenmai km;
	
	@Column(name = "SoLuong")
	private Integer soluong;
	
	@Column(name = "GiaBan")
	private Integer giaban;
	
	@Column(name = "HinhAnh")
	private String hinhanh;
	
	@Column(name = "MoTa")
	private String mota;
	@Column(name = "TrangThai")
	private Boolean Trangthai;
	
	public Product() {
		// TODO Auto-generated constructor stub
	}


	
	public Product(ProductID productID, String tenSP, Size size, Color mau, NhanHieu nh, MatHang mh, Khuyenmai km,
			Integer soluong, Integer giaban, String hinhanh, String mota, Boolean trangthai) {
		super();
		this.productID = productID;
		this.tenSP = tenSP;
		this.size = size;
		this.mau = mau;
		this.nh = nh;
		this.mh = mh;
		this.km = km;
		this.soluong = soluong;
		this.giaban = giaban;
		this.hinhanh = hinhanh;
		this.mota = mota;
		Trangthai = trangthai;
	}



	public Boolean getTrangthai() {
		return Trangthai;
	}



	public void setTrangthai(Boolean trangthai) {
		Trangthai = trangthai;
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

	public Size getSize() {
		return size;
	}

	public void setSize(Size size) {
		this.size = size;
	}

	public Color getMau() {
		return mau;
	}

	public void setMau(Color mau) {
		this.mau = mau;
	}

	public NhanHieu getNh() {
		return nh;
	}

	public void setNh(NhanHieu nh) {
		this.nh = nh;
	}

	public MatHang getMh() {
		return mh;
	}

	public void setMh(MatHang mh) {
		this.mh = mh;
	}

	public Khuyenmai getKm() {
		return km;
	}

	public void setKm(Khuyenmai km) {
		this.km = km;
	}

	public Integer getSoluong() {
		return soluong;
	}

	public void setSoluong(Integer soluong) {
		this.soluong = soluong;
	}

	public Integer getGiaban() {
		return giaban;
	}

	public void setGiaban(Integer giaban) {
		this.giaban = giaban;
	}

	public String getHinhanh() {
		return hinhanh;
	}

	public void setHinhanh(String hinhanh) {
		this.hinhanh = hinhanh;
	}

	public String getMota() {
		return mota;
	}

	public void setMota(String mota) {
		this.mota = mota;
	}

	@Override
	public String toString() {
		return "Product [productID=" + productID + ", tenSP=" + tenSP + ", size=" + size + ", mau=" + mau + ", nh=" + nh
				+ ", mh=" + mh + ", km=" + km + ", soluong=" + soluong + ", giaban=" + giaban + ", hinhanh=" + hinhanh
				+ ", mota=" + mota + "]";
	}

	
}

