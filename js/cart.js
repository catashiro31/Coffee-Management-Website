/* ==============================================
    JS CHO TRANG GIỎ HÀNG (cart.html)
    - Hiển thị mô tả (description)
    - Tích hợp logic menu burger
    - Tích hợp logic kiểm tra đăng nhập
   ============================================== */

/* ---------- Helpers (Hàm hỗ trợ) ---------- */
function formatVND(value) {
  const n = Number(value) || 0;
  return n.toLocaleString('vi-VN') + ' VNĐ';
}

function safeGet(id) {
  return document.getElementById(id);
}

/* ---------- Hàm tạo mã QR của VietQR ---------- */
function generateVietQR(amount, content) {
  const BANK_ID = '970418'; // Ví dụ: Techcombank
  const ACCOUNT_NO = '1234567890'; // Sửa STK của bạn
  const ACCOUNT_NAME = 'NGUYEN VAN A'; // Sửa tên chủ TK
  const TEMPLATE = 'compact';
  const qrApiUrl = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${amount}&addInfo=${encodeURIComponent(content)}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
  return qrApiUrl;
}

// ==============================================
// === LOGIC MENU BURGER (ĐƯỢC TÍCH HỢP) ===
// ==============================================

/** "Vẽ" menu di động (drawer) */
function renderMobileMenu(currentUser) {
    const overlay = safeGet('overlay');
    if (!overlay) return;

    let authLinks;
    if (currentUser) {
        authLinks = `
            <a href="profile.html" class="user-link">
                <i class="fa-solid fa-user"></i> ${currentUser.username}
            </a>
            <a href="#" id="logout-link-mobile"><button class="btn white">Đăng xuất</button></a>
        `;
    } else {
        authLinks = `
            <a href="login.html"><button class="btn white">Đăng nhập</button></a>
            <a href="register.html"><button class="btn black">Đăng kí</button></a>
        `;
    }

    overlay.innerHTML = `
        <aside class="drawer" role="dialog" aria-modal="true" aria-labelledby="menu-title">
            <h2 id="menu-title" class="sr-only">Menu Di động</h2>
            <img class="logo" src="../assets/images/DoVanTien_24130858/logo.png" alt="Logo Coffee Since 2025" width="80" height="80">
            
            <nav class="menu-links" aria-label="Điều hướng di động">
                <a href="menu.html">Thực đơn</a>
                <a href="#">Đơn hàng</a>
                <a href="cart.html" class="cart-link">Giỏ hàng</a>
            </nav>
            
            <div class="actions-overlay auth-section-mobile">
                ${authLinks}
            </div>
        </aside>
    `;

    // Gán sự kiện đăng xuất cho nút (nếu tồn tại)
    const logoutBtnMobile = safeGet('logout-link-mobile');
    if(logoutBtnMobile) {
        logoutBtnMobile.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout();
        });
    }
}

/** Mở menu di động */
function openMenu() {
    const overlay = safeGet('overlay');
    const burger = safeGet('burger');
    if (!overlay || !burger) return;
    
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    burger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('lock');
}

/** Đóng menu di động */
function closeMenu() {
    const overlay = safeGet('overlay');
    const burger = safeGet('burger');
    if (!overlay || !burger) return;

    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('lock');
    burger.focus();
}

/** Gán sự kiện cho menu burger */
function setupBurgerMenu() {
    const burger = safeGet('burger');
    const overlay = safeGet('overlay');
    
    burger?.addEventListener('click', () => {
        const isOpen = overlay?.classList.contains('open') ?? false;
        isOpen ? closeMenu() : openMenu();
    });
    
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay?.classList.contains('open')) closeMenu();
    });
}

// ==============================================
// === LOGIC ĐĂNG NHẬP/ĐĂNG XUẤT (ĐƯỢC TÍCH HỢP) ===
// ==============================================
const LOGIN_STORAGE_KEY = 'currentUser'; 

/** Lấy thông tin user từ localStorage */
function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(LOGIN_STORAGE_KEY) || 'null');
    } catch (e) {
        return null;
    }
}

/** Xử lý đăng xuất */
function handleLogout() {
    if (confirm('Bạn có chắc muốn đăng xuất?')) {
        localStorage.removeItem(LOGIN_STORAGE_KEY);
        // Tải lại trang để cập nhật header
        window.location.reload(); 
    }
}

/** "Vẽ" khu vực user trên header (desktop) */
function renderAuthSection(currentUser) {
    const authSection = document.querySelector('.navbar__actions.auth-section');
    if (!authSection) return;

    if (currentUser) {
        // Đã đăng nhập
        authSection.innerHTML = `
            <span class="welcome-message">Xin chào, ${currentUser.username}!</span>
            <button class="btn-logout" id="logout-btn">Đăng xuất</button>
        `;
        safeGet('logout-btn')?.addEventListener('click', handleLogout);
    } else {
        // Chưa đăng nhập
        authSection.innerHTML = `
            <a href="login.html">
                <button class="btn btn--white">Đăng nhập</button>
            </a>
            <a href="register.html">
                <button class="btn btn--black">Đăng kí</button>
            </a>
        `;
    }
}

// ==============================================
// === LOGIC GIỎ HÀNG (SỬA LỖI HIỂN THỊ) ===
// ==============================================

/* ---------- Hàm "Vẽ" Giao Diện Giỏ Hàng ---------- */
function renderCart() {
  if (typeof Cart === 'undefined') {
    console.error('LỖI: cart-logic.js chưa được tải.');
    return;
  }

  const cart = Cart.get();
  const container = safeGet('cart-items-container');
  const subtotalEl = safeGet('cart-summary-subtotal');
  const totalEl = safeGet('cart-summary-total');
  const checkoutBtn = safeGet('checkout-btn');

  if (!container || !subtotalEl || !totalEl || !checkoutBtn) {
    console.warn('HTML trang giỏ hàng bị thiếu ID.');
    return;
  }

  container.innerHTML = '';
  const grandTotal = Cart.tinhTongTien();

  // 1. "Vẽ" nếu giỏ hàng rỗng
  if (!Array.isArray(cart) || cart.length === 0) {
    container.innerHTML = '<p class="cart-empty-message">Giỏ hàng của bạn đang trống.</p>';
    subtotalEl.textContent = formatVND(0);
    totalEl.textContent = formatVND(0);
    checkoutBtn.disabled = true;
    return;
  }

  // 2. "Vẽ" các sản phẩm
  cart.forEach(item => {
    const price = Number(item.price) || 0;
    const qty = Math.max(1, Number(item.quantity) || 1); // Số lượng ít nhất là 1
    const itemTotal = price * qty;
    const itemId = item.lineItemId || item.id || '';
    
    // ==================================================
    // === ⭐ SỬA LỖI HIỂN THỊ DESCRIPTION (SIZE/TOPPING) ⭐ ===
    // ==================================================
    // Sử dụng item.description thay vì item.options
    const descriptionHtml = item.description 
      ? `<p class="cart-item-options">${item.description}</p>` 
      : '';
    // ==================================================

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.setAttribute('data-id', itemId);

    itemEl.innerHTML = `
      <img src="${item.image || '../assets/images/DoVanTien_24130858/logo.png'}" alt="${item.name || 'Sản phẩm'}" class="cart-item-image" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name || ''}</p>
        <p class="cart-item-price">Đơn giá: ${formatVND(price)}</p>
        
        ${descriptionHtml} 
        
        <div class="quantity-controls">
          <button class="quantity-btn btn-decrease" data-id="${itemId}">-</button>
          <span class="quantity-display" data-id="${itemId}">${qty}</span>
          <button class="quantity-btn btn-increase" data-id="${itemId}">+</button>
        </div>
      </div>
      <div class="cart-item-total-block">
        <p class="cart-item-line-total" data-id="${itemId}">${formatVND(itemTotal)}</p>
        <button class="cart-item-remove" data-id="${itemId}">× Xóa</button>
      </div>
    `;
    container.appendChild(itemEl);
  });

  // 3. Cập nhật tổng tiền
  subtotalEl.textContent = formatVND(grandTotal);
  totalEl.textContent = formatVND(grandTotal);
  checkoutBtn.disabled = false;
}

/* ---------- Xử lý sự kiện toàn trang (Event Delegation) ---------- */
// (Giữ nguyên logic +/-/Xóa)
document.addEventListener('click', (e) => {
  if (typeof Cart === 'undefined') return;

  const dec = e.target.closest('.btn-decrease');
  const inc = e.target.closest('.btn-increase');
  const removeBtn = e.target.closest('.cart-item-remove');

  // Bấm nút TRỪ (-)
  if (dec) {
    const id = dec.dataset.id;
    const display = document.querySelector(`.quantity-display[data-id="${id}"]`);
    let cur = Number(display ? display.textContent : 1) || 1;
    const newQty = Math.max(1, cur - 1); // Không cho phép < 1
    
    dec.disabled = true;
    if (cur > 1) { 
      Cart.capNhatSoLuong(id, newQty);
    }
    setTimeout(() => { dec.disabled = false; }, 250);
    return;
  }

  // Bấm nút CỘNG (+)
  if (inc) {
    const id = inc.dataset.id;
    const display = document.querySelector(`.quantity-display[data-id="${id}"]`);
    let cur = Number(display ? display.textContent : 1) || 1;
    const newQty = cur + 1;
    
    inc.disabled = true;
    Cart.capNhatSoLuong(id, newQty);
    setTimeout(() => { inc.disabled = false; }, 250);
    return;
  }

  // Bấm nút XÓA
  if (removeBtn) {
    const id = removeBtn.dataset.id;
    const ok = confirm('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?');
    if (!ok) return;

    removeBtn.disabled = true;
    Cart.xoaItem(id);
    return;
  }
});

/* ---------- Xử lý khi trang được tải xong (DOMContentLoaded) ---------- */
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. XỬ LÝ ĐĂNG NHẬP VÀ MENU ---
  const currentUser = getCurrentUser();
  renderAuthSection(currentUser); // "Vẽ" header desktop
  renderMobileMenu(currentUser); // "Vẽ" menu mobile
  setupBurgerMenu(); // Kích hoạt nút burger
  Cart.updateCartCount(); // Cập nhật số trên icon giỏ hàng

  // --- 2. KIỂM TRA ĐIỀU KIỆN XEM GIỎ HÀNG ---
  if (!currentUser) {
    alert('Vui lòng đăng nhập để xem giỏ hàng.');
    window.location.href = 'login.html'; // Chuyển về trang đăng nhập
    return; // Dừng chạy code
  }
  
  if (typeof Cart === 'undefined') {
    console.error("LỖI NGHIÊM TRỌNG: file logic-cart.js chưa được tải.");
    safeGet('cart-items-container').innerHTML = '<p class="cart-empty-message" style="color: red;">Lỗi tải giỏ hàng. Vui lòng thử lại.</p>';
    return;
  }
  
  // --- 3. "VẼ" GIỎ HÀNG VÀ CÁC SỰ KIỆN ---
  renderCart();

  const checkoutBtn = safeGet('checkout-btn');
  const modal = safeGet('qr-modal');
  const closeModalBtn = safeGet('close-modal-btn');
  const qrImg = safeGet('qr-image');
  const qrAmount = safeGet('qr-total-amount');
  const qrContentEl = safeGet('qr-content');
  const confirmBtn = safeGet('confirm-payment-btn');

  // Gán sự kiện cho Nút "Thanh toán"
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      
      // Kiểm tra SĐT và Địa chỉ
      if (!currentUser.phone || !currentUser.address) {
        alert('Vui lòng cập nhật Số điện thoại và Địa chỉ của bạn để tiếp tục.');
        window.location.href = 'profile.html'; // Chuyển đến trang profile
        return;
      }
      // Kiểm tra giỏ hàng có sản phẩm không
      const grandTotal = Cart.tinhTongTien();
      if (!grandTotal || grandTotal === 0) {
        alert('Giỏ hàng trống. Vui lòng thêm sản phẩm.');
        return;
      }

      // Nếu OK hết -> Mở Modal
      const orderContent = `DH${Date.now().toString().slice(-6)}`;
      const qrUrl = generateVietQR(grandTotal, orderContent);

      if (qrImg) qrImg.src = qrUrl;
      if (qrAmount) qrAmount.textContent = formatVND(grandTotal);
      if (qrContentEl) qrContentEl.textContent = orderContent;
      if (modal) modal.style.display = 'flex';
    });
  }

  // Gán sự kiện cho Modal (Đóng)
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  // Gán sự kiện cho Nút "Xác nhận thanh toán"
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      alert('Cảm ơn bạn đã mua hàng! Đơn hàng đang được xử lý.');
      Cart.clear(); 
      if (modal) modal.style.display = 'none';
      // Tải lại trang để về giỏ hàng rỗng và cập nhật header
      window.location.reload(); 
    });
  }

  // Lắng nghe tín hiệu "cartUpdated" từ "bộ não"
  window.addEventListener('cartUpdated', () => {
    if (window.__renderCartTimeout) clearTimeout(window.__renderCartTimeout);
    
    window.__renderCartTimeout = setTimeout(() => {
      renderCart();
      window.__renderCartTimeout = null;
    }, 80);
  });
});