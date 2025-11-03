document.addEventListener('DOMContentLoaded', () => {

    const currentUserJSON = localStorage.getItem('currentUser');
    let currentUser = null;

    if (currentUserJSON) {
        try {
            currentUser = JSON.parse(currentUserJSON);
        } catch (e) {
            console.error("Lỗi khi đọc JSON từ localStorage:", e);
            localStorage.removeItem('currentUser'); // Xóa nếu JSON bị hỏng
        }
    }
    const authHTML = `
        <a href="login.html">
            <button class="btn btn--white">Đăng nhập</button>
        </a>
        <a href="login.html">
            <button class="btn btn--black">Đăng kí</button>
        </a>
    `;

    const userHTML = (username) => `
        <div style="display: flex; align-items: center; color: black; gap: 15px;">
            <span style="font-weight: bold; white-space: nowrap;">Chào, ${username}!</span>
            <button class="btn btn--white" id="global-logout-btn">Đăng xuất</button>
        </div>
    `;
    const authSections = document.querySelectorAll('.auth-section');
    authSections.forEach(section => {
        if (currentUser && currentUser.username) {
            section.innerHTML = userHTML(currentUser.username);
        } else {
            section.innerHTML = authHTML;
        }
    });
    document.body.addEventListener('click', (event) => {
        if (event.target && (event.target.id === 'global-logout-btn' || event.target.closest('#global-logout-btn'))) {
            localStorage.removeItem('currentUser');
            alert('Bạn đã đăng xuất thành công.');
            window.location.reload(); 
        }
    });
});