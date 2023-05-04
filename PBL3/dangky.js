// function registerUser() {
//     const url = 'http://localhost:8089/taikhoan/register';
//     const maTk = document.querySelector('#Username').value;
//     const customer = {
//         maKH: document.querySelector('#Username').value,
//         tenKH: document.querySelector('#HoTen').value,
//         gt: document.querySelector('#Gender').value,
//         email: document.querySelector('#Email').value,
//         diachi: document.querySelector('#Address').value,
//         sdt: document.querySelector('#Phone').value
//     };

//     const employee = null;
//     const maukhau = document.querySelector('#Password').value;
//     const phanQuyen =
//     {
//         maQuyen: "3",
//         tenQuyen: "customer"
//     };
//     const email = document.querySelector('#Email').value;
//     const sdt = document.querySelector('#Phone').value


//     // const confirmpassword = document.querySelector('#ConfirmPassword').value;
//     // const password = document.querySelector('Password').value;
//     fetch(url, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({maTk,customer,employee,maukhau,phanQuyen,email,sdt})
//     })
//         .then(response => {
//             if (response.status === 200) {
//                 console.log('Đăng ký thành công!');
//                 window.location.href = '/dangnhap';
//             } else {
//                 console.error('Đăng ký thất bại');
//             }
//         })
//         .catch(error => console.error(error));
// };
(()=>{
    const register_bt = document.querySelector('.main__button-dangky');
    register_bt.addEventListener('click', () => {
const url = 'http://localhost:8089/taikhoan/register';
const dataa = {
     maTk : document.querySelector("#Username").value,
     customer : {
        maKH: document.querySelector("#Username").value,
        tenKH: document.querySelector("#HoTen").value,
        gt: document.querySelector("#Gender").value,
        email: document.querySelector("#Email").value,
        diachi: document.querySelector("#Address").value,
        sdt: document.querySelector("#Phone").value
     },
     matkhau : document.getElementById('Pass').value,
     employee : null,
     phanQuyen :
    {
        maQuyen: "3",
        tenQuyen: "customer"
    },
    email : document.querySelector("#Email").value,
     sdt : document.querySelector("#Phone").value

}
    // const maTk = document.querySelector('#Username').value;
    // const customer = {
    //     maKH: document.querySelector('#Username').value,
    //     tenKH: document.querySelector('#HoTen').value,
    //     gt: document.querySelector('#Gender').value,
    //     email: document.querySelector('#Email').value,
    //     diachi: document.querySelector('#Address').value,
    //     sdt: document.querySelector('#Phone').value
    // };

    // const employee = null;
    // const maukhau = document.querySelector('#Password').value;
    // const phanQuyen =
    // {
    //     maQuyen: "3",
    //     tenQuyen: "customer"
    // };
    // const email = document.querySelector('#Email').value;
    // const sdt = document.querySelector('#Phone').value

    // console.log(maTk);
    // console.log(customer);
    // console.log(employee);
    // console.log(maukhau);
    // console.log(phanQuyen);
    // console.log(email);
    // console.log(sdt);
    // const confirmpassword = document.querySelector('#ConfirmPassword').value;
    // const password = document.querySelector('Password').value;
    
  
   fetch("http://localhost:8089/taikhoan/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataa),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Registration successful");
      window.location = '/dangnhap.html';
      // Handle success
    })
    .catch((error) => {
      console.error("Error registering customer:", error);
      // Handle error
    });

       
            
    })
})()
// document.querySelector('.main__button-dangky').addEventListener('click', registerUser);
