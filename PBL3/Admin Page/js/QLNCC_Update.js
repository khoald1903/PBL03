
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

const urlParams = new URLSearchParams(window.location.search);
const ID = urlParams.get('id');

const url = `http://localhost:8089/nhacungcap/get/${ID}`;   //Thay đổi 

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);
      document.querySelector("#ID").value = data.maNCC;
      document.querySelector("#Name").value = data.tenNCC;
      document.querySelector("#RepreName").value = data.nguoiDD;
      document.querySelector("#BusiSector").value = data.linhvucKD;
      document.querySelector("#Address").value = data.diachi;
      document.querySelector("#Phone").value = data.sdt;
      document.querySelector("#Email").value = data.email;
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

function Update(id) {
    const provider = {
      maNCC: document.querySelector("#ID").value,
      tenNCC: document.querySelector("#Name").value,
      nguoiDD: document.querySelector("#RepreName").value,
      linhvucKD: document.querySelector("#BusiSector").value,
      diachi: document.querySelector("#Address").value,
      sdt: document.querySelector("#Phone").value,
      email: document.querySelector("#Email").value,
    };
    fetch(`http://localhost:8089/nhacungcap/update/${id}`, {  //Thay đổi
        method: 'PUT',  
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(provider)
    })
        .then(res => {
            if (res.ok) {
                alert('Cập nhật thành công');
            } else {
                throw new Error('Failed ');
            }
        })
        .catch(error => {
            console.error(error);
        });
}
// console.log(ID);
const UpdateButton = document.querySelector("#Update");
UpdateButton.addEventListener("click", function () {
    Update(ID);
});
