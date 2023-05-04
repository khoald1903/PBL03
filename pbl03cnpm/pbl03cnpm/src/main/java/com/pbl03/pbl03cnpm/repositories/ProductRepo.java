package com.pbl03.pbl03cnpm.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbl03.pbl03cnpm.model.Product;
import com.pbl03.pbl03cnpm.model.ProductDto;
import com.pbl03.pbl03cnpm.model.ProductID;

public interface ProductRepo extends JpaRepository<Product, ProductID>{
	List<Product> findBytenSP(String tenSP);
	Optional<Product> findByProductIDMaSPAndProductIDMaKCAndProductIDMaMau(String masp, String makc, String mamau);
}
