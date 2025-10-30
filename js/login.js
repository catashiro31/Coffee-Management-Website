document.addEventListener('DOMContentLoaded', function() {

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

    // --- "Cơ sở dữ liệu" tạm thời (lưu người dùng trong phiên này) ---
    let registeredUsers = [];

    // --- Hàm Hỗ trợ (Validation) ---

    // Hàm kiểm tra Email
    function isEmailValid(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Hàm kiểm tra SĐT (đơn giản: 10 số, bắt đầu bằng 0)
    function isPhoneValid(phone) {
        const re = /^0[0-9]{9}$/;
        return re.test(String(phone));
    }

    // Hàm kiểm tra SĐT hoặc Email
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

    // 2. Sự kiện click vào icon mạng xã hội (như cũ)
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

        // Kiểm tra rỗng
        if (credential === '' || password === '') {
            alert('Vui lòng nhập đầy đủ Email/SĐT và Mật khẩu!');
            return;
        }

        // Kiểm tra định dạng
        if (!isCredentialValid(credential)) {
            alert('Định dạng Email hoặc Số điện thoại không hợp lệ.');
            return;
        }

        // --- Logic kiểm tra tài khoản ---
        const user = registeredUsers.find(u => u.credential === credential);

        if (!user) {
            // YÊU CẦU: Nếu không có tài khoản, chuyển sang Đăng Ký
            alert('Tài khoản không tồn tại. Vui lòng đăng ký.');
            container.classList.add('active'); // Chuyển sang panel Đăng Ký
        } else if (user.password !== password) {
            alert('Sai mật khẩu. Vui lòng thử lại.');
        } else {
            // Đăng nhập thành công
            alert('Đăng nhập thành công! Đang chuyển đến trang chủ...');
            // Chuyển hướng về trang chủ
            window.location.href = '../index.html'; 
        }
    }); 

    // 4. Sự kiện Submit Form Đăng Ký
    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const credential = registerCredentialInput.value.trim();
        const password = registerPasswordInput.value.trim();

        // Kiểm tra rỗng
        if (credential === '' || password === '') {
            alert('Vui lòng điền đầy đủ thông tin đăng ký!');
            return;
        }

        // Kiểm tra định dạng
        if (!isCredentialValid(credential)) {
            alert('Email hoặc Số điện thoại không hợp lệ. Vui lòng kiểm tra lại.');
            return;
        }

        // Kiểm tra độ dài mật khẩu
        if (password.length < 6) {
            alert('Mật khẩu phải có ít nhất 6 ký tự.');
            return;
        }

        // --- Logic Đăng Ký ---
        
        // Kiểm tra xem tài khoản đã tồn tại chưa
        if (registeredUsers.find(user => user.credential === credential)) {
            alert('Email hoặc Số điện thoại này đã được đăng ký. Vui lòng đăng nhập.');
            loginCredentialInput.value = credential; // Điền sẵn vào form đăng nhập
            container.classList.remove('active'); // Chuyển sang form đăng nhập
            return;
        }

        // Thêm người dùng mới vào "database"
        registeredUsers.push({ credential, password });

        alert('Đăng ký thành công! Vui lòng đăng nhập.');
        registerForm.reset(); // Xóa trắng form đăng ký
        
        // Tự động chuyển sang form Đăng Nhập và điền sẵn
        loginCredentialInput.value = credential;
        loginPasswordInput.value = ''; 
        container.classList.remove('active');
    });
});