function redirectToDetailsPage(productId) {
  console.log(productId);
  window.location.href = `chitietsanpham.html?id=${productId}`;
}

fetch('http://localhost:8089/sanpham')
    .then(response => response.json())
    .then(data => {
        const productsList = document.getElementById('products-list');

        data.forEach(product => {
            const productItem = document.createElement('li');
            productItem.classList.add('main__products-item');
            // console.log(product.hinhanh);
            productItem.innerHTML = `
      <div class="main__products-item--img" style="position: relative; background: url(assets/img/${product.hinhanh}); width: 290px; height: 290px; background-repeat: no-repeat; background-size: 100%;" onclick="redirectToDetailsPage('${product.maSP}')">
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

let cnt = 0;
const ul_color = document.querySelector('.main__filter-list--color');
fetch(`http://localhost:8089/sanpham/mau`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(valuee => {
            cnt++;
            const newLi = document.createElement('li');
            newLi.className = 'main__filter--item';
            const newInput = document.createElement('input');
            newInput.className = 'form-check-input';
            newInput.type = 'checkbox';
            newInput.name = 'inlineCheckboxOptions';
            newInput.id = `${valuee.maMau}`;
            newInput.value = `option${cnt}`;

            const newLabel = document.createElement('label');
            newLabel.className = 'form-check-label';
            newLabel.htmlFor = `${valuee.maMau}`;
            newLabel.textContent = valuee.tenMau;

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);
            ul_color.appendChild(newLi);

            // newInput.addEventListener('click', function() {
            //     const labelForInput = document.querySelector(`label[for="${newInput.id}"]`);
            //     const ColorInput = document.querySelector(`label[for="${newInput.id}"]`);
            //     CLI = ColorInput.htmlFor;
            //     //console.log(CLI);
            //     var cln = document.querySelector('#ColorName');
            //     cln.textContent = labelForInput.textContent;
                

            //     fetch(`http://localhost:8089/productdetail/get/${productId}&${SI}&${CLI}`)
            //         .then(response => {
            //         if (!response.ok) {
            //             throw new Error('Failed');
            //         }
            //         return response.json();
            //         })
            //         .then(data => {
            //         //amount = data.data;
            //        // console.log(data.data);
                   
            //         quantityInput.min = 1;
            //         quantityInput.max = data.data.soLuong;
            //         giakm = data.data.gia;
                    

            //         console.log(quantityInput.max);
            //         })
            //         .catch(error => {
            //         console.error('There was a problem with the fetch operation:', error);
            //         });
            // });
        });
    })
    .catch(error => console.error(error));

const ul_size = document.querySelector('.main__filter-list--size');
let cnt1 = 0;
fetch(`http://localhost:8089/sanpham/kc`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(valuee => {
            cnt1++;
            const newLi = document.createElement('li');
            newLi.className = 'main__filter--item';

            const newInput = document.createElement('input');
            newInput.className = 'form-check-input';
            newInput.type = 'checkbox';
            newInput.name = 'inlineCheckboxOptions1';
            newInput.id = `${valuee.maKC}`;
            newInput.value = `option${cnt1}`;

            const newLabel = document.createElement('label');
            newLabel.className = 'form-check-label';
            newLabel.htmlFor = `${valuee.maKC}`;
            newLabel.textContent = valuee.soKC;

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);
            ul_size.appendChild(newLi);
            
            // newInput.addEventListener('click', function() {
            //     const labelForInput = document.querySelector(`label[for="${newInput.id}"]`);
            //     const SizeInput = document.querySelector(`label[for="${newInput.id}"]`);
                
            //     SI = SizeInput.htmlFor;
            //    // console.log(SI);
            //     var sn = document.querySelector('#SizeName');
            //     sn.textContent = labelForInput.textContent;
            //      fetch(`http://localhost:8089/productdetail/get/${productId}&${SI}&${CLI}`)
            //         .then(response => {
            //         if (!response.ok) {
            //             throw new Error('Failed');
            //         }
            //         return response.json();
            //         })
            //         .then(data => {
            //         //  quantityInput = document.querySelector('.input__number--quantity');
            //          quantityInput.min = 1;
            //         quantityInput.max = data.data.soLuong;
            //         giakm = data.data.gia;
                    

            //         console.log(quantityInput.max);
            //         })
            //         .catch(error => {
            //         console.error('There was a problem with the fetch operation:', error);
            //         });
            // });
        });
    })
    .catch(error => console.error(error));
 
const ul_brand = document.querySelector('.main__filter-list--brand');
let cnt2 = 0;
fetch(`http://localhost:8089/sanpham/nh`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(valuee => {
            cnt2++;
            const newLi = document.createElement('li');
            newLi.className = 'main__filter--item';

            const newInput = document.createElement('input');
            newInput.className = 'form-check-input';
            newInput.type = 'checkbox';
            newInput.name = 'inlineCheckboxOptions2';
            newInput.id = `${valuee.maNH}`;
            newInput.value = `option${cnt2}`;

            const newLabel = document.createElement('label');
            newLabel.className = 'form-check-label';
            newLabel.htmlFor = `${valuee.maNH}`;
            newLabel.textContent = valuee.tenNH;

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);
            ul_brand.appendChild(newLi);
            
            // newInput.addEventListener('click', function() {
            //     const labelForInput = document.querySelector(`label[for="${newInput.id}"]`);
            //     const SizeInput = document.querySelector(`label[for="${newInput.id}"]`);
                
            //     SI = SizeInput.htmlFor;
            //    // console.log(SI);
            //     var sn = document.querySelector('#SizeName');
            //     sn.textContent = labelForInput.textContent;
            //      fetch(`http://localhost:8089/productdetail/get/${productId}&${SI}&${CLI}`)
            //         .then(response => {
            //         if (!response.ok) {
            //             throw new Error('Failed');
            //         }
            //         return response.json();
            //         })
            //         .then(data => {
            //         //  quantityInput = document.querySelector('.input__number--quantity');
            //          quantityInput.min = 1;
            //         quantityInput.max = data.data.soLuong;
            //         giakm = data.data.gia;
                    

            //         console.log(quantityInput.max);
            //         })
            //         .catch(error => {
            //         console.error('There was a problem with the fetch operation:', error);
            //         });
            // });
        });
    })
    .catch(error => console.error(error));
 

