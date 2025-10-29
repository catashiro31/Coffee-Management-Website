const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click',() =>{
    container.classList.add('active');
});

loginBtn.addEventListener('click',() =>{
    container.classList.remove('active');
});
const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Tính năng này hiện chưa được cập nhật. Vui lòng Thử lại sau!');
    });
});

const loginForm = document.querySelector('.form-box.login form');
const loginUsernameInput = document.querySelector('input[type = "text"]');
const loginPasswordInput = document.querySelector('input[type = "password"]');

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const loginUsernameInput = document.getElementById('login-username');
    const loginPasswordInput = document.getElementById('login-password');
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const username = loginUsernameInput.value;
        const password = loginPasswordInput.value;
        if (username === '' || password === '') {
            alert('Vui lòng nhập đầy đủ Tên đăng nhập và Mật khẩu!');
        } else {    
            alert('Đăng nhập thành công! Đang chuyển đến trang chủ...');
            window.location.href = '../home.html';
        }
    }); 
});
const registerForm = document.querySelector('.form-box.register form');

const registerUsernameInput = registerForm.querySelector('input[type="text"]');
const registerEmailInput = registerForm.querySelector('input[type="email"]');
const registerPasswordInput = registerForm.querySelector('input[type="password"]');


registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = registerUsernameInput.value;
    const email = registerEmailInput.value;
    const password = registerPasswordInput.value;
    if (username === '' || email === '' || password === '') {
        alert('Vui lòng điền đầy đủ thông tin đăng ký!');
        return;
    }
    if (!isEmailValid(email)) {
        alert('Địa chỉ Email không hợp lệ. Vui lòng kiểm tra lại.');
        return;
    }
    if (password.length < 6) {
        alert('Mật khẩu phải có ít nhất 6 ký tự.');
        return;
    }

    alert('Đăng ký thành công! (Đây là demo)');
    registerForm.reset();
});

function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
