package com.pbl03.pbl03cnpm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pbl03.pbl03cnpm.model.Bill;
import com.pbl03.pbl03cnpm.model.ResponseObject;
import com.pbl03.pbl03cnpm.repositories.BillRepo;
import com.pbl03.pbl03cnpm.repositories.CustomerRepo;
import com.pbl03.pbl03cnpm.repositories.DonvivanchuyenRepo;
import com.pbl03.pbl03cnpm.repositories.EmployeeRepo;
import com.pbl03.pbl03cnpm.repositories.ProvinceRepo;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/")
public class BillController {
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
	
	@GetMapping("")
	List<Bill> getAllBills(){
		return billRepo.findAll();
	}
	
	@GetMapping("/{id}")
	ResponseEntity<ResponseObject> getBillById(@PathVariable String id){
		boolean exists = billRepo.existsById(id);
		if(exists) {
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Find successfully", billRepo.findById(id).get()));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("failed", "Can not find bill", ""));
	}
}
