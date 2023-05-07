// Button Add
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

const select_Provider = document.getElementById("Provider-select");
fetch("http://localhost:8089/nhacungcap")    //Thay đổi localhost
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maNCC;
      option.textContent = valuee.tenNCC;
      select_Provider.appendChild(option);
    });
  })
  .catch(error => console.error(error));


const select_Employee = document.getElementById("Employee-select");
fetch("http://localhost:8089/nhanvien")           //Thay đổi local
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maMV;
      option.textContent = valuee.tenNV;
      select_Employee.appendChild(option);
    });
  })
  .catch(error => console.error(error));

const numberProduct = document.getElementById("ListProduct");
var count = parseInt(numberProduct.textContent,10);
numnerProduct.addEventListener("onchange", () =>
    {
        for (var i=1;i<=count;i++) {
            if ($("#productTable tbody").length == 0) {
              $("#productTable").append("<tbody></tbody>");
            }
            $("#productTable tbody").append(
            "<tr>" +
               '<td><input type="text" id="input_table"></td>'+
              '<td><input type="text" id="input_table"></td>'+
              '<td><input type="text" id="input_table"></td>'+
              '<td><input type="text" id="input_table"></td>' +           
            "</tr>");
        }
    }
);
function Import() {
  const importOrder = {
    maDHN: document.querySelector("#ID").value,
    ngayNhap: document.querySelector("#Date").value,
    maNCC: document.querySelector("#Provider-select").value,
    maNV: document.querySelector("#Employee-select").value, 
    // tongTien:  //TÍnh tiền
    //Thêm mã sản phẩm, số lượng, giá nhập
  }
        //Thêm chi tiết đơn hàng nhập
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(listProduct)
  };

  fetch('http://localhost:8089/sanpham/create', options)   //Thay đổi
    .then(response => {
      console.log(response);
      // Handle response
    })
    .catch(error => console.error(error));
}
const AddButton = document.querySelector("#Add");
AddButton.addEventListener("click", function () {
  Import();
});
