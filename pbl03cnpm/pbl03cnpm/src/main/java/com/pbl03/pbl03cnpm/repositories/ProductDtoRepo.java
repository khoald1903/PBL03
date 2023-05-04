package com.pbl03.pbl03cnpm.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbl03.pbl03cnpm.model.ProductDto;
import com.pbl03.pbl03cnpm.model.ProductID;

public interface ProductDtoRepo extends JpaRepository<ProductDto, ProductID>{
	Optional<ProductDto> findByProductIDMaSPAndProductIDMaKCAndProductIDMaMau(String masp, String makc, String mamau);
}
