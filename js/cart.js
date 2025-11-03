/* [File cart.js V2 - Hỗ trợ Modal nhập thông tin] */

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
    const qty = Math.max(1, Number(item.quantity) || 1);
    const itemTotal = price * qty;
    const itemId = item.lineItemId || item.id || '';
    
    const descriptionHtml = item.description 
      ? `<p class="cart-item-options">${item.description}</p>` 
      : '';

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

/* ---------- Xử lý sự kiện +/-/Xóa (Event Delegation) ---------- */
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

/**
 * ⭐ HÀM MỚI (THEO YÊU CẦU): Tạo modal nhập thông tin bằng JS
 * Nó sẽ tự động chạy 1 lần khi trang được tải.
 */
function createUserInfoModal() {
    const modal = document.createElement('div');
    modal.id = 'user-info-modal';
    modal.className = 'modal'; // Dùng chung style với modal QR
    modal.style.display = 'none'; // Ẩn ban đầu

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" id="close-user-info-modal">×</span>
            <h2>Xác nhận thông tin giao hàng</h2>
            <p>Vui lòng cung cấp thông tin để tiếp tục.</p>
            <div class="info-form">
                <label for="user-info-name">Họ và tên:</label>
                <input type="text" id="user-info-name" placeholder="Nguyễn Văn A">
                
                <label for="user-info-phone">Số điện thoại:</label>
                <input type="tel" id="user-info-phone" placeholder="090xxxxxxx">
                
                
                <label for="user-info-address">Địa chỉ:</label>
                <textarea id="user-info-address" placeholder="Số 1, đường A, phường B, quận C" rows="3"></textarea>

            </div>
            <button class="btn-confirm" id="confirm-user-info-btn">Xác nhận và tiếp tục</button>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Thêm CSS cho form mới (vì nó không có trong file cart.css)
    const modalStyle = document.createElement('style');
    modalStyle.innerHTML = `
        .info-form { display: flex; flex-direction: column; gap: 10px; margin: 20px 0; }
        .info-form label { font-weight: bold; font-size: 14px; }
        .info-form input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 16px; }
    `;
    document.head.appendChild(modalStyle);
}


/* ---------- Xử lý khi trang được tải xong (DOMContentLoaded) ---------- */
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. XỬ LÝ ĐĂNG NHẬP VÀ MENU ---
  if (typeof Cart === 'undefined') {
    console.error("LỖI NGHIÊM TRỌNG: file logic-cart.js chưa được tải.");
    safeGet('cart-items-container').innerHTML = '<p class="cart-empty-message" style="color: red;">Lỗi tải giỏ hàng. Vui lòng thử lại.</p>';
    return;
  }
  Cart.updateCartCount(); // Cập nhật số trên icon giỏ hàng

  // --- 2. KIỂM TRA ĐIỀU KIỆN XEM GIỎ HÀNG ---
  const LOGIN_STORAGE_KEY = 'currentUser'; 
  let currentUser = null;
  try {
      currentUser = JSON.parse(localStorage.getItem(LOGIN_STORAGE_KEY) || 'null');
  } catch (e) {
      currentUser = null;
  }
  
  if (!currentUser) {
    alert('Vui lòng đăng nhập để xem giỏ hàng.');
    window.location.href = 'login.html'; // Chuyển về trang đăng nhập
    return; // Dừng chạy code
  }
  
  // --- 3. TẠO MODAL NHẬP THÔNG TIN (THEO YÊU CẦU MỚI) ---
  createUserInfoModal();
  
  // --- 4. "VẼ" GIỎ HÀNG VÀ LẤY CÁC NÚT BẤM ---
  renderCart();

  // Lấy các nút của Modal QR (cũ)
  const checkoutBtn = safeGet('checkout-btn');
  const qrModal = safeGet('qr-modal');
  const closeModalBtn = safeGet('close-modal-btn');
  const qrImg = safeGet('qr-image');
  const qrAmount = safeGet('qr-total-amount');
  const qrContentEl = safeGet('qr-content');
  const confirmPaymentBtn = safeGet('confirm-payment-btn');

  // Lấy các nút của Modal Thông Tin (mới)
  const userInfoModal = safeGet('user-info-modal');
  const closeUserInfoModalBtn = safeGet('close-user-info-modal');
  const confirmUserInfoBtn = safeGet('confirm-user-info-btn');
  const userNameInput = safeGet('user-info-name');
  const userPhoneInput = safeGet('user-info-phone');
  const userAddressInput = safeGet('user-info-address');


  // --- 5. GÁN SỰ KIỆN CHO NÚT "THANH TOÁN" (ĐÃ SỬA) ---
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      // 1. Kiểm tra giỏ hàng (giữ nguyên)
      const grandTotal = Cart.tinhTongTien();
      if (!grandTotal || grandTotal === 0) {
        alert('Giỏ hàng trống. Vui lòng thêm sản phẩm.');
        return;
      }

      // 2. MỞ MODAL NHẬP THÔNG TIN (LOGIC MỚI)
      // Điền thông tin cũ nếu có
      if (currentUser) {
        // 'username' lấy từ lúc đăng nhập, 'name' có thể chưa có
        userNameInput.value = currentUser.name || currentUser.username || ''; 
        userPhoneInput.value = currentUser.phone || '';
        userAddressInput.value = currentUser.address || '';
      }
      if (userInfoModal) userInfoModal.style.display = 'flex';
    });
  }
  
  // --- 6. GÁN SỰ KIỆN CHO NÚT "XÁC NHẬN THÔNG TIN" (MỚI) ---
// --- 6. GÁN SỰ KIỆN CHO NÚT "XÁC NHẬN THÔNG TIN" (ĐÃ SỬA) ---
  if (confirmUserInfoBtn) {
    confirmUserInfoBtn.addEventListener('click', () => {
        const name = userNameInput.value.trim();
        const phone = userPhoneInput.value.trim();
        const address = userAddressInput.value.trim();

        // 1. Kiểm tra rỗng
        if (!name || !phone || !address) {
            alert('Vui lòng điền đầy đủ Họ tên, SĐT và Địa chỉ.');
            return;
        }

        // 2. ⭐ KIỂM TRA SĐT HỢP LỆ (MỚI) ⭐
        if (!isVietnamesePhone(phone)) {
            alert('Số điện thoại không hợp lệ. SĐT phải bắt đầu bằng 0 và có đủ 10 chữ số.');
            return; // Dừng lại nếu SĐT sai
        }

        // 3. Lưu thông tin (nếu SĐT đã đúng)
        if (currentUser) {
            currentUser.name = name; 
            currentUser.phone = phone;
            currentUser.address = address;
            localStorage.setItem(LOGIN_STORAGE_KEY, JSON.stringify(currentUser));
        }

        // 4. Đóng modal thông tin
        if (userInfoModal) userInfoModal.style.display = 'none';

        // 5. MỞ MODAL QR (Logic cũ)
        const grandTotal = Cart.tinhTongTien();
        const orderContent = `DH${Date.now().toString().slice(-6)}`;
        const qrUrl = generateVietQR(grandTotal, orderContent);

        if (qrImg) qrImg.src = qrUrl;
        if (qrAmount) qrAmount.textContent = formatVND(grandTotal);
        if (qrContentEl) qrContentEl.textContent = orderContent;
        if (qrModal) qrModal.style.display = 'flex';
    });
  }

  // Gán sự kiện đóng cho modal thông tin (MỚI)
  if (closeUserInfoModalBtn && userInfoModal) {
    closeUserInfoModalBtn.addEventListener('click', () => { userInfoModal.style.display = 'none'; });
    userInfoModal.addEventListener('click', (e) => {
        if (e.target === userInfoModal) userInfoModal.style.display = 'none';
    });
  }

  // --- 7. LOGIC MODAL QR (GIỮ NGUYÊN) ---
  // Gán sự kiện cho Modal (Đóng)
  if (closeModalBtn && qrModal) {
    closeModalBtn.addEventListener('click', () => { qrModal.style.display = 'none'; });
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) qrModal.style.display = 'none';
    });
  }

  // Gán sự kiện cho Nút "Xác nhận thanh toán"
  if (confirmPaymentBtn) {
    confirmPaymentBtn.addEventListener('click', () => {
      alert('Cảm ơn bạn đã mua hàng! Đơn hàng đang được xử lý.');
      Cart.clear(); 
      if (qrModal) qrModal.style.display = 'none';
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

/* BỔ SUNG CÁC HÀM HELPER VỐN BỊ XÓA Ở TRÊN
  (Vì code bên dưới vẫn cần chúng)
*/
function formatVND(value) {
  const n = Number(value) || 0;
  return n.toLocaleString('vi-VN') + ' VNĐ';
}

function safeGet(id) {
  return document.getElementById(id);
}

/* [DÁN VÀO CUỐI FILE cart.js] */

function generateVietQR(amount, content) {
  const BANK_ID = '970418'; // Ví dụ: Techcombank
  const ACCOUNT_NO = '1234567890'; // Sửa STK của bạn
  const ACCOUNT_NAME = 'NGUYEN VAN A'; // Sửa tên chủ TK
  const TEMPLATE = 'compact';
  const qrApiUrl = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${amount}&addInfo=${encodeURIComponent(content)}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
  return qrApiUrl;
}

/**
 * ⭐ HÀM MỚI: Kiểm tra SĐT 10 số, bắt đầu bằng 0
 */
function isVietnamesePhone(phone) {
    const re = /^0\d{9}$/; // Regex: Bắt đầu bằng 0, theo sau là 9 chữ số
    return re.test(String(phone));
}