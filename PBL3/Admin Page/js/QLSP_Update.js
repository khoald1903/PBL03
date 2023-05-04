
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

var LinkString = "";
function loadFiles(event) {
  var images = document.getElementById('output-images');
  for (var i = 0; i < event.target.files.length; i++) {
    var image = document.createElement('img');
    image.src = URL.createObjectURL(event.target.files[i]);
    image.width = 200;
    images.appendChild(image);

    //console.log(event.target.files[i]);
    var file = event.target.files[i];
    LinkString = LinkString + file.name + "|";
  }
};
const select_Size = document.getElementById("size-select");
fetch("http://localhost:8089/sanpham/kc")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maKC;
      option.textContent = valuee.soKC;
      select_Size.appendChild(option);
    });
  })
  .catch(error => console.error(error));


const select_Color = document.getElementById("color-select");
fetch("http://localhost:8089/sanpham/mau")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maMau;
      option.textContent = valuee.tenMau;
      select_Color.appendChild(option);
    });
  })
  .catch(error => console.error(error));

const select_Brand = document.getElementById("brand-select");
fetch("http://localhost:8089/sanpham/nh")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maNH;
      option.textContent = valuee.tenNH;
      select_Brand.appendChild(option);
    });
  })
  .catch(error => console.error(error));

const select_Category = document.getElementById("category-select");
fetch("http://localhost:8089/sanpham/mh")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maMH;
      option.textContent = valuee.tenMH;
      select_Category.appendChild(option);
    });
  })
  .catch(error => console.error(error));

const select_Discount = document.getElementById("discount-select");
fetch("http://localhost:8089/sanpham/km")
  .then(response => response.json())
  .then(data => {
    data.forEach(valuee => {
      const option = document.createElement("option");
      option.value = valuee.maKM;
      option.textContent = `${valuee.mucKM * 100}%`;
      select_Discount.appendChild(option);
    });
  })
  .catch(error => console.error(error));


function Update(id) {
  const product = {
    maSP: document.querySelector("#MaSP").value,
    tenSP: document.querySelector("#TenSP").value,
    giaBan: document.querySelector("#giaban").value,
    maKC: document.querySelector("#size-select").value,
    maMau: document.querySelector("#color-select").value,
    maNH: document.querySelector("#brand-select").value,
    maMH: document.querySelector("#category-select").value,
    maKM: document.querySelector("#discount-select").value,
    soLuong: document.querySelector("#soluong").value,
    hinhAnh: LinkString,
    moTa: document.querySelector("#input_mota").value
  };

  fetch(`http://localhost:8089/sanpham/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  })
    .then(res => {
      if (res.ok) {
        console.log('Product updated successfully');
      } else {
        throw new Error('Failed to update product');
      }
    })
    .catch(error => {
      console.error(error);
    });
}
const urlParams = new URLSearchParams(window.location.search);
const maSPValue = urlParams.get('id');

const UpdateButton = document.querySelector("#Update");
UpdateButton.addEventListener("click", function () {
  Update(maSPValue);
});
