/* ==============================================
    JS CHO TRANG GIỎ HÀNG (cart.html) (ĐÃ SỬA LỖI)
   ============================================== */

// Hàm tạo mã QR của VietQR
function generateVietQR(amount, content) {
  // --- THÔNG TIN THANH TOÁN CỦA BẠN ---
  // Thay thế bằng thông tin thật của cửa hàng bạn
  const BANK_ID = '970418'; // Ví dụ: Techcombank
  const ACCOUNT_NO = '1234567890'; // Ví dụ: Số tài khoản của BẠN
  const ACCOUNT_NAME = 'NGUYEN VAN A'; // Ví dụ: Tên chủ tài khoản
  // -------------------------------------

  const TEMPLATE = 'compact'; // Mẫu QR (compact hoặc print)
  
  // Tạo URL API
  const qrApiUrl = `https://img.vietqr.io/image/${BANK_ID}-${ACCOUNT_NO}-${TEMPLATE}.png?amount=${amount}&addInfo=${encodeURIComponent(content)}&accountName=${encodeURIComponent(ACCOUNT_NAME)}`;
  
  return qrApiUrl;
}

// Hàm render giỏ hàng khi tải trang
function renderCart() {
  const cart = Cart.get(); // Dùng hàm từ cart-logic.js
  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-summary-subtotal');
  const totalEl = document.getElementById('cart-summary-total');
  const checkoutBtn = document.getElementById('checkout-btn');

  container.innerHTML = ''; // Xóa sạch nội dung cũ
  let grandTotal = 0;

  if (cart.length === 0) {
    container.innerHTML = '<p>Giỏ hàng của bạn đang trống. Hãy thêm sản phẩm!</p>';
    subtotalEl.textContent = '0 VNĐ';
    totalEl.textContent = '0 VNĐ';
    checkoutBtn.disabled = true;
    return;
  }

  cart.forEach(item => {
    // Giá của dòng sản phẩm này (giá * số lượng)
    const itemTotal = item.price * item.quantity;
    grandTotal += itemTotal; // Cộng vào tổng đơn hàng

    // Lấy ID chính xác: ưu tiên lineItemId (cho đồ uống/đồ ăn), nếu không có thì dùng id
    const itemId = item.lineItemId || item.id;

    const itemEl = document.createElement('div');
    itemEl.className = 'cart-item';
    itemEl.setAttribute('data-id', itemId); 

    itemEl.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>${item.description}</p>
        <p>Giá: ${item.price.toLocaleString('vi-VN')} VNĐ</p>
      </div>
      <div class="cart-item-price">
        <p>${itemTotal.toLocaleString('vi-VN')} VNĐ</p>
        <button class="remove-btn" data-id="${itemId}">&times; Xóa</button>
      </div>
    `;
    container.appendChild(itemEl);
  });

  // Cập nhật tổng tiền
  subtotalEl.textContent = `${grandTotal.toLocaleString('vi-VN')} VNĐ`;
  totalEl.textContent = `${grandTotal.toLocaleString('vi-VN')} VNĐ`;
  checkoutBtn.disabled = false;
}

// Xử lý các sự kiện của trang
document.addEventListener('DOMContentLoaded', () => {
  renderCart(); // Render giỏ hàng ngay khi tải trang

  const container = document.getElementById('cart-items-container');
  const checkoutBtn = document.getElementById('checkout-btn');
  const modal = document.getElementById('qr-modal');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const qrImg = document.getElementById('qr-image');
  const qrAmount = document.getElementById('qr-total-amount');
  const qrContentEl = document.getElementById('qr-content');
  const confirmBtn = document.getElementById('confirm-payment-btn');

  // 1. Xử lý sự kiện XÓA SẢN PHẨM
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const lineId = e.target.dataset.id;
      if (confirm('Bạn có chắc muốn xóa sản phẩm này?')) {
        let cart = Cart.get();
        // Lọc ra sản phẩm có lineItemId (hoặc id) KHÁC với cái bị click
        cart = cart.filter(item => (item.lineItemId || item.id) !== lineId);
        Cart.save(cart); // Lưu giỏ hàng mới
        Cart.updateCartCount(); // Cập nhật số lượng trên header
        renderCart(); // Vẽ lại giỏ hàng
      }
    }
  });

  // 2. Xử lý sự kiện NHẤN NÚT THANH TOÁN
  checkoutBtn.addEventListener('click', () => {
    const cart = Cart.get();
    let grandTotal = 0;
    cart.forEach(item => {
      grandTotal += item.price * item.quantity;
    });

    // Tạo nội dung chuyển khoản (ví dụ: mã đơn hàng)
    const orderContent = `Thanh toan don hang ${Date.now()}`;

    // Tạo link QR
    const qrUrl = generateVietQR(grandTotal, orderContent);
    
    // Cập nhật thông tin trên Modal
    qrImg.src = qrUrl;
    qrAmount.textContent = `${grandTotal.toLocaleString('vi-VN')} VNĐ`;
    qrContentEl.textContent = orderContent;
    
    // Hiển thị Modal
    modal.style.display = 'flex';
  });

  // 3. Xử lý ĐÓNG MODAL
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  // Đóng khi click ra ngoài
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // 4. Xử lý khi người dùng "XÁC NHẬN ĐÃ THANH TOÁN"
  confirmBtn.addEventListener('click', () => {
    alert('Cảm ơn bạn đã mua hàng! Đơn hàng đang được xử lý.');
    Cart.clear(); // Xóa sạch giỏ hàng
    modal.style.display = 'none';
    renderCart(); // Render lại giỏ hàng (sẽ thấy trống)
  });
});

// ⭐ LỖI CÚ PHÁP: Đã xóa dấu '}' thừa ở đây.