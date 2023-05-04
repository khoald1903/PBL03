
// Combobox
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


function AddStaff() {
    let Gender = "Nam";
    // if (document.querySelector("#Male").checked) {
    //     Gender = "Nam";
    // }
    //else
     if (document.querySelector("#Female").checked) {
         Gender = "Nữ";
    }
    const staff = {
        maTk: document.querySelector("#ID").value,
        customer: null,
        employee:
        {
            maNV: document.querySelector("#ID").value,
            tenNV: document.querySelector("#Name").value,
            gt: Gender,
            ns: document.querySelector("#BirthDay").value,
            diachi: document.querySelector("#Address").value,
            sdt: document.querySelector("#Phone").value,
            email: document.querySelector("#Email").value,
            luong: parseInt(document.querySelector("#Salary").textContent),
        },
        matkhau: document.querySelector("#Password").value,
        phanQuyen:
        {
            maQuyen: "2",
            tenQuyen: "employee",
        },
        email: document.querySelector("#Email").value,
        sdt: document.querySelector("#Phone").value

    };
    console.log(staff);
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(staff)
    };

    fetch('http://localhost:8089/taikhoan/addemployee', options)
        .then(response => {
            console.log(response);
            if (response.ok) alert("Thêm thành công");

        })
        .catch(error => console.error(error));
}
const AddButton = document.querySelector("#Add_Bt");
AddButton.addEventListener("click", function () {
    AddStaff();
});