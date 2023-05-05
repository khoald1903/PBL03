
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
    { id: 2, name: "Tên khu vực" },
    { id: 3, name: "Nhãn hiệu" },
    { id: 4, name: "Số lượng" },
    { id: 5, name: "Tình trạng" }
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
    $("#wareHouseTable tbody").empty();
    const textSearch ='';
    fetch(`http://localhost:8089/sanpham/list/${select_Sort.value}&${textSearch}`)  //Thay đổi localhost
  .then(res => res.json())
  .then(data => {
    //console.log(data);
    data.forEach(warehouse => {
      if ($("#wareHouseTable tbody").length == 0) {
        $("#wareHouseTable").append("<tbody></tbody>");
      }
      $("#wareHouseTable tbody").append(
        "<tr>" +
          `<td>${warehouse.maKV}</td>` +
          `<td>${warehouse.tenKV}</td>` +
          `<td>${warehouse.nh.tenNH}</td>` +
          `<td>${warehouse.tinhtrang}</td>` +
        "</tr>");
    });
  })
  .catch(error => console.log(error));
  })

  // console.log(SortCBB.id,' ',textSearch);
  
}
function Show() {
  fetch('http://localhost:8089/sanpham')
    .then(res => res.json())
    .then(data => {
     // console.log(data);
      data.forEach(warehouse => {
        if ($("#wareHouseTable tbody").length == 0) {
        $("#wareHouseTable").append("<tbody></tbody>");
        }
        $("#wareHouseTable tbody").append(
          "<tr>" +
            `<td>${warehouse.maKV}</td>` +
            `<td>${warehouse.tenKV}</td>` +
            `<td>${warehouse.nh.tenNH}</td>` +
            `<td>${warehouse.tinhtrang}</td>` +
          "</tr>");
        });
    })
    .catch(error => console.log(error));
}
Show();
Sort();
