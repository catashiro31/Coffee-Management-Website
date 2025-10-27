// LỖI 1: Xóa 'export'. 'export' gây ra SyntaxError khi tải script kiểu classic.
const products = [
  {
    id: 'baked-apple-croissant',
    name: 'Bánh sừng bò táo nướng',
    calories: 230,
    price: 45000,
    // LỖI 2: Đường dẫn ảnh '../' bị sai.
    // Sửa thành đường dẫn đúng. BẠN CẦN TỰ KIỂM TRA LẠI ĐƯỜNG DẪN NÀY.
    image: '../assets/images/MaiThiYenNhi_241230810/baked_apple_croissant.jpg',
    alt: 'Bánh sừng bò táo nướng',
  },
  {
    id: 'plain-croissant',
    name: 'Bánh sừng bò',
    price: 35000, // Thêm giá để kiểm tra
    image: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg',
    // alt sẽ được tự động lấy từ 'name'
  },
  {
    id: 'Avocado_Spread',
    name: 'Bơ nghiền Avocado Spread',
    calories: 360,
    price: 55000,
    // LỖI 2: Đường dẫn ảnh '../' bị sai.
    // Sửa thành đường dẫn đúng. BẠN CẦN TỰ KIỂM TRA LẠI ĐƯỜNG DẪN NÀY.
    image: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg',
    alt: 'Bánh sừng bò táo nướng',
  },
  {
    id: 'plain-croissant',
    name: 'Bánh sừng bò',
    price: 35000, // Thêm giá để kiểm tra
    image: '../assets/images/MaiThiYenNhi_241230810/plain_croissant.jpg',
    // alt sẽ được tự động lấy từ 'name'
  },
  {
    id: 'plain-croissant1',
    name: 'Bánh sừng bò 2',
    price: 35000, // Thêm giá để kiểm tra
    image: '../assets/images/MaiThiYenNhi_241230810/plain_croissant.jpg',
    // alt sẽ được tự động lấy từ 'name'
  }
  

];



// ======= Helpers (Giữ nguyên) =======
const qs = (sel, root = document) => root.querySelector(sel);
const formatVND = (n) => n?.toLocaleString('vi-VN');
const getParam = (key) => new URL(window.location.href).searchParams.get(key);

function pickProduct() {
  const pid = getParam('id');
  if (!pid) return products[0];
  return products.find((p) => p.id === pid) || products[0];
}

function createEl(tag, opts = {}) {
  const el = document.createElement(tag);
  const { cls, text, html, attrs } = opts;
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  if (html !== undefined) el.innerHTML = html;
  if (attrs) Object.entries(attrs).forEach(([k, v]) => v !== undefined && el.setAttribute(k, v));
  return el;
}

// HÀM MỚI (Tách ra từ Lỗi 3)
// Tính toán lại tổng tiền dựa trên sản phẩm đang hiển thị
function recalcCurrentProduct() {
  const product = pickProduct(); // Lấy đúng sản phẩm đang hiển thị
  if (typeof product.price !== 'number') return; // Không có giá thì thôi

  const qEl = qs('#quantity');
  if (!qEl) return;
  
  // Đảm bảo số lượng luôn >= 1
  const qty = Math.max(1, parseInt(qEl.value || '1', 10));
  qEl.value = qty; // Cập nhật lại input phòng khi người dùng gõ số âm

  // Cập nhật tổng tiền
  const totalEl = qs('#total');
  if (totalEl) totalEl.textContent = formatVND(qty * product.price);
}


function renderProduct(product) {
  const container = qs('#product-container');
  if (!container) return;
  container.innerHTML = ''; // Xóa nội dung cũ

  const wrapper = createEl('div', { cls: 'product' });

  // Ảnh (ẩn nếu thiếu)
  if (product.image) {
    const img = createEl('img', {
      attrs: {
        src: product.image,
        alt: product.alt || product.name || 'Sản phẩm',
        width: 300,
        height: 300,
      },
    });
    wrapper.appendChild(img);
  }

  const info = createEl('div', { cls: 'info' });

  // Tên sản phẩm
  if (product.name) {
    const nameLabel = createEl('label', { text: product.name });
    info.appendChild(nameLabel);
    const crumb = qs('#crumb-current');
    if (crumb) crumb.textContent = product.name;
  }

  // Calories tooltip
  if (typeof product.calories === 'number') {
    const p = createEl('p');
    const tip = createEl('span', { cls: 'tooltip', html: `${product.calories} calo<sup>i</sup>` });
    const tipText = createEl('span', {
      cls: 'tooltiptext',
      html:
        '✨ Thông tin dinh dưỡng dựa trên công thức tiêu chuẩn và không phản ánh các tuỳ chỉnh của bạn <span class="close-btn">×</span>',
    });
    tip.appendChild(tipText);
    p.appendChild(tip);
    info.appendChild(p);
  }

  // Giá + Số lượng + Tổng
  if (typeof product.price === 'number') {
    const priceP = createEl('p', {
      cls: 'price',
      html: `Giá: <span id="price">${formatVND(product.price)}</span> VNĐ`,
    });
    info.appendChild(priceP);

    const qtyWrap = createEl('div', { cls: 'quantity-control' });
    const btnDec = createEl('button', { attrs: { id: 'decrease', 'aria-label': 'Giảm số lượng' } });
    btnDec.innerHTML = '<i class="fa-solid fa-minus"></i>';
    const qtyInput = createEl('input', {
      attrs: { id: 'quantity', type: 'number', value: '1', min: '1', 'aria-label': 'Số lượng' },
    });
    const btnInc = createEl('button', { attrs: { id: 'increase', 'aria-label': 'Tăng số lượng' } });
    btnInc.innerHTML = '<i class="fa-solid fa-plus"></i>';
    qtyWrap.append(btnDec, qtyInput, btnInc);
    info.appendChild(qtyWrap);

    const totalP = createEl('p', {
      cls: 'total',
      // Hiển thị tổng tiền ban đầu (cho số lượng 1)
      html: `Tổng cộng: <span id="total">${formatVND(product.price)}</span> VNĐ`,
    });
    info.appendChild(totalP);

    const addBtn = createEl('button', { attrs: { id: 'addToCart' }, text: 'Thêm vào giỏ hàng' });
    info.appendChild(addBtn);

    // LỖI 3: Đã XÓA hàm recalc() và các addEventListener() khỏi đây.
    // Chúng sẽ được đưa ra hàm init() để chỉ chạy 1 lần.
  }

  wrapper.appendChild(info);
  container.appendChild(wrapper);
}

// ======= Khởi tạo =======
(function init() {
  // 1. Render sản phẩm ra HTML
  const product = pickProduct();
  renderProduct(product);

  // 2. Gắn các listener VÀO CONTAINER (chỉ 1 lần duy nhất)
  const container = qs('#product-container');
  if (!container) return;

  // LỖI 3 (SỬA): Gắn listener ở đây, bên ngoài renderProduct
  container.addEventListener('click', (e) => {
    
    // Xử lý tăng/giảm số lượng
    if (e.target.closest('#decrease')) {
      recalcCurrentProduct(); // Gọi hàm recalc toàn cục
    }
    if (e.target.closest('#increase')) {
      recalcCurrentProduct(); // Gọi hàm recalc toàn cục
    }
    
    // LỖI 4 (SỬA): Thêm listener cho nút "x" của tooltip
    if (e.target.classList.contains('close-btn')) {
      const tooltipText = e.target.closest('.tooltiptext');
      if (tooltipText) {
        tooltipText.classList.add('hidden'); // Dùng class 'hidden' từ HTML
        // Tự động hiện lại sau 2 giây để người dùng có thể xem lại
        setTimeout(() => { tooltipText.classList.remove('hidden'); }, 2000);
      }
    }
  });
  
  // LỖI 3 (SỬA): Gắn listener input
  container.addEventListener('input', (e) => {
    if (e.target.id === 'quantity') {
      recalcCurrentProduct();
    }
  });
  
})();
document.addEventListener("DOMContentLoaded", () => {
  const priceElement = document.getElementById("price");
  const quantityInput = document.getElementById("quantity");
  const totalElement = document.getElementById("total");
  const btnIncrease = document.getElementById("increase");
  const btnDecrease = document.getElementById("decrease");

  const price = parseInt(priceElement.textContent.replace(/\./g, ""));

  function updateTotal() {
    const quantity = Math.max(1, parseInt(quantityInput.value));
    const total = price * quantity;
    totalElement.textContent = total.toLocaleString("vi-VN");
  }

  btnIncrease.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotal();
  });

  btnDecrease.addEventListener("click", () => {
    quantityInput.value = Math.max(1, parseInt(quantityInput.value) - 1);
    updateTotal();
  });

  quantityInput.addEventListener("input", updateTotal);
  updateTotal();
});
