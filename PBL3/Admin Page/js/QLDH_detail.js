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

const url = `http://localhost:8089/donhang/get/${ID}`;  //Thay đổi 
fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed');
      }
      return response.json();
    })
    .then(data => {
     
      document.querySelector("#ID").value = data.maDH;
      //Thêm danh sách sản phẩm: Mã sản phẩm, mã chi tiết sản phẩm số lượng, tổng tiền
      const url2 = `http://localhost:8089/chitietdonhang/get/${ID}`;  //Thay đổi 
      fetch(url2)
        .then(response => response.json())
        .then(data => {
          data.forEach(product => {
                if ($("#listProductTable tbody").length == 0) {
                  $("#listProductTable").append("<tbody></tbody>");
                }
                $("#plistProductTable tbody").append(
                  "<tr>" +
                    `<td>${product.maSP}</td>` +
                    `<td>${product.maCTSP}</td>` +
                    `<td>${product.soluong}</td>` +
                    // `<td>${product.thanhtien}</td>` +  //soluong*(giaban+gia);
                  "</tr>");
              });
        })
        .catch(error => console.error(error));

      document.querySelector("#Total").value = data.tongtien;

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

