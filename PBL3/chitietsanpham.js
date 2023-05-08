const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId);
var gia;
fetch(`http://localhost:8089/sanpham/getProduct/${productId}`)
    .then(response => response.json())
    .then(product => {
        console.log(product);
        const productName = document.querySelector('.main__detail-description-item--name label');
        const brandName = document.querySelector('.main__detail-description-item--content label');
        const price = document.querySelector('.main__detail-description-item--giakm label');
        const originalPrice = document.querySelector('.main__detail-description-item--giagoc h3');
        const describe = document.querySelector('.main__descriptionproduct-content-item');
        productName.textContent = product.data.tenSP;
        brandName.textContent = product.data.nh.tenNH;
        price.textContent = `${(1-product.data.km.mucKM)*product.data.giaban}đ`;
        originalPrice.textContent = `${product.data.giaban}đ`;
        gia = (1-product.data.km.mucKM)*product.data.giaban;
        describe.textContent = product.data.mota;
        

        // // Update the product images
       
        const subImagesContainer = document.querySelector('.main__detail-img--list');
for (let i = 0; i < product.data.productDetails.length; i++) {
  const li = document.createElement('li');
  li.classList.add('main__detail-img--item');
  const img = document.createElement('img');
  img.classList.add('main__detail-img--sub');
  img.alt = '';
  img.src = `/Admin Page/img/${product.data.productDetails[i].hinhAnh}`;
  li.appendChild(img);
  subImagesContainer.appendChild(li);
}
 
    const subImagesContainer2 = document.querySelector('.main__detail-img--list');
    const subImages = subImagesContainer2.querySelectorAll('.main__detail-img--sub');
    const mainImage = document.querySelector('.main__detail-img--main');
    mainImage.src = `/Admin Page/img/${product.data.hinhanh}`;

    for (let i = 0; i < subImages.length; i++) {
        const src = subImages[i].src;
        //console.log(src);
    }


    
        for (let i =  0 ; i < product.data.productDetails.length; i++)
        {
           
            subImages[i].addEventListener('click', function()
            {
                mainImage.src = subImages[i].src;
                 console.log(subImages[i].src);
            })
        }
    })
    .catch(error => console.error(error)); 

// const ul = document.querySelector('.main__detail-description-list');
// let cnt = 0;
// fetch(`http://localhost:8089/productdetail/getAllMau/${productId}`)
//     .then(response => response.json())
//     .then(data => {
//        // console.log(data);
//         data.forEach(valuee => {
//             cnt++;
//             const newLi = document.createElement('li');
//             newLi.className = 'main__detail-description-item';


//             const newInput = document.createElement('input');
//             newInput.className = 'form-check-input';
//             newInput.type = 'radio';
//             newInput.name = 'inlineRadioOptions';
//             newInput.id = `${valuee.maMau}`;
//             newInput.value = `option${cnt}`;


//             const newLabel = document.createElement('label');
//             newLabel.className = 'form-check-label';
//             newLabel.htmlFor = `${valuee.maMau}`;
//             newLabel.textContent = valuee.tenMau;

//             newLi.appendChild(newInput);
//             newLi.appendChild(newLabel);


//             ul.appendChild(newLi);

//         });
//     })
//     .catch(error => console.error(error));

var amount;
const ul = document.querySelector('.main__detail-description-list--color');
let cnt = 0;
var CLI;
var SI;

var  quantityInput = document.querySelector('.input__number--quantity');
quantityInput.value = 1;

var giakm;
fetch(`http://localhost:8089/productdetail/getAllMau/${productId}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(valuee => {
            cnt++;
            const newLi = document.createElement('li');
            newLi.className = 'main__detail-description-item';
            
            const newInput = document.createElement('input');
            newInput.className = 'form-check-input';
            newInput.type = 'radio';
            newInput.name = 'inlineRadioOptions';
            newInput.id = `${valuee.maMau}`;
            newInput.value = `option${cnt}`;

            const newLabel = document.createElement('label');
            newLabel.className = 'form-check-label';
            newLabel.htmlFor = `${valuee.maMau}`;
            newLabel.textContent = valuee.tenMau;

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);
            ul.appendChild(newLi);

            newInput.addEventListener('click', function() {
                const labelForInput = document.querySelector(`label[for="${newInput.id}"]`);
                const ColorInput = document.querySelector(`label[for="${newInput.id}"]`);
                CLI = ColorInput.htmlFor;
                //console.log(CLI);
                var cln = document.querySelector('#ColorName');
                cln.textContent = labelForInput.textContent;
                

                fetch(`http://localhost:8089/productdetail/get/${productId}&${SI}&${CLI}`)
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed');
                    }
                    return response.json();
                    })
                    .then(data => {
                    //amount = data.data;
                   // console.log(data.data);
                   
                    quantityInput.min = 1;
                    quantityInput.max = data.data.soLuong;
                    giakm = data.data.gia;
                    

                    console.log(quantityInput.max);
                    })
                    .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    });
            });
        });
    })
    .catch(error => console.error(error));

const ul1 = document.querySelector('.main__detail-description-list--size');
let cnt1 = 0;
fetch(`http://localhost:8089/productdetail/getAllKC/${productId}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        data.forEach(valuee => {
            cnt1++;
            const newLi = document.createElement('li');
            newLi.className = 'main__detail-description-item';

            const newInput = document.createElement('input');
            newInput.className = 'form-check-input';
            newInput.type = 'radio';
            newInput.name = 'inlineRadioOptions1';
            newInput.id = `${valuee.maKC}`;
            newInput.value = `option${cnt1}`;

            const newLabel = document.createElement('label');
            newLabel.className = 'form-check-label';
            newLabel.htmlFor = `${valuee.maKC}`;
            newLabel.textContent = valuee.soKC;

            newLi.appendChild(newInput);
            newLi.appendChild(newLabel);
            ul1.appendChild(newLi);
            
            newInput.addEventListener('click', function() {
                const labelForInput = document.querySelector(`label[for="${newInput.id}"]`);
                const SizeInput = document.querySelector(`label[for="${newInput.id}"]`);
                
                SI = SizeInput.htmlFor;
               // console.log(SI);
                var sn = document.querySelector('#SizeName');
                sn.textContent = labelForInput.textContent;
                 fetch(`http://localhost:8089/productdetail/get/${productId}&${SI}&${CLI}`)
                    .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed');
                    }
                    return response.json();
                    })
                    .then(data => {
                    //  quantityInput = document.querySelector('.input__number--quantity');
                     quantityInput.min = 1;
                    quantityInput.max = data.data.soLuong;
                    giakm = data.data.gia;
                    

                    console.log(quantityInput.max);
                    })
                    .catch(error => {
                    console.error('There was a problem with the fetch operation:', error);
                    });
            });
        });
    })
    .catch(error => console.error(error));
 

function getUserInfo() {
     const token = localStorage.getItem("MyJSON");
    const obj = JSON.parse(token);
    //if (!token) return null;
    return obj;
}

const User = getUserInfo();
//console.log(User);
var am;
quantityInput.addEventListener('change',function(){
    am = quantityInput.value;
});
console.log(am);

    function AddtoCart(ID) {
    const url = `http://localhost:8089/cart/create`; 

    const data = {
        maKH: User.data.customer.maKH,
        maSP: productId,
        tenSP: document.querySelector('.main__detail-description-item--name label').textContent,
        maMau: CLI,
        maKC: SI,
        soLuong: am,
        gia: (gia+giakm)*am,
    };
     
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}

const add = document.querySelector("#addToCart");

    add.addEventListener("click", function () {
       // console.log(15);
    //     const data = {
    //     maKH: User.data.customer.maKH,
    //     tenSP: document.querySelector('.main__detail-description-item--name label').textContent,
    //     maMau: CLI,
    //     maKC: SI,
    //     soLuong: am,
    //     gia: (gia+giakm)*am,

    // };
    //  console.log(gia, ' ',giakm, ' ',am);
    //  console.log(data);
    AddtoCart(productId);
    });