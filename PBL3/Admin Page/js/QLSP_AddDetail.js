function loadFiles(event) {
  var images = document.getElementById('output-images');
  for (var i = 0; i < event.target.files.length; i++) {
    var image = document.createElement('img');
    image.src = URL.createObjectURL(event.target.files[i]);
    image.width = 200;
    images.appendChild(image);

    
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

  const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId);

document.querySelector('#MaSP').value = productId;
function AddProduct() {
    const product = {
        maSP: productId,
        gia: document.querySelector("#gia").value,
        maKC: document.querySelector("#size-select").value,
        maMau: document.querySelector("#color-select").value,
        soLuong:   document.querySelector("#soluong").value,
        hinhAnh: document.getElementById('input-images').value,
        trangthai: 1
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    };

    fetch('http://localhost:8089/productdetail/add', options)
        .then(response => {
            console.log(response);
            alert('Thêm thành công')
        })
        .catch(error => console.error(error));
}
const AddButton = document.querySelector("#Add");
AddButton.addEventListener("click", function () {
    AddProduct();
});
$(document).ready(function(){
      $('#ul-size li').click(function(){
           $('#ul-size li.select-size-active').removeClass('select-size-active');
           $(this).addClass('select-size-active');
       });
});

$(document).ready(function(){
      $('#ul-color li').click(function(){
           $('#ul-color li.select-color-active').removeClass('select-color-active');
           $(this).addClass('select-color-active');
       });
});