// Chạy code khi trang đã tải xong
document.addEventListener('DOMContentLoaded', () => {

    // 1. Lấy tên user từ sessionStorage (mà bên login.js đã lưu)
    const username = sessionStorage.getItem('loggedInUser');

    // 2. Tìm TẤT CẢ khu vực hiển thị (dùng querySelectorAll với class)
    const authSections = document.querySelectorAll('.auth-section');

    // 3. Kiểm tra xem có user không
    if (username) {
        
        // 4. NẾU CÓ: Lặp qua từng khu vực (cả desktop và mobile)
        authSections.forEach(section => {
            // Thay thế HTML bên trong
            section.innerHTML = `
                <span class="welcome-message">Hello, ${username}</span>
                <button id="logout-btn-${Math.random()}" class="btn btn--black btn-logout">Đăng Xuất</button>
            `; 
            // Dùng class "btn--black" cho nút Đăng xuất (giống nút Đăng kí)
            // Thêm class "btn-logout" để chúng ta thêm sự kiện
        });

        // 5. Thêm sự kiện cho TẤT CẢ nút Đăng Xuất MỚI
        const logoutButtons = document.querySelectorAll('.btn-logout');
        logoutButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Xóa user khỏi sessionStorage
                sessionStorage.removeItem('loggedInUser');
                // Tải lại trang để quay về trạng thái "Đăng nhập/Đăng ký"
                window.location.reload();
            });
        });

    }
    // 6. NẾU KHÔNG CÓ USER: Không làm gì cả, giữ nguyên 2 nút "Đăng nhập/Đăng ký"

});