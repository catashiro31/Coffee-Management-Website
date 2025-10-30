/* ==============================================
    BỘ NÃO CỦA GIỎ HÀNG (cart-logic.js)
    (File này xử lý việc Thêm, Xóa, Lấy, và Cập nhật số lượng)
   ============================================== */

const Cart = {
  /**
   * Khóa để lưu giỏ hàng trong LocalStorage
   */
  KEY: 'myCoffeeAppCart',

  /**
   * Lấy giỏ hàng từ LocalStorage về.
   * @returns {Array} - Mảng các sản phẩm trong giỏ hàng.
   */
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(Cart.KEY) || '[]');
    } catch (e) {
      console.error("Lỗi khi lấy giỏ hàng:", e);
      return []; // Trả về mảng rỗng nếu lỗi
    }
  },

  /**
   * Lưu giỏ hàng vào LocalStorage.
   * @param {Array} cart - Mảng giỏ hàng mới cần lưu.
   */
  save: (cart) => {
    localStorage.setItem(Cart.KEY, JSON.stringify(cart));
  },

  /**
   * Xóa sạch giỏ hàng.
   */
  clear: () => {
    Cart.save([]);
    Cart.updateCartCount(); // Cập nhật lại số trên header
  },

  /**
   * Thêm một sản phẩm vào giỏ hàng.
   * File này là quan trọng nhất!
   * @param {object} item - Sản phẩm cần thêm.
   */
  addItem: (item) => {
    const cart = Cart.get();
    let existingItem;

    // ----- LOGIC QUAN TRỌNG -----
    
    // 1. Nếu sản phẩm có "lineItemId" (VD: đồ uống custom), nó là duy nhất.
    //    Chỉ cần đẩy nó vào giỏ hàng.
    if (item.lineItemId) {
      cart.push(item);
    } 
    // 2. Nếu sản phẩm chỉ có "id" (VD: đồ ăn, có thể gộp)
    else if (item.id) {
      // Kiểm tra xem nó đã tồn tại trong giỏ hàng chưa (dựa trên 'id')
      existingItem = cart.find(i => i.id === item.id);
      
      if (existingItem) {
        // Nếu có, chỉ tăng số lượng
        existingItem.quantity += item.quantity;
      } else {
        // Nếu chưa, thêm mới vào giỏ
        cart.push(item);
      }
    }
    // ----------------------------

    Cart.save(cart); // Lưu lại giỏ hàng mới
  },

  /**
   * Cập nhật số lượng hiển thị trên icon giỏ hàng ở header.
   */
  updateCartCount: () => {
    const cart = Cart.get();
    let totalItems = 0;
    
    // Đếm tổng số lượng (mỗi bánh quy x2 sẽ được tính là 2)
    cart.forEach(item => {
      totalItems += item.quantity;
    });

    // Tìm TẤT CẢ các icon giỏ hàng (cho cả desktop và mobile)
    const countElements = document.querySelectorAll('#cart-count');
    
    countElements.forEach(el => {
      if (totalItems > 0) {
        el.textContent = totalItems;
        el.style.display = 'flex'; // Hiển thị vòng tròn
      } else {
        el.textContent = '0';
        el.style.display = 'none'; // Ẩn vòng tròn
      }
    });
  }
};

// Cập nhật số lượng giỏ hàng ngay khi file này được tải
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateCartCount();
});