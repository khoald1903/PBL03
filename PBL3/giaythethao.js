// function redirectToDetailsPage(productId) {
//   console.log(productId);
//   window.location.href = `chitietsanpham.html?id=${productId.}&`;
// }

fetch('http://localhost:8089/sanpham')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const productsList = document.getElementById('products-list');

        data.forEach(product => {
            const productItem = document.createElement('li');
            productItem.classList.add('main__products-item')
            const arr = product.hinhanh.split("|");
            console.log(arr);
            productItem.innerHTML = `
      <div class="main__products-item--img" style="position: relative; background: url(assets/img/${arr[0]}); width: 270px; height: 290px; background-repeat: no-repeat; background-size: 100%;" onclick="redirectToDetailsPage('${product.maSP}')">
        <img src="./assets/img/logosanpham.png" alt="" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 80px;">
        ${product.km.mucKM ? `<div class="main__products-item--discount"><label class="main__products-item--discount-label">${product.km.mucKM*100}%</label></div>` : ''}
      </div>
      <div class="main__products-item--name">
        <label class="main__products-item--name-label">${product.tenSP}</label>
      </div>
      <div class="main__products-item--price">
        <label class="main__products-item--label-giakhuyenmai">${(1-product.km.mucKM)*product.giaban}đ</label>
        <label class="main__products-item--label-giagoc">${product.giaban}đ</label>
      </div>
    `;
            productsList.appendChild(productItem);
        });
    })
    .catch(error => console.error(error));