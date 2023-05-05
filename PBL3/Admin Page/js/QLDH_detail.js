$(document).ready(function () {

  $(".fa-search").click(function () {
    $(".container__search, .input__search").toggleClass("active");
    $("input[type='text']").focus();
  });

});

// Button Add
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('id');

const url = `http://localhost:8089/taikhoan/customer/get/${ID}`;  //Thay đổi 
fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed');
      }
      return response.json();
    })
    .then(data => {
     
      document.querySelector("#ID").value = data.maDH;
      document.querySelector("#CustomerName").value = data.customer.tenKH;
      document.querySelector("#Phone").value = data.customer.sdt;
      document.querySelector("#Email").value = data.customer.email;
      document.querySelector("#Address").value = data.customer.diachi;
      
         //Thêm danh sách sản phẩm: Mã, số lượng, tổng tiền
      document.querySelector("#Total").value = data.tongtien;

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

