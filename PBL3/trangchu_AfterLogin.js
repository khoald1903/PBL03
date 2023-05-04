function getUserInfo() {
     const token = localStorage.getItem("MyJSON");
    const obj = JSON.parse(token);
    //if (!token) return null;
    return obj;
}

const User = getUserInfo();
console.log(User);
if (User !== null) {
    const nameLink = document.querySelector('#displayName');
    if (User.data.phanQuyen.maQuyen === '3') nameLink.textContent = User.data.customer.maKH;
    else nameLink.textContent = User.data.employee.maNV;
}


(()=>{
    const lgout = document.querySelector('#LOGOUT');
    console.log(lgout);
    lgout.addEventListener('click', () => {
        localStorage.removeItem("MyJSON");
        window.location = '/trangchu.html';
    })
})()
