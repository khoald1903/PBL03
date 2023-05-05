
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
// Thêm option trong Dropdown
document.addEventListener("DOMContentLoaded", function () {
const select_Sort = document.getElementById("Sort-select");

  const SortArr = [
    { id: 1, name: "Mới nhất" },
    { id: 2, name: "Tổng tiền: thấp đến cao" },
    { id: 3, name: "Tổng tiền: cao xuống thấp" },
    { id: 4, name: "Cũ nhất" },
  ];

  SortArr.forEach(valuee => {
    const option = document.createElement("option");
    option.value = valuee.id;
    option.textContent = valuee.name;
   // console.log(option.value,' ',option.textContent);
    select_Sort.appendChild(option);
  });
});

// Thay đổi option trong Select
function Sort() {
  const select_Sort = document.getElementById("Sort-select");
//   console.log(select_Sort);
  select_Sort.addEventListener('change', () => {
    console.log(select_Sort.value);
    // handle sort
    $("#orderTable tbody").empty();
    const textSearch ='';
    fetch(`http://localhost:8089/sanpham/list/${select_Sort.value}&${textSearch}`)   //Thay đổi localHost
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    data.forEach(order => {
      
      if ($("#orderTable tbody").length == 0) {
        $("#orderTable").append("<tbody></tbody>");
      }
      $("#orderTable tbody").append(
        "<tr>" +
        //   "<td>" +
        //     `<button type='button' onclick='window.location.href="QLSP_Update.html?id=${order.maSP}";'class='btn btn-default'>` +
        //     "<span class='glyphicon glyphicon-edit' />" +
        //     "</button>" +
        //   "</td>" +
          `<td>${order.maHD}</td>` +
          `<td>${order.maKH}</td>` +
          `<td>${order.maNV}</td>` +
          `<td>${order.maDVVC}</td>` +
          `<td>${order.ngayban}</td>` +
          `<td>${order.matinh}</td>` +
          `<td>${order.diachi}</td>` +
          `<td>${order.tongtien}</td>` +
          `<td>${order.trangthai}</td>` +
          "<td>" +
            `<a href="QLDH_detail.html?id=${order.maDH}"` +    //???
            "Xem chi tiết />" +
            "</a>" +
          "</td>" +
          "<td>" +
            `<button type='button' onclick='deleteHoaDon(\"${order.maHD}\");' class='btn btn-default'>` +  //DeleteAPI
            "<span class='glyphicon glyphicon-remove' />" +
            "</button>" +
          "</td>" +
        "</tr>");
    });
  })
  .catch(error => console.log(error));
  })
}
function Show() {
  fetch('http://localhost:8089/sanpham')  // Thay đổi localHost
    .then(res => res.json())
    .then(data => {
     // console.log(data);
      data.forEach(order => {
        if ($("#orderTable tbody").length == 0) {
          $("#orderTable").append("<tbody></tbody>");
        }
        $("#orderTable tbody").append("<tr>" +
          `<td>${order.maHD}</td>` +
          `<td>${order.tenKH}</td>` +
          `<td>${order.maNV}</td>` +
          `<td>${order.maDVVC}</td>` +
          `<td>${order.ngayban}</td>` +
          `<td>${order.matinh}</td>` +
          `<td>${order.diachi}</td>` +
          `<td>${order.tongtien}</td>` +
          `<td>${order.trangthai}</td>` +
          "<td>" +
            `<a href="QLDH_detail.html?id=${order.maDH}"` +
            "Xem chi tiết />" +
            "</a>" +
          "</td>" +
         "<td>" +
            `<button type='button' onclick='deleteHoaDon(\"${order.maHD}\");' class='btn btn-default'>` +   //Chú ý
            "<span class='glyphicon glyphicon-remove' />" +
            "</button>" +
          "</td>" +
          "</tr>");
      });
    })
    .catch(error => console.log(error));
}
Show();
Sort();
