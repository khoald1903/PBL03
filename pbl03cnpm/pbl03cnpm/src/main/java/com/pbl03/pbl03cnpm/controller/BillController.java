package com.pbl03.pbl03cnpm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pbl03.pbl03cnpm.model.Bill;
import com.pbl03.pbl03cnpm.model.BillDTO;
import com.pbl03.pbl03cnpm.model.BillDetail;
import com.pbl03.pbl03cnpm.model.ProductDetail;
import com.pbl03.pbl03cnpm.model.ResponseObject;
import com.pbl03.pbl03cnpm.repositories.BillDTORepo;
import com.pbl03.pbl03cnpm.repositories.BillDetailRepo;
import com.pbl03.pbl03cnpm.repositories.BillRepo;
import com.pbl03.pbl03cnpm.repositories.CustomerRepo;
import com.pbl03.pbl03cnpm.repositories.DonvivanchuyenRepo;
import com.pbl03.pbl03cnpm.repositories.EmployeeRepo;
import com.pbl03.pbl03cnpm.repositories.ProvinceRepo;

import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/bill")
public class BillController {
	@Autowired
	EntityManager em;
	@Autowired
	private EmployeeRepo employeeRepo;
	@Autowired
	private CustomerRepo customerRepo;
	@Autowired
	private DonvivanchuyenRepo donvivanchuyenRepo;
	@Autowired
	private ProvinceRepo provinceRepo;
	@Autowired
	private BillRepo billRepo;
	@Autowired
	private BillDTORepo billDTORepo;
	@Autowired
	private BillDetailRepo billDetailRepo;
	@GetMapping("")
	List<Bill> getAllBills(){
		return billRepo.findAll();
	}
	
	@GetMapping("/{id}")
	List<BillDTO> getBillByMaKH(@PathVariable String id){
		List<BillDTO> bills = billDTORepo.findByMaKH(id);
		if(bills.size() > 0) {
			return bills;
		}
		return bills;
	}
	@GetMapping("/get")
	BillDTO addBilll(@RequestBody BillDTO bill){
		return bill;
	}
	
	@PostMapping("/add")
	@Transactional
	ResponseEntity<ResponseObject> addBill(@RequestBody BillDTO bill){
		em.createNativeQuery("SET foreign_key_checks = 0;").executeUpdate();
		billDTORepo.save(bill);
		em.createNativeQuery("SET foreign_key_checks = 1;").executeUpdate();
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("ok", "Create successfully", ""));
	}
	@PostMapping("/addbilldetail")
	@Transactional
	ResponseEntity<ResponseObject> addBillDetail(@RequestBody BillDetail billdetail){
		em.createNativeQuery("SET foreign_key_checks = 0;").executeUpdate();
		billDetailRepo.save(billdetail);
		em.createNativeQuery("SET foreign_key_checks = 1;").executeUpdate();
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("ok", "Create successfully", ""));
	}
}
