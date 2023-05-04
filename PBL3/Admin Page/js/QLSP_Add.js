// Button Add
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
var LinkString = "";
function loadFiles(event) {
  var images = document.getElementById('output-images');
  for (var i = 0; i < event.target.files.length; i++) {
    var image = document.createElement('img');
    image.src = URL.createObjectURL(event.target.files[i]);
    image.width = 200;
    images.appendChild(image);

    //console.log(event.target.files[i]);
    var file = event.target.files[i];
    LinkString = LinkString + file.name + "|";
  }
};

const select_Size = document.getElementById("size-select");
fetch("http://localhost:8089/sanpham/kc")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maKC;
      option.textContent = valuee.soKC;
      select_Size.appendChild(option);
    });
  })
  .catch(error => console.error(error));


const select_Color = document.getElementById("color-select");
fetch("http://localhost:8089/sanpham/mau")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maMau;
      option.textContent = valuee.tenMau;
      select_Color.appendChild(option);
    });
  })
  .catch(error => console.error(error));

const select_Brand = document.getElementById("brand-select");
fetch("http://localhost:8089/sanpham/nh")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maNH;
      option.textContent = valuee.tenNH;
      select_Brand.appendChild(option);
    });
  })
  .catch(error => console.error(error));

const select_Category = document.getElementById("category-select");
fetch("http://localhost:8089/sanpham/mh")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maMH;
      option.textContent = valuee.tenMH;
      select_Category.appendChild(option);
    });
  })
  .catch(error => console.error(error));

const select_Discount = document.getElementById("discount-select");
fetch("http://localhost:8089/sanpham/km")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maKM;
      option.textContent = `${valuee.mucKM*100}%`;
      select_Discount.appendChild(option);
    });
  })
  .catch(error => console.error(error));

function AddProduct() {
  const product = {
    maSP: document.querySelector("#MaSP").value,
    tenSP: document.querySelector("#TenSP").value,
    giaBan: document.querySelector("#giaban").value,
    maKC: document.querySelector("#size-select").value, // Add # before id selector
    maMau: document.querySelector("#color-select").value, // Add # before id selector
    maNH: document.querySelector("#brand-select").value, // Add # before id selector
    maMH: document.querySelector("#category-select").value, // Add # before id selector
    maKM: document.querySelector("#discount-select").value, // Add # before id selector
    soLuong: document.querySelector("#soluong").value,
    hinhAnh: LinkString,
    moTa: document.querySelector("#input_mota").value
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  };

  fetch('http://localhost:8089/sanpham/create', options)
    .then(response => {
      console.log(response);
      // Handle response
    })
    .catch(error => console.error(error));
}
const AddButton = document.querySelector("#Add");
AddButton.addEventListener("click", function () {
  AddProduct();
});
