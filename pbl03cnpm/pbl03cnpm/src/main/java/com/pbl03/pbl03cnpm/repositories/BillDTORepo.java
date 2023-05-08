package com.pbl03.pbl03cnpm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbl03.pbl03cnpm.model.BillDTO;

public interface BillDTORepo extends JpaRepository<BillDTO, Integer>{
	List<BillDTO> findByMaKH(String makh);
}
