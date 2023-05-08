function getUserInfo() {
     const token = localStorage.getItem("MyJSON");
    const obj = JSON.parse(token);
    //if (!token) return null;
    return obj;
}

const User = getUserInfo();
const color = {};
  fetch('http://localhost:8089/sanpham/mau')
    .then(response => response.json())
    .then(data => {
      data.forEach(valuee => {
        color[valuee.maMau] = valuee.tenMau;
      });
    })
    .catch(error => console.error(error));


    const Size = {};
  fetch('http://localhost:8089/sanpham/kc')
    .then(response => response.json())
    .then(data => {
      data.forEach(valuee => {
        Size[valuee.maKC] = valuee.soKC;
      });
    })
    .catch(error => console.error(error));
      // <img src="${product.hinhAnh}" alt=""
                //   width="50" height="30" class="d-inline-block align-text-top" />
var tong = 0;
var ship = 30000;
$(document).ready(function () {
    fetch(`http://localhost:8089/cart/${User.data.customer.maKH}`)
        .then(response => response.json())
        .then(data => {

            console.log(data);
            data.forEach(product => { 
                var giaa = product.soLuong*product.gia;
                tong = tong + giaa;
                //console.log(tong);
                $('#product-detail').append(`
            <ul class="product__detail-list">
              <li class="product-detail-item navbar-brand" href="#">
                ${product.tenSP}
              </li>
              <li class="product-detail-item product-price">${product.gia}</li>
              <li class="product-detail-item product-color">${color[product.maMau]}</li>
              <li class="product-detail-item product-size">${Size[product.maKC]}</li>
              <li class="product-detail-item product-quantity">${product.soLuong}</li>
              <li class="product-detail-item product-total">${giaa}</li>
             <li class="product-detail-item product-action product-action--trash">
                            <button class="btn btn-danger delete-btn" 
                             data-product-id="${product.maSP}"  
                             data-product-mau="${product.maMau}" 
                             data-product-kichco="${product.maKC}" 
                             data-product-ten="${User.data.customer.maKH}">
                                Xóa
                            </button>
                        </li>
            </ul>
            <div class="product__detail-line">
          `);
            });
           $(document).on('click', '.delete-btn', function() {
            const productId = $(this).data('product-id');
            const color = $(this).data('product-mau');
            const size = $(this).data('product-kichco');
            const maKh = $(this).data('product-ten');
           // console.log(color);
            //console.log(maKh,' ',productId, ' ', color, ' ',size);
           // console.log(`http://localhost:8089/cart/delete/${maKh}&${productId}&${size}&${color}`);
            fetch(`http://localhost:8089/cart/get/${maKh}&${productId}&${size}&${color}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                location.reload();
            })
            .catch(error => console.error(error));
            });

           console.log(tong);
           const totalCost = tong + ship;
           console.log(totalCost);
           const priceElement = document.querySelector('.shoppingcart__item--price-tongtienhang');
           priceElement.textContent = tong.toLocaleString() + ' đ';
           const totalElement = document.querySelector('#total');
           totalElement.textContent = totalCost.toLocaleString() + ' đ';
        });
});


function ThanhToan()
{
     const url = `http://localhost:8089/cart/create`; 

    const data = {
        maKH: User.data.customer.maKH,
        maHD: null,
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

