package com.pbl03.pbl03cnpm.controller;

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

import com.pbl03.pbl03cnpm.model.Bill;
import com.pbl03.pbl03cnpm.model.BillDTO;
import com.pbl03.pbl03cnpm.model.BillDetail;
import com.pbl03.pbl03cnpm.model.Donvivanchuyen;
import com.pbl03.pbl03cnpm.model.ProductDetail;
import com.pbl03.pbl03cnpm.model.Province;
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
		return billRepo.findAll().stream()
				.filter(t -> t.getStatus() == true)
				.toList();
	}
	@GetMapping("/province")
	List<Province> getProvinces(){
		return provinceRepo.findAll();
	}
	@GetMapping("/dvvc")
	List<Donvivanchuyen> getDvvc(){
		return donvivanchuyenRepo.findAll();
	}
	@GetMapping("/province/get/{id}")
	ResponseEntity<ResponseObject> getProvinces(String id){
		 Optional<Province> optional = provinceRepo.findById(id);
		 if(optional.isPresent()) {
			 return ResponseEntity.status(HttpStatus.OK).body(
						new ResponseObject("ok", "Find successfully", optional.get()));
		 }
		 return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("failded", "Cannot Find", ""));
	}
	@GetMapping("/dvvc/get/{id}")
	ResponseEntity<ResponseObject> getDvvc(String id){
		Optional<Donvivanchuyen> optional = donvivanchuyenRepo.findById(id);
		if(optional.isPresent()) {
			 return ResponseEntity.status(HttpStatus.OK).body(
						new ResponseObject("ok", "Find successfully", optional.get()));
		 }
		 return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("failded", "Cannot Find", ""));
	}
	@GetMapping("get/{id}")
	ResponseEntity<ResponseObject> getBillByMaKH(@PathVariable String id){
		List<Bill> bills =	billRepo.findByCustomerMaKH(id).stream().filter(t -> t.getStatus() == true).toList();
		if(bills.size() > 0) {
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Find successfully", bills));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("failded", "Cannot Find", ""));
	}
	
	@GetMapping("/getdetail")
	List<BillDetail> getAllBillsd(){
		return billDetailRepo.findAll();
	}
	
	//get list sp
	@GetMapping("/detail/{id}")
	ResponseEntity<ResponseObject> getBillDetailByID(@PathVariable String id){
		List<BillDetail> bills = billDetailRepo.findByMaHD(id);
		if(bills.size() > 0)
		{
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Find successfully", bills));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("failded", "Cannot Find", ""));
	}
	
	//add hoá đơn trước
	@PostMapping("/add")
	@Transactional
	ResponseEntity<ResponseObject> addBill(@RequestBody BillDTO bill){
		boolean exist = billDTORepo.existsById(bill.getMaHD());
		if(exist) {
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("failded", "ID Bill has existed!", ""));
		}
		em.createNativeQuery("SET foreign_key_checks = 0;").executeUpdate();
		billDTORepo.save(bill);
		em.createNativeQuery("SET foreign_key_checks = 1;").executeUpdate();
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("ok", "Create successfully", ""));
	}
	//add sp sau
	@PostMapping("/addbilldetail")
	ResponseEntity<ResponseObject> addBillDetail(@RequestBody BillDetail billdetail){
		Optional<BillDetail> product = billDetailRepo.findByMaHDAndMaMauAndMaKC(billdetail.getMaHD(), billdetail.getMaMau(), billdetail.getMaKC());
		if(product.isPresent()) {
			BillDetail temp = product.get();
			int amount = temp.getSoluong();
			temp.setSoluong(amount + billdetail.getSoluong());
			billDetailRepo.save(temp);
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Increased amount successfully", ""));
		}
		billDetailRepo.save(billdetail);
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("ok", "Create successfully", ""));
	}
	@DeleteMapping("deletedetail/{mahd}&{masp}&{mamau}&{makc}")
	ResponseEntity<ResponseObject> deleteProductInBill(@PathVariable String mahd ,@PathVariable String masp, @PathVariable String mamau, @PathVariable String makc){
		Optional<BillDetail> deleteBill = billDetailRepo.findByMaHDAndMaSPAndMaKCAndMaMau(mahd ,masp, makc, mamau);
		if(deleteBill.isPresent()) {
			BillDetail temp = deleteBill.get();
			billDetailRepo.delete(temp);
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Delete successfully", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("failed", "Can not find bill to delete", ""));
	}
	@PutMapping("delete/{mahd}")
	ResponseEntity<ResponseObject> deleteBill(@PathVariable String mahd){
		Optional<BillDTO> deleteBill = billDTORepo.findById(mahd);
		if(deleteBill.isPresent()) {
			BillDTO temp = deleteBill.get();
			temp.setStatus(false);
			billDTORepo.save(temp);
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Delete successfully", ""));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("failed", "Can not find bill to delete", ""));
	}
	
	@PutMapping("update/{mahd}")
	ResponseEntity<ResponseObject> updateBill(@RequestBody BillDTO bill){
		Optional<BillDTO> billdto = billDTORepo.findById(bill.getMaHD());
		if(billdto.isPresent()) {
			billDTORepo.save(bill);
			return ResponseEntity.status(HttpStatus.OK).body(
					new ResponseObject("ok", "Update successfully", bill));
		}
		return ResponseEntity.status(HttpStatus.OK).body(
				new ResponseObject("failed", "Cannot Update", ""));
	}
}
