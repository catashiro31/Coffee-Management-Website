/* ==============================================
    BỘ NÃO CỦA GIỎ HÀNG (cart-logic.js) - V2 HOÀN CHỈNH
    (Đây là file "bộ não" duy nhất, V2)
   ============================================== */

const Cart = {
  // Key lưu giỏ hàng
  KEY: 'myCoffeeAppCart',

  /**
   * Lấy giỏ hàng từ LocalStorage
   */
  get: () => {
    try {
      return JSON.parse(localStorage.getItem(Cart.KEY) || '[]');
    } catch (e) {
      console.error("Lỗi khi lấy giỏ hàng:", e);
      return [];
    }
  },

  /**
   * Lưu giỏ hàng VÀ PHÁT TÍN HIỆU CẬP NHẬT
   */
  save: (cart) => {
    localStorage.setItem(Cart.KEY, JSON.stringify(cart));
    
    // *** DÒNG QUAN TRỌNG: "Báo" cho giao diện (cart.js) "vẽ" lại ***
    window.dispatchEvent(new Event('cartUpdated'));
    
    // Cập nhật icon trên header
    Cart.updateCartCount();
  },

  /**
   * Thêm sản phẩm (Đã sửa)
   */
  addItem: (item) => {
    const cart = Cart.get();
    
    // 1. Đồ custom (có lineItemId), luôn là duy nhất
    if (item.lineItemId) {
      cart.push(item);
    } 
    // 2. Đồ gộp (chỉ có id)
    else if (item.id) {
      const existingItem = cart.find(i => i.id === item.id && !i.lineItemId);
      
      if (existingItem) {
        // Nếu có, tăng số lượng
        existingItem.quantity = (existingItem.quantity || 0) + (item.quantity || 1);
      } else {
        // Nếu chưa, thêm mới
        cart.push(item);
      }
    }
    Cart.save(cart); // Lưu và phát tín hiệu
  },

  /**
   * Cập nhật số lượng (Cho nút +/-)
   */
  capNhatSoLuong: (identifier, newQuantity) => {
    const cart = Cart.get();
    const itemToUpdate = cart.find(i => (i.lineItemId === identifier) || (i.id === identifier && !i.lineItemId));
    
    if (itemToUpdate) {
      // Ràng buộc số lượng mới luôn >= 1
      newQuantity = Math.max(1, Number(newQuantity) || 1);
      itemToUpdate.quantity = newQuantity;
      Cart.save(cart);
    }
  },

  /**
   * Xóa một DÒNG sản phẩm
   */
  xoaItem: (identifier) => {
    let cart = Cart.get();
    const newCart = cart.filter(item => {
      const itemIdentifier = item.lineItemId || item.id;
      return itemIdentifier !== identifier;
    });
    Cart.save(newCart); // Lưu và phát tín hiệu
  },

  /**
   * Xóa sạch giỏ hàng.
   */
  clear: () => {
    Cart.save([]); // Lưu mảng rỗng và phát tín hiệu
  },

  /**
   * Tính tổng tiền.
   */
  tinhTongTien: () => {
    const cart = Cart.get();
    return cart.reduce((total, item) => {
      return total + ((item.price || 0) * (item.quantity || 0));
    }, 0);
  },

  /**
   * Cập nhật icon giỏ hàng trên header.
   */
  updateCartCount: () => {
    const cart = Cart.get();
    let totalItems = 0;
    cart.forEach(item => {
      totalItems += (item.quantity || 0);
    });

    const countElements = document.querySelectorAll('#cart-count');
    countElements.forEach(el => {
      if (totalItems > 0) {
        el.textContent = totalItems;
        el.style.display = 'flex';
      } else {
        el.textContent = '0';
        el.style.display = 'none';
      }
    });
  }
};

// Cập nhật số lượng giỏ hàng ngay khi file này được tải
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateCartCount();
});