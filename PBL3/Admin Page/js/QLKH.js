
// Search

$(document).ready(function () {

  $(".fa-search").click(function () {
    $(".container__search, .input__search").toggleClass("active");
    $("input[type='text']").focus();
  });

});

// Sort
$(".custom-select").each(function () {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function () {
    template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function () {
  $(this).parents(".custom-options").addClass("option-hover");
}, function () {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function () {
  $('html').one('click', function () {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function () {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});
// Button Add
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


// Table
function SanPhamShow() {
  fetch('http://localhost:8089/taikhoan/customer')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.forEach(user => {
        if ($("#productTable tbody").length == 0) {
          $("#productTable").append("<tbody></tbody>");
        }
        $("#productTable tbody").append("<tr>" +
          "<td>" +
          `<button type='button' onclick='window.location.href="QLKH_Update.html?id=${user.customer.maKH}";' class='btn btn-default'>` +
          "<span class='glyphicon glyphicon-edit' />" +
          "</button>" +
          "</td>" +
          `<td>${user.customer.maKH}</td>` +
          `<td>${user.customer.tenKH}</td>` +
          `<td>${user.customer.gt}</td>` +
          `<td>${user.customer.email}</td>` +
          `<td>${user.customer.diachi}</td>` +
          `<td>${user.customer.sdt}</td>` +
          "<td>" +
          `<button type='button' onclick='deleteSanPham(\"${user.maSp}\");' class='btn btn-default'>` +
          "<span class='glyphicon glyphicon-remove' />" +
          "</button>" +
          "</td>" +
          "</tr>");
      });
    })
    .catch(error => console.log(error));
}

function deleteSanPham(id) {
  console.log(id);
  fetch(`https://localhost:7159/api/SanPhamControllers/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log(error));
}

function AddKhachHang() {
  const customer = {
    maKh: 'KH04',
    tenKh: 'Nguyễn Thúc Thùy Tiên',
    gioiTinh: 'Nữ',
    email: 'thuytien@gmail.com',
    diaChi: 'TPHCM',
    sdt: 1234567890,
    hoaDons: [],
    taiKhoans: [],
  };

  // Define the options for the request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  };

  // Send the request
  fetch('https://localhost:7159/api/KhachHangControllers', options)
    .then(response => {
      if (response.ok) {
        // Handle the response
        console.log('Customer added successfully');
      } else {
        throw new Error('Something went wrong');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
//AddKhachHang();
SanPhamShow();
