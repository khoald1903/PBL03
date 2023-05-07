function loadFiles(event) {
  var images = document.getElementById('output-images');
  images.innerHTML = '';
    var image = document.createElement('img');
    image.src = URL.createObjectURL(event.target.files[0]);
    image.width = 200; 
    images.appendChild(image);
    document.querySelector('#input-images').name = event.target.files[0].name;
};

const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('id');
const SIZE = urlParams.get('size');
const COLOR = urlParams.get('color');
const url = `http://localhost:8089/productdetail/get/${ID}&${SIZE}&${COLOR}`;   



fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed');
    }
    return response.json();
  })
  .then(data => {
     console.log(data);
    document.querySelector("#MaSP").value = data.maSP;
    document.querySelector("#gia").value = data.gia;
    document.querySelector("#soluong").value = data.soLuong;
    document.querySelector("#Size").value = data.maKC;
    document.querySelector("#Color").value = data.maMau;
    const inputImages = document.getElementById('input-images');
    inputImages.setAttribute('name', data.hinhAnh); 
    const images = document.getElementById('output-images');
    images.innerHTML = '';
    const image = document.createElement('img');
    image.src = `./img/${data.hinhAnh}`; 
    console.log(inputImages.name);
    image.width = 200;
    images.appendChild(image);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function UpdateProduct(id) {
   const inputImages = document.getElementById('input-images');
   console.log(inputImages.name);
   const product = {
    maSP: document.querySelector("#MaSP").value,
    gia: document.querySelector("#gia").value,
    maKC: document.querySelector("#Size").value,
    maMau: document.querySelector("#Color").value,
    soLuong: document.querySelector("#soluong").value,
    hinhAnh: inputImages.name,
    trangthai: 1
  };
  
  fetch(`http://localhost:8089/productdetail/update/${ID}&${SIZE}&${COLOR}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(res => {
      if (res.ok) {
        console.log('Product updated successfully');
        
      } else {
        throw new Error('Failed to update product');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

const UpdateButton = document.querySelector("#Add");
UpdateButton.addEventListener("click", function () {
  UpdateProduct(ID);
});
