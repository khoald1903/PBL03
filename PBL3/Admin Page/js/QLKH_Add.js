
// Button Add
$(".hover").mouseleave(
    function () {
        $(this).removeClass("hover");
    }
);


function AddCustomer() {
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
        customer:
        {
            maKH: document.querySelector("#ID").value,
            tenKH: document.querySelector("#Name").value,
            gt: Gender,
            diachi: document.querySelector("#Address").value,
            sdt: document.querySelector("#Phone").value,
            email: document.querySelector("#Email").value,
        },
        employee:null,
        matkhau: document.querySelector("#Password").value,
        phanQuyen:
        {
            maQuyen: "3",
            tenQuyen:"customer",
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

    fetch('http://localhost:8089/taikhoan/addcustomer', options)
        .then(response => {
            console.log(response);
            if (response.ok) alert("Thêm thành công");

        })
        .catch(error => console.error(error));
}
const AddButton = document.querySelector("#Add_Bt");
AddButton.addEventListener("click", function () {
    AddCustomer();
});