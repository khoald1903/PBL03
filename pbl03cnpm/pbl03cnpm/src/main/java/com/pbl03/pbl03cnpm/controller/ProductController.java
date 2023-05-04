package com.pbl03.pbl03cnpm.controller;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pbl03.pbl03cnpm.model.Color;
import com.pbl03.pbl03cnpm.model.HandleProduct;
import com.pbl03.pbl03cnpm.model.Khuyenmai;
import com.pbl03.pbl03cnpm.model.MatHang;
import com.pbl03.pbl03cnpm.model.NhanHieu;
import com.pbl03.pbl03cnpm.model.Product;
import com.pbl03.pbl03cnpm.model.ProductDto;
import com.pbl03.pbl03cnpm.model.ProductID;
import com.pbl03.pbl03cnpm.model.ResponseObject;
import com.pbl03.pbl03cnpm.model.Size;
import com.pbl03.pbl03cnpm.repositories.KhuyenmaiRepo;
import com.pbl03.pbl03cnpm.repositories.KichcoRepo;
import com.pbl03.pbl03cnpm.repositories.MathangRepo;
import com.pbl03.pbl03cnpm.repositories.MauRepo;
import com.pbl03.pbl03cnpm.repositories.NhanhieuRepo;
import com.pbl03.pbl03cnpm.repositories.ProductDtoRepo;
import com.pbl03.pbl03cnpm.repositories.ProductRepo;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/sanpham")
public class ProductController {
	@Autowired
	private KichcoRepo kichcoRepo;
	@Autowired
	private MauRepo mauRepo;
	@Autowired
	private NhanhieuRepo nhanhieuRepo;
	@Autowired
	private MathangRepo mathangRepo;
	@Autowired
	private KhuyenmaiRepo khuyenmaiRepo;
	@Autowired 
	ProductDtoRepo productDtoRepo;
	@Autowired
	private ProductRepo productRepo;
	@GetMapping("/kc")
	List<Size> getKC(){
		return kichcoRepo.findAll();
	}
	
	@GetMapping("/mau")
	List<Color> getMau(){
		return mauRepo.findAll();
	}
	
	@GetMapping("/nh")
	List<NhanHieu> getNH(){
		return nhanhieuRepo.findAll();
	}
	
	@GetMapping("/mh")
	List<MatHang> getMH(){
		return mathangRepo.findAll();
	}
	
	@GetMapping("/km")
	List<Khuyenmai> getKM(){
		return khuyenmaiRepo.findAll();
	}
	
	@GetMapping("")
	List<Product> getAll(){
		return productRepo.findAll()
						  .stream()
						  .filter(t -> t.getTrangthai() == true)
						  .toList();
	}
	
	@PutMapping("delete/{masp}&{makc}&{mamau}")
	ResponseEntity<ResponseObject> deleteProduct(@PathVariable String id, @PathVariable String masp, @PathVariable String makc, @PathVariable String mamau){
		Optional<ProductDto> updatedProduct = productDtoRepo.findByProductIDMaSPAndProductIDMaKCAndProductIDMaMau(masp, makc, mamau);
		if(updatedProduct.isPresent()) {
			ProductDto temp = updatedProduct.get();
			temp.setTrangthai(false);
			productDtoRepo.save(temp);
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Delete successfully", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("failed", "Can not find product to delete", ""));
	}
	
	@PutMapping("/update/{masp}&{makc}&{mamau}")
	ResponseEntity<ResponseObject> updateProduct(@RequestBody ProductDto newProduct, @PathVariable String masp, @PathVariable String makc, @PathVariable String mamau){
		
		ProductDto updatedProduct = productDtoRepo.findByProductIDMaSPAndProductIDMaKCAndProductIDMaMau(masp, makc, mamau)
				.map(product -> {
					product.setTenSP(newProduct.getTenSP());
					product.setProductID(newProduct.getProductID());
					product.setMaNH(newProduct.getMaNH());
					product.setMaMH(newProduct.getMaMH());
					product.setMaKM(newProduct.getMaKM());
					product.setSoLuong(newProduct.getSoLuong());
					product.setGiaBan(newProduct.getGiaBan());
					product.setHinhAnh(newProduct.getHinhAnh());
					product.setMoTa(newProduct.getMoTa());
					product.setTrangthai(newProduct.getTrangthai());
					return productDtoRepo.save(product);
				}).orElseGet(() -> {
					newProduct.setProductID(newProduct.getProductID());
					return productDtoRepo.save(newProduct);
				});
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("ok", "Update successfully", updatedProduct));
	}
	
	@GetMapping("/list/{id}&{text}")
	List<Product> getProducts(@PathVariable Integer id, @PathVariable String text){
		List<Product> products = null;
			if(id == 1) {
				products = productRepo.findAll().stream().filter(t -> t.getTrangthai() == true).toList();
			}
			else if(id == 2) {
				products = productRepo.findAll().stream()
						 .filter(t -> t.getTrangthai() == true)
						 .sorted((o1, o2) -> (o1.getGiaban()-o2.getGiaban()))
						 .toList();
			}
			else if(id == 3) {
				products = productRepo.findAll().stream()
							.filter(t -> t.getTrangthai() == true)
							.sorted((o1, o2) -> (o2.getGiaban()-o1.getGiaban()))
							.toList();
			}
			else if(id == 4)
			{
				products = productRepo.findAll().stream()
							.filter(t -> t.getTrangthai() == true)
							.sorted((o1, o2) -> (o1.getSoluong()-o2.getSoluong()))
							.toList();
			}
			else if(id == 5)
			{
				products = productRepo.findAll().stream()
						  .filter(t -> t.getTrangthai() == true)
						  .sorted((o1, o2) -> (o2.getSoluong()- o1.getSoluong()))
						  .toList();
			}
			if(id != null) {
				return products.stream()
						.filter(t -> t.getTrangthai() == true)
						.filter(t -> t.getTenSP().contains(text.toUpperCase()))
						.toList();
			}
			else return products;
	}
	@PostMapping("/create")
	ResponseEntity<ResponseObject> createProduct(@RequestBody ProductDto newProduct){
		boolean createProduct = productDtoRepo.existsById(newProduct.getProductID());
		if(createProduct) {
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("failed", "Create Error cause product was existed", ""));
		}
		productDtoRepo.save(newProduct);
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("ok", "Create successfully", newProduct));
	}
	
	@GetMapping("/getProduct/{masp}&{makc}&{mamau}")
	ResponseEntity<ResponseObject> getProduct(@PathVariable String masp, @PathVariable String makc, @PathVariable String mamau){
		Optional<Product> product = productRepo.findByProductIDMaSPAndProductIDMaKCAndProductIDMaMau(masp, makc, mamau);
		if(product.isEmpty()) {
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("failed", "Cannot find product ", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("ok", "Find successfully", product.get()));
	}
}
