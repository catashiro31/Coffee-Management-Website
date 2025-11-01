/* ==============================================
    JS CHO TRANG GIỎ HÀNG (cart.html) - V4 HOÀN CHỈNH
    - Yêu cầu đăng nhập
    - "Vẽ" nút +/-
    - Kiểm tra thông tin khi thanh toán
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

/* ---------- Hàm "Vẽ" Giao Diện Giỏ Hàng ---------- */
function renderCart() {
  // Luôn kiểm tra "bộ não" (Cart)
  if (!window.Cart) {
    console.error('LỖI: cart-logic.js chưa được tải.');
    return;
  }

  const cart = window.Cart.get();
  const container = safeGet('cart-items-container');
  const subtotalEl = safeGet('cart-summary-subtotal');
  const totalEl = safeGet('cart-summary-total');
  const checkoutBtn = safeGet('checkout-btn');

  if (!container || !subtotalEl || !totalEl || !checkoutBtn) {
    console.warn('HTML trang giỏ hàng bị thiếu ID.');
    return;
  }

  container.innerHTML = '';
  const grandTotal = window.Cart.tinhTongTien();

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

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.setAttribute('data-id', itemId);

    // HTML mới (dùng data-id, không dùng onclick)
    itemEl.innerHTML = `
      <img src="${item.image || '../assets/images/DoVanTien_24130858/logo.png'}" alt="${item.name || 'Sản phẩm'}" class="cart-item-image" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name || ''}</p>
        <p class="cart-item-price">Đơn giá: ${formatVND(price)}</p>
        ${item.options ? `<p class="cart-item-options">${item.options}</p>` : ''}
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
// Dùng 1 trình nghe sự kiện cho các nút +/-/Xóa
document.addEventListener('click', (e) => {
  if (!window.Cart) return; // Thoát nếu "bộ não" chưa sẵn sàng

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
    if (cur > 1) { // Chỉ gọi "bộ não" nếu số lượng thay đổi
      window.Cart.capNhatSoLuong(id, newQty);
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
    window.Cart.capNhatSoLuong(id, newQty);
    setTimeout(() => { inc.disabled = false; }, 250);
    return;
  }

  // Bấm nút XÓA
  if (removeBtn) {
    const id = removeBtn.dataset.id;
    const ok = confirm('Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?');
    if (!ok) return;

    removeBtn.disabled = true;
    window.Cart.xoaItem(id);
    return;
  }
});

/* ---------- Xử lý khi trang được tải xong (DOMContentLoaded) ---------- */
document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // ⭐ TÍNH NĂNG MỚI: YÊU CẦU ĐĂNG NHẬP ⭐
  // ==========================================
  // ⭐ QUAN TRỌNG: Sửa 'currentUser' thành key bạn dùng khi đăng nhập
  const LOGIN_STORAGE_KEY = 'currentUser'; 
  let currentUser = null;
  try {
    currentUser = JSON.parse(localStorage.getItem(LOGIN_STORAGE_KEY) || 'null');
  } catch (e) {
    currentUser = null;
  }

  // Kiểm tra 1: Đã đăng nhập chưa?
  if (!currentUser) {
    alert('Vui lòng đăng nhập để xem giỏ hàng.');
    window.location.href = 'login.html'; // Chuyển về trang đăng nhập
    return; // Dừng chạy code của trang này
  }
  // ==========================================
  // (Nếu đã đăng nhập, code sẽ tiếp tục chạy)
  // ==========================================


  // Kiểm tra "bộ não" cart-logic.js
  if (!window.Cart) {
    console.error("LỖI NGHIÊM TRỌNG: file cart-logic.js chưa được tải.");
    safeGet('cart-items-container').innerHTML = '<p class="cart-empty-message" style="color: red;">Lỗi tải giỏ hàng. Vui lòng thử lại.</p>';
    return;
  }
  
  // 1. "Vẽ" giỏ hàng lần đầu
  renderCart();

  // 2. Lấy các phần tử Modal
  const checkoutBtn = safeGet('checkout-btn');
  const modal = safeGet('qr-modal');
  const closeModalBtn = safeGet('close-modal-btn');
  const qrImg = safeGet('qr-image');
  const qrAmount = safeGet('qr-total-amount');
  const qrContentEl = safeGet('qr-content');
  const confirmBtn = safeGet('confirm-payment-btn');

  // 3. Gán sự kiện cho Nút "Thanh toán" (Đã thêm kiểm tra)
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      
      // Kiểm tra lại currentUser (đã lấy ở trên)
      // Kiểm tra 2: Đã có SĐT (phone) và Địa chỉ (address) chưa?
      if (!currentUser.phone || !currentUser.address) {
        alert('Vui lòng cập nhật Số điện thoại và Địa chỉ của bạn để tiếp tục.');
        window.location.href = 'profile.html'; // Chuyển đến trang profile
        return;
      }
      
      // Kiểm tra 3: Giỏ hàng có rỗng không?
      const grandTotal = window.Cart.tinhTongTien();
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

  // 4. Gán sự kiện cho Modal (Đóng)
  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });
  }

  // 5. Gán sự kiện cho Nút "Xác nhận thanh toán"
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      alert('Cảm ơn bạn đã mua hàng! Đơn hàng đang được xử lý.');
      window.Cart.clear(); // Gọi hàm clear (sẽ tự động phát tín hiệu)
      if (modal) modal.style.display = 'none';
    });
  }

  // 6. Lắng nghe tín hiệu "cartUpdated" từ "bộ não"
  window.addEventListener('cartUpdated', () => {
    // Tạm dừng 80ms để tránh "vẽ" lại liên tục
    if (window.__renderCartTimeout) clearTimeout(window.__renderCartTimeout);
    
    window.__renderCartTimeout = setTimeout(() => {
      renderCart();
      window.__renderCartTimeout = null;
    }, 80);
  });
});