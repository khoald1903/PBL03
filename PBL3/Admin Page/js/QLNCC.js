
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

document.addEventListener("DOMContentLoaded", function () {
const select_Sort = document.getElementById("Sort-select");

  const SortArr = [
    { id: 1, name: "Mặc định" },
    { id: 2, name: "Tên nhà cung cấp" },
    { id: 3, name: "Lĩnh vực kinh doanh" },
    { id: 4, name: "Địa chỉ" },
  ];

  SortArr.forEach(valuee => {
    const option = document.createElement("option");
    option.value = valuee.id;
    option.textContent = valuee.name;
   // console.log(option.value,' ',option.textContent);
    select_Sort.appendChild(option);
  });
});

function Sort() {
  const select_Sort = document.getElementById("Sort-select");
  select_Sort.addEventListener('change', () => {
    console.log(select_Sort.value);
    // handle sort
    $("#providerTable tbody").empty();
    const textSearch ='';
    fetch(`http://localhost:8089/sanpham/list/${select_Sort.value}&${textSearch}`)             //Thay đổi
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    data.forEach(provider => {
      if ($("#providerTable tbody").length == 0) {
        $("#providerTable").append("<tbody></tbody>");
      }
      $("#providerTable tbody").append(
        "<tr>" +
          "<td>" +
            `<button type='button' onclick='window.location.href="QLNCC_Update.html?id=${provider.maNCC}";'class='btn btn-default'>` +
            "<span class='glyphicon glyphicon-edit' />" +
            "</button>" +
          "</td>" +
          `<td>${provider.maNCC}</td>` +
          `<td>${provider.tenNCC}</td>` +
          `<td>${provider.nguoidaidien}</td>` +
          `<td>${provider.linhvuckindoanh}</td>` +
          `<td>${provider.sdt}</td>` +
          `<td>${provider.diachi}</td>` +
          `<td>${provider.email}</td>` +
          "<td>" +
            `<button type='button' onclick='deleteNhaCungCap(\"${provider.maNCC}\");' class='btn btn-default'>` +
            "<span class='glyphicon glyphicon-remove' />" +
            "</button>" +
          "</td>" +
        "</tr>");
    });
  })
  .catch(error => console.log(error));
  })

  // console.log(SortCBB.id,' ',textSearch);
  
}
function Show() {
  fetch('http://localhost:8089/sanpham')  //Thay đổi
    .then(res => res.json())
    .then(data => {
      data.forEach(provider => {
        if ($("#providerTable tbody").length == 0) {
          $("#providerTable").append("<tbody></tbody>");
        }
        $("#providerTable tbody").append(
        "<tr>" +
          "<td>" +
            `<button type='button' onclick='window.location.href="QLNCC_Update.html?id=${provider.maNCC}";'class='btn btn-default'>` +
            "<span class='glyphicon glyphicon-edit' />" +
            "</button>" +
          "</td>" +
          `<td>${provider.maNCC}</td>` +
          `<td>${provider.tenNCC}</td>` +
          `<td>${provider.nguoidaidien}</td>` +
          `<td>${provider.linhvuckindoanh}</td>` +
          `<td>${provider.sdt}</td>` +
          `<td>${provider.diachi}</td>` +
          `<td>${provider.email}</td>` +
          "<td>" +
            `<button type='button' onclick='deleteNhaCungCap(\"${provider.maNCC}\");' class='btn btn-default'>` +
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
