package com.pbl03.pbl03cnpm.model;

public class HandleProduct {
	private Integer id;
	private String text;
	public HandleProduct() {
		// TODO Auto-generated constructor stub
	}
	public HandleProduct(Integer id, String text) {
		super();
		this.id = id;
		this.text = text;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	@Override
	public String toString() {
		return "HandleProduct [id=" + id + ", text=" + text + "]";
	}
	
}
