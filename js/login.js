document.addEventListener('DOMContentLoaded', function() {
    
    // ------------------------------------------------------------------
    // ⭐ ĐÂY LÀ PHẦN CODE MỚI ĐƯỢC THÊM VÀO ⭐
    // ------------------------------------------------------------------
    // Kiểm tra xem người dùng đã đăng nhập chưa (ngay khi tải trang)
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    
    if (loggedInUser) {
        // Nếu đã đăng nhập, không hiển thị form, chuyển thẳng về trang chủ
        alert('Bạn đã đăng nhập rồi. Đang chuyển về trang chủ...');
        window.location.href = '../index.html';
        return; // Dừng chạy toàn bộ code bên dưới
    }
    // ------------------------------------------------------------------
    // (Nếu không có loggedInUser, code sẽ tiếp tục chạy như bình thường)
    // ------------------------------------------------------------------


    // --- Selectors (Chọn các phần tử) ---
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');
    const socialIcons = document.querySelectorAll('.social-icons a');

    // Form Đăng nhập
    const loginForm = document.getElementById('login-form');
    const loginCredentialInput = document.getElementById('login-credential');
    const loginPasswordInput = document.getElementById('login-password');

    // Form Đăng ký
    const registerForm = document.getElementById('register-form');
    const registerCredentialInput = document.getElementById('register-credential');
    const registerPasswordInput = document.getElementById('register-password');
    // (Giả sử bạn đã thêm ô "Xác nhận Mật khẩu" vào HTML)
    const registerConfirmPasswordInput = document.getElementById('register-confirm-password');

    // --- "Cơ sở dữ liệu" tạm thời (lưu người dùng trong phiên này) ---
    let registeredUsers = [
        { credential: "user@gmail.com", password: "password123" },
        { credential: "0987654321", password: "password123" }
    ];

    // --- Hàm Hỗ trợ (Validation) ---
    function isEmailValid(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    function isPhoneValid(phone) {
        const re = /^0[0-9]{9}$/;
        return re.test(String(phone));
    }
    function isCredentialValid(credential) {
        return isEmailValid(credential) || isPhoneValid(credential);
    }

    // --- Lắng nghe Sự kiện ---

    // 1. Sự kiện chuyển đổi giữa 2 panel
    registerBtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // 2. Sự kiện click vào icon mạng xã hội
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Tính năng này hiện chưa được cập nhật. Vui lòng Thử lại sau!');
        });
    });

    // 3. Sự kiện Submit Form Đăng Nhập
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const credential = loginCredentialInput.value.trim();
        const password = loginPasswordInput.value.trim();

        if (credential === '' || password === '') {
            alert('Vui lòng nhập đầy đủ Email/SĐT và Mật khẩu!');
            return;
        }
        if (!isCredentialValid(credential)) {
            alert('Định dạng Email hoặc Số điện thoại không hợp lệ.');
            return;
        }

        const user = registeredUsers.find(u => u.credential === credential);

        if (!user) {
            alert('Tài khoản không tồn tại. Vui lòng đăng ký.');
            container.classList.add('active');
        } else if (user.password !== password) {
            alert('Sai mật khẩu. Vui lòng thử lại.');
        } else {
            alert('Đăng nhập thành công! Đang chuyển đến trang chủ...');
            const username = user.credential.split('@')[0];
            sessionStorage.setItem('loggedInUser', username);
            window.location.href = '../index.html'; 
        }
    }); 

    // 4. Sự kiện Submit Form Đăng Ký (Phiên bản có "Xác nhận Mật khẩu")
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const credential = registerCredentialInput.value.trim();
        const password = registerPasswordInput.value.trim();
        
        // Lấy giá trị từ ô "Xác nhận Mật khẩu"
        // (Nếu bạn không có ô này trong HTML, nó sẽ báo lỗi, hãy thêm nó vào HTML)
        const confirmPassword = registerConfirmPasswordInput ? registerConfirmPasswordInput.value.trim() : password;
        const passwordCheck = registerConfirmPasswordInput ? password === confirmPassword : true;

        if (credential === '' || password === '' || (registerConfirmPasswordInput && confirmPassword === '')) {
            alert('Vui lòng điền đầy đủ thông tin đăng ký!');
            return;
        }
        if (!isCredentialValid(credential)) {
            alert('Email hoặc Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.');
            return;
        }
        if (password.length < 6) {
            alert('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }
        
        // Kiểm tra mật khẩu khớp nhau
        if (!passwordCheck) {
            alert('Mật khẩu xác nhận không khớp. Vui lòng thử lại.');
            return;
        }

        if (registeredUsers.find(user => user.credential === credential)) {
            alert('Email hoặc Số điện thoại này đã được đăng ký. Vui lòng đăng nhập.');
            loginCredentialInput.value = credential; 
            container.classList.remove('active'); 
            return;
        }

        registeredUsers.push({ credential, password });
        console.log("Người dùng đã đăng ký:", registeredUsers); 

        alert('Đăng ký thành công! Vui lòng đăng nhập.');
        registerForm.reset(); 
        
        loginCredentialInput.value = credential;
        loginPasswordInput.value = ''; 
        container.classList.remove('active');
    });
});