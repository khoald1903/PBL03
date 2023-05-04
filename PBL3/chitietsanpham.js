const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId);

fetch(`http://localhost:8089/sanpham/getProduct/${productId}`)
    .then(response => response.json())
    .then(product => {
        const productName = document.querySelector('.main__detail-description-item--name label');
        const brandName = document.querySelector('.main__detail-description-item--content label');
        const price = document.querySelector('.main__detail-description-item--giakm label');
        const originalPrice = document.querySelector('.main__detail-description-item--giagoc h3');
        const describe = document.querySelector('.main__descriptionproduct-content-item');
        productName.textContent = product.data.tenSP;
        brandName.textContent = product.data.nh.tenNH;
        price.textContent = `${(1-product.data.km.mucKM)*product.data.giaban}đ`;
        originalPrice.textContent = `${product.data.giaban}đ`;
        describe.textContent = product.data.mota;
        

        // // Update the product images
        const arr = product.data.hinhanh.split("|");
        const mainImage = document.querySelector('.main__detail-img--main');
        const subImages = document.querySelectorAll('.main__detail-img--sub');

        mainImage.src = `/Admin Page/img/${arr[0]}`;
        subImages[0].src =`/Admin Page/img/${arr[0]}`;
        subImages[1].src = `/Admin Page/img/${arr[1]}`;
        subImages[2].src = `/Admin Page/img/${arr[2]}`;
        for (let i =  0 ; i < 3; i++)
        {
            subImages[i].addEventListener('click', function()
            {
                mainImage.src = subImages[i].src;
            })
        }
    })
    .catch(error => console.error(error)); 

    const ul = document.querySelector('.main__detail-description-list');
let cnt = 0;
fetch("http://localhost:8089/sanpham/mau")
    .then(response => response.json())
    .then(data => {
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

        });
    })
    .catch(error => console.error(error));
