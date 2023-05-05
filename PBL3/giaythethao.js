fetch('http://localhost:8089/sanpham')
    .then(response => response.json())
    .then(data => {
        const productsList = document.getElementById('products-list');

        data.forEach(product => {
            const productItem = document.createElement('li');
            productItem.classList.add('main__products-item');
            console.log(product.hinhanh);
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
        <label class="main__products-item--label-giagoc">${product.giaban}đ</label>
      </div>
    `;
    //Sửa dòng 11 : width của background thành 290px;
            productsList.appendChild(productItem);
        });
    })
    .catch(error => console.error(error));

// Lọc theo giá
window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value + 'đ';
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value + 'đ' ;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , red ${percent1}% , red ${percent2}%, #dadae5 ${percent2}%)`;
}