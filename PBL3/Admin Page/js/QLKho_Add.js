// Button Add
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

const select_Provider = document.getElementById("Provider-select");
fetch("http://localhost:8089/sanpham/kc")    //Thay đổi localhost
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
fetch("http://localhost:8089/sanpham/mau")           //Thay đổi local
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

function Import() {
  const listProduct = {
    maDHN: document.querySelector("#ID").value,
    ngayNhap: document.querySelector("#Date").value,
    maNCC: document.querySelector("#Provider-select").value,
    maNV: document.querySelector("#Employee-select").value, 

    //Thêm mã sản phẩm, số lượng, giá nhập
  };

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
