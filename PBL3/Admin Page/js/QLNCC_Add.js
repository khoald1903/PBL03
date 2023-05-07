// Button Add
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

function AddProvider() {
  const provider = {
    maNCC: document.querySelector("#MaCC").value,
    tenNCC: document.querySelector("#TenNCC").value,
    nguoiDaiDien: document.querySelector("#NguoiDD").value,
    linhVucKD: document.querySelector("#LVKD").value,
    diaChi: document.querySelector("#DiaChi").value,
    email: document.querySelector("#Email").value,
    sdt: document.querySelector("#Sdt").value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(provider)
  };

  fetch('http://localhost:8089/nhacungcap/create', options)  //Thay đổi localhost
    .then(response => {
      console.log(response);
      // Handle response
    })
    .catch(error => console.error(error));
}
const AddButton = document.querySelector("#Add");
AddButton.addEventListener("click", function () {
  AddProvider();
});
