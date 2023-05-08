package com.pbl03.pbl03cnpm.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pbl03.pbl03cnpm.model.Bill;
import com.pbl03.pbl03cnpm.model.BillDetail;

public interface BillDetailRepo extends JpaRepository<BillDetail, Integer>{
//	List<BillDetail> findByMaKH(String makh);
}
