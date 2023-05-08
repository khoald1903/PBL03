function getUserInfo() {
     const token = localStorage.getItem("MyJSON");
    const obj = JSON.parse(token);
    //if (!token) return null;
    return obj;
}

const User = getUserInfo();
console.log(User);
if (User !== null) {
    const nameLink = document.querySelector('#displayName');
    if (User.data.phanQuyen.maQuyen === '3') nameLink.textContent = User.data.customer.maKH;
    else nameLink.textContent = User.data.employee.maNV;
}


(()=>{
    const lgout = document.querySelector('#LOGOUT');
    console.log(lgout);
    lgout.addEventListener('click', () => {
        localStorage.removeItem("MyJSON");
        window.location = '/trangchu.html';
    })
})()

var count=0;
fetch('http://localhost:8089/sanpham')
    .then(response => response.json())
    .then(data => {
        const productsList = document.getElementById('main__similarproduct-listproduct--giaythethao');
        data.forEach(product => {
                if (product.mh.tenMH == "Giày thể thao")
                {
                    const productItem = document.createElement('li');
                    productItem.classList.add('main__similarproduct--item');
                    productItem.innerHTML = `
                    <div class="main__products-item--img" style="position: relative; background: url(assets/img/${product.hinhanh}); width: 290px; height: 290px; background-repeat: no-repeat; background-size: 100%;">
                      <img src="./assets/img/logosanpham.png" alt="" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 80px;">
                      ${product.km.mucKM ? `<div class="main__products-item--discount"><label class="main__products-item--discount-label">${product.km.mucKM*100}%</label></div>` : ''}
                    </div>
                    <div class="main__products-item--name">
                      <label class="main__products-item--name-label">${product.tenSP}</label>
                    </div>
                    <div class="main__products-item--price">
                      <label class="main__products-item--label-giakhuyenmai">${(1-product.km.mucKM)*product.giaban}đ</label>
                      <label class="main__products-item--label-giagoc">${product.giaban}đ</label></div>`;
                    count++;
                }
                productsList.appendChild(productItem);
            
    //Sửa dòng 11 : width của background thành 290px;
            if (count==4) {
                count=0;
                return;
            };
        });
    })
    .catch(error => console.error(error));

fetch('http://localhost:8089/sanpham')
.then(response => response.json())
.then(data => {
    const productsList = document.getElementById('main__similarproduct-listproduct--giaysneaker');
    data.forEach(product => {
            if (product.mh.tenMH == "Giày Sneaker")
            {
                const productItem = document.createElement('li');
                productItem.classList.add('main__similarproduct--item');
                productItem.innerHTML = `
                <div class="main__products-item--img" style="position: relative; background: url(assets/img/${product.hinhanh}); width: 290px; height: 290px; background-repeat: no-repeat; background-size: 100%;">
                    <img src="./assets/img/logosanpham.png" alt="" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 80px;">
                    ${product.km.mucKM ? `<div class="main__products-item--discount"><label class="main__products-item--discount-label">${product.km.mucKM*100}%</label></div>` : ''}
                </div>
                <div class="main__products-item--name">
                    <label class="main__products-item--name-label">${product.tenSP}</label>
                </div>
                <div class="main__products-item--price">
                    <label class="main__products-item--label-giakhuyenmai">${(1-product.km.mucKM)*product.giaban}đ</label>
                    <label class="main__products-item--label-giagoc">${product.giaban}đ</label></div>`
                count++;
            }
        
//Sửa dòng 11 : width của background thành 290px;
        productsList.appendChild(productItem);
        if (count==4) {
            count=0;
            return;
        };
    });
})
.catch(error => console.error(error));

fetch('http://localhost:8089/sanpham')
.then(response => response.json())
.then(data => {
    const productsList = document.getElementById('main__similarproduct-listproduct--giayda');
    data.forEach(product => {
            if (product.mh.tenMH == "Giày da")
            {
                const productItem = document.createElement('li');
                productItem.classList.add('main__similarproduct--item');
            productItem.innerHTML = `
      <div class="main__products-item--img" style="position: relative; background: url(assets/img/${product.hinhanh}); width: 270px; height: 290px; background-repeat: no-repeat; background-size: 100%;">
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
                count++;
            }
        
//Sửa dòng 11 : width của background thành 290px;
        productsList.appendChild(productItem);
        if (count==4) {
            count=0;
            return;
        };
    });
})
.catch(error => console.error(error));


fetch('http://localhost:8089/sanpham')
.then(response => response.json())
.then(data => {
    const productsList = document.getElementById('main__similarproduct-listproduct--giaycaogot');
    data.forEach(product => {
            if (product.mh.tenMH == "Giày cao gót")
            {
                const productItem = document.createElement('li');
                productItem.classList.add('main__similarproduct--item');
                productItem.innerHTML = `
                <div class="main__products-item--img" style="position: relative; background: url(assets/img/${product.hinhanh}); width: 290px; height: 290px; background-repeat: no-repeat; background-size: 100%;">
                    <img src="./assets/img/logosanpham.png" alt="" style="position: absolute; top: 0px; left: 0px; width: 90px; height: 80px;">
                    ${product.km.mucKM ? `<div class="main__products-item--discount"><label class="main__products-item--discount-label">${product.km.mucKM*100}%</label></div>` : ''}
                </div>
                <div class="main__products-item--name">
                    <label class="main__products-item--name-label">${product.tenSP}</label>
                </div>
                <div class="main__products-item--price">
                    <label class="main__products-item--label-giakhuyenmai">${(1-product.km.mucKM)*product.giaban}đ</label>
                    <label class="main__products-item--label-giagoc">${product.giaban}đ</label></div>`
                count++;
            }
        
//Sửa dòng 11 : width của background thành 290px;
        productsList.appendChild(productItem);
        if (count==4) {
            count=0;
            return;
        };
    });
})
.catch(error => console.error(error));

