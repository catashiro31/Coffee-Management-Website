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
    id: 'Avocado_Spread',
    name: 'Bơ nghiền',
    calories: 360,
    price: 55000,
    image: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg',
    alt: 'Bơ nghiền',
  },
  {
    id: 'Bacon_Gouda_Egg_Sandwich',
    name: 'Bánh sandwich trứng và thịt xông khói với phô mai Gouda',
    calories: 520,
    price: 32000,
    image: '../assets/images/MaiThiYenNhi_241230810/bacon_gruyere_egg_bites.jpg',
    alt: 'Bánh sandwich trứng và thịt xông khói với phô mai Gouda',
  },
  {
    id: 'Bacon_Gruyère_Egg_Bites',
    name: 'Bánh trứng nướng với thịt xông khói và phô mai Gruyère',
    calories: 456,
    price: 234000,
    image: '../assets/images/MaiThiYenNhi_241230810/bacon_gruyere_egg_bites.jpg',
    alt: 'Bánh trứng nướng với thịt xông khói và phô mai Gruyère',
  },
  {
    id: 'Bacon_Sausage_Egg_Wrap',
    name: 'Bánh cuộn thịt xông khói, xúc xích và trứng',
    calories: 136,
    price: 91400,
    image: '../assets/images/MaiThiYenNhi_241230810/bacon_sausage_egg_wrap.jpg',
    alt: 'Bánh cuộn thịt xông khói, xúc xích và trứng',
  },
  {
    id: 'Crispy_Grilled_Cheese_on_Sourdough',
    name: 'Bánh mì nướng kẹp phô mai giòn trên bánh mì chua',
    calories: 210,
    price: 92800,
    image: '../assets/images/MaiThiYenNhi_241230810/crisp_grilled_cheese_on_sourdough.jpg',
    alt: 'Bánh mì nướng kẹp phô mai giòn trên bánh mì chua',
  },
  {
    id: 'Double_Smoked_Bacon_Cheddar_Egg_Sandwich',
    name: 'Sandwich trứng với thịt xông khói hun khói kép và phô mai Cheddar',
    calories: 200,
    price: 92000,
    image: '../assets/images/MaiThiYenNhi_241230810/Bacon_Cheddar_Egg_Sandwich.jpg',
    alt: 'Sandwich trứng với thịt xông khói hun khói kép và phô mai Cheddar',
  },
  {
    id: 'Egg_White_Roasted_Red_Pepper_Egg_Bites',
    name: 'Bánh trứng lòng trắng với ớt đỏ nướng',
    calories: 367,
    price: 118700,
    image: '../assets/images/MaiThiYenNhi_241230810/egg_white_and-red_pepper_egg_bites_product.jpg',
    alt: 'Bánh trứng lòng trắng với ớt đỏ nướng',
  },
  {
    id: 'egg_pesto_mozzarella_sandwich',
    name: 'Sandwich trứng, sốt pesto và phô mai mozzarella',
    calories: 721,
    price: 25000,
    image: '../assets/images/MaiThiYenNhi_241230810/Egg-Pesto_Mozzarella_Sandwich.jpg',
    alt: 'Sandwich trứng, sốt pesto và phô mai mozzarella',
  },
  {
    id: 'Ham_Swiss_on_Baguette',
    name: 'Bánh mì baguette kẹp giăm bông và phô mai Thụy Sĩ',
    calories: 500,
    price: 93000,
    image: '../assets/images/MaiThiYenNhi_241230810/HamSwissOnBaguette.jpg',
    alt: 'Bánh mì baguette kẹp giăm bông và phô mai Thụy Sĩ',
  },
  {
    id: 'Ham_Swiss_Croissant',
    name: 'Bánh sừng bò kẹp giăm bông và phô mai Thụy Sĩ',
    calories: 230,
    price: 29000,
    image: '../assets/images/MaiThiYenNhi_241230810/ham_swiss_croissant.jpg',
    alt: 'Bánh sừng bò kẹp giăm bông và phô mai Thụy Sĩ',
  },
  {
    id: 'Impossible_Breakfast_Sandwich',
    name: 'Sandwich bữa sáng “Impossible” (thịt chay)',
    calories: 200,
    price: 92000,
    image: '../assets/images/MaiThiYenNhi_241230810/impossible_Breakfast_Sandwich.jpg',
    alt: 'Sandwich bữa sáng “Impossible” (thịt chay)',
  },
  {
    id: 'Jalapeno_Chicken_Pocket',
    name: 'Bánh túi gà và ớt jalapeño',
    calories: 240,
    price: 90000,
    image: '../assets/images/MaiThiYenNhi_241230810/jalapeno_chicken_pocket.jpg',
    alt: 'Bánh túi gà và ớt jalapeño',
  },
  {
    id: 'Banana_Walnut_Pecan_Loaf',
    name: 'Bánh chuối hạt óc chó và hồ đào',
    calories: 632,
    price: 100000,
    image: '../assets/images/MaiThiYenNhi_241230810/banana_walnut_pecan_loaf.jpg',
    alt: 'Bánh chuối hạt óc chó và hồ đào',
  },
  {
    id: 'Birthday_Cake_Pop',
    name: 'Bánh que vị sinh nhật (bánh kem viên)',
    calories: 200,
    price: 7000,
    image: '../assets/images/MaiThiYenNhi_241230810/birthday_cake_pop.jpg',
    alt: 'Bánh que vị sinh nhật (bánh kem viên)',
  },
  {
    id: 'Blueberry_Streusel_Muffin',
    name: 'Bánh muffin việt quất phủ vụn bánh ngọt',
    calories: 200,
    price: 20000,
    image: '../assets/images/MaiThiYenNhi_241230810/blueberry_streusel_muffin.jpg',
    alt: 'Bánh muffin việt quất phủ vụn bánh ngọt',
  },
  {
    id: 'Brownie',
    name: 'Bánh brownie sô-cô-la',
    calories: 540,
    price: 50000,
    image: '../assets/images/MaiThiYenNhi_241230810/brownie.jpg',
    alt: 'Bánh brownie sô-cô-la',
  },
  {
    id: 'Butter_Croissant',
    name: 'Bánh sừng bò bơ',
    calories: 500,
    price: 50000,
    image: '../assets/images/MaiThiYenNhi_241230810/butter_croissant.jpg',
    alt: 'Bánh sừng bò bơ',
  },
  {
    id: 'Chocolate_Cake_Pop',
    name: 'Bánh que sô-cô-la',
    calories: 420,
    price: 7200,
    image: '../assets/images/MaiThiYenNhi_241230810/chocolate_cake_pop.jpg',
    alt: 'Bánh que sô-cô-la',
  },
  {
    id: 'Chocolate_Croissant',
    name: 'Bánh sừng bò nhân sô-cô-la',
    calories: 300,
    price: 25000,
    image: '../assets/images/MaiThiYenNhi_241230810/Chocolate_Croissant.jpg',
    alt: 'Bánh sừng bò nhân sô-cô-la',
  },
  {
    id: 'Cookie',
    name: 'Bánh quy',
    calories: 300,
    price: 50000,
    image: '../assets/images/MaiThiYenNhi_241230810/cookie.jpg',
    alt: 'Bánh quy',
  },
  {
    id: 'Everything_Bagel',
    name: 'Bánh vòng “mọi vị” (với vừng, hành, tỏi, muối, hạt...)',
    calories: 200,
    price: 30000,
    image: '../assets/images/MaiThiYenNhi_241230810/ham_swiss_croissan.jpg',
    alt: 'Bánh vòng “mọi vị” (với vừng, hành, tỏi, muối, hạt...)',
  },
  {
    id: 'Cheese_Fruit_Protein_Box',
    name: 'Hộp phô mai, trái cây và protein',
    calories: 540,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/Cheese-Fruit_Protein_Box.jpg',
    alt: 'Hộp phô mai, trái cây và protein',
  },{
    id: 'Cheese_Trio_Protein_Box',
    name: 'Hộp ba loại phô mai và protein',
    calories: 440,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/cheese_trio_protein_box.jpg',
    alt: 'Hộp ba loại phô mai và protein',
  },
  {
    id: 'Ellenos_Muesli_Yogurt',
    name: 'Sữa chua Hy Lạp Ellenos với ngũ cốc muesli',
    calories: 300,
    price: 22000,
    image: '../assets/images/MaiThiYenNhi_241230810/EllenosMuesli.jpg',
    alt: 'Sữa chua Hy Lạp Ellenos với ngũ cốc muesli',
  },
  {
    id: 'Blonde_Espresso_Roast',
    name: 'Cà phê Blonde Espresso rang nhạt',
    calories: 200,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/blonde_espresso_roast.jpg',
    alt: 'Cà phê Blonde Espresso rang nhạt',
  },
  {
    id: 'Decaf_Italian_Roast',
    name: 'Cà phê Ý rang đậm không caffeine',
    calories: 170,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Decaf_Italian_Roast.jpg',
    alt: 'Cà phê Ý rang đậm không caffeine',
  },
  {
    id: 'Italian_Roast',
    name: 'Cà phê Ý rang đậm',
    calories: 200,
    price: 130000,
    image: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Italian_Roast.jpg',
    alt: 'Cà phê Ý rang đậm',
  },
  {
    id: 'Fabric_Shopping_Bag',
    name: 'Túi vải mua sắm',
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/fabric_shopping_bag.jpg',
    alt: 'Túi vải mua sắm',
  },
  {
    id: 'Green_Apron_Blend',
    name: 'Cà phê pha trộn “Green Apron”',
    calories: 130,
    price: 45000,
    image: '../assets/images/MaiThiYenNhi_241230810/Green_Apron_Blend.jpg',
    alt: 'Cà phê pha trộn “Green Apron”',
  },
  {
    id: 'Spinach_Feta_Egg_White_Wrap',
    name: 'Bánh cuộn trứng lòng trắng, rau chân vịt và phô mai Feta',
    calories: 340,
    price: 70000,
    image: '../assets/images/MaiThiYenNhi_241230810/spinach_feta_egg_white.jpg',
    alt: 'Bánh cuộn trứng lòng trắng, rau chân vịt và phô mai Feta',
  },
  {
    id: 'Tomato_Mozzarella_on_Focaccia',
    name: 'Bánh focaccia kẹp cà chua và phô mai mozzarella',
    calories: 540,
    price: 570000,
    image: '../assets/images/MaiThiYenNhi_241230810/tomato_mozzarella_on_focaccia.jpg',
    alt: 'Bánh focaccia kẹp cà chua và phô mai mozzarella',
  },
  {
    id: 'Turkey_Bacon_Cheddar_Egg_White_Sandwich',
    name: 'Sandwich gà tây, thịt xông khói, phô mai Cheddar và lòng trắng trứng',
    calories: 500,
    price: 87500,
    image: '../assets/images/MaiThiYenNhi_241230810/Turkey-Bacon-Cheddar-Egg-White-Sandwich.jpg',
    alt: 'Sandwich gà tây, thịt xông khói, phô mai Cheddar và lòng trắng trứng',
  },
  {
    id: 'Petite_Vanilla_Bean_Scone',
    name: 'Bánh scone vị đậu vani',
    calories: 350,
    price: 57000,
    image: '../assets/images/MaiThiYenNhi_241230810/petite_vanilla_bean_scone.jpg',
    alt: 'Bánh scone vị đậu vani',
  },
  {
    id: 'Plain_Bagel',
    name: 'Bánh vòng truyền thống',
    calories: 230,
    price: 2500,
    image: '../assets/images/MaiThiYenNhi_241230810/plain_bagel.jpg',
    alt: 'Bánh vòng truyền thống',
  },
  {
    id: 'Pumpkin_Cream_Cheese_Muffin',
    name: 'Bánh muffin bí đỏ nhân phô mai',
    calories: 310,
    price: 80000,
    image: '../assets/images/MaiThiYenNhi_241230810/pumpkin_cream_cheese_muffin.jpg',
    alt: 'Bánh muffin bí đỏ nhân phô mai',
  },
  {
    id: 'Pumpkin_Pepita_Loaf',
    name: 'Bánh bí đỏ với hạt bí nướng',
    calories: 340,
    price: 53500,
    image: '../assets/images/MaiThiYenNhi_241230810/pumpkin_pepita_loaf.jpg',
    alt: 'Bánh bí đỏ với hạt bí nướng',
  },
  {
    id: 'Racoon_Cake_Pop',
    name: 'Bánh que hình gấu trúc',
    calories: 110,
    price: 7200,
    image: '../assets/images/MaiThiYenNhi_241230810/racoon_cake_pop.jpg',
    alt: 'Bánh que hình gấu trúc',
  },
  {
    id: 'Rolled_Steel_Cut_Oatmeal',
    name: 'Cháo yến mạch cán mịn',
    calories: 360,
    price: 55000,
    image: '../assets/images/MaiThiYenNhi_241230810/oatmeal.jpg',
    alt: 'Cháo yến mạch cán mịn',
  },
  {
    id: 'Spicy_Falafel_Pocket',
    name: 'Bánh túi nhân falafel cay',
    calories: 360,
    price: 55000,
    image: '../assets/images/MaiThiYenNhi_241230810/spicy_falafel_pocket.jpg',
    alt: 'Bánh túi nhân falafel cay',
  },
  {
    id: 'Strawberries_Cream_Cake_Pop',
    name: 'Bánh que dâu kem',
    calories: 120,
    price: 7200,
    image: '../assets/images/MaiThiYenNhi_241230810/strawberries_cream_cake_pop.jpg',
    alt: 'Bánh que dâu kem',
  },
  {
    id: 'LaysKhoaiTâyVịGàCayPhôMaiHànQuốc',
    name: 'Khoai tây chiên Lay’s vị gà cay phô mai Hàn Quốc',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/lays_ga_cay_pho_mai_han_quoc.jpg',
    alt: 'Khoai tây chiên Lay’s vị gà cay phô mai Hàn Quốc',
  },
  {
    id: 'LaysKhoaiTâyVịNguyênBản',
    name: 'Khoai tây chiên Lay’s vị nguyên bản',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/lays_natural.jpg',
    alt: 'Khoai tây chiên Lay’s vị nguyên bản',
  },
  {
    id: 'lays_than_bo_nuong_texas',
    name: 'Khoai tây Lay’s vị thịt bò nướng Texas',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/lays_than_bo_nuong_texas.jpg',
    alt: 'Khoai tây Lay’s vị thịt bò nướng Texas',
  },
  {
    id: 'lays_tom_hum_trung_muoi_hoang_kim',
    name: 'Khoai tây Lay’s vị tôm hùm trứng muối hoàng kim',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/lays_tom_hum_trung_muoi_hoang_kim.jpg',
    alt: 'Khoai tây Lay’s vị tôm hùm trứng muối hoàng kim',
  },
  {
    id: 'Oishi_Corn_Snack',
    name: 'Snack ngô Oishi',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/oishi_bap.jpg',
    alt: 'Snack ngô Oishi',
  },
  {
    id: 'Oishi_Crab_Snack',
    name: 'Snack cua Oishi',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/oishi_cua.jpg',
    alt: 'Snack cua Oishi',
  },
  {
    id: 'Oishi_Hot_Shrimp_Snack',
    name: 'Snack tôm cay Oishi',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/oishi_tom_cay.jpg',
    alt: 'Snack tôm cay Oishi',
  },
  {
    id: 'Oishi_Octopus_Snack',
    name: 'Snack mực Oishi',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/oishi_muc.jpg',
    alt: 'Snack mực Oishi',
  },
  {
    id: 'Oishi_Onion_Snack',
    name: 'Snack hành Oishi',
    calories: 300,
    price: 10000,
    image: '../assets/images/MaiThiYenNhi_241230810/oishi_hanh.jpg',
    alt: 'Snack hành Oishi',
  },
  {
    id: 'Pike_Place®_Roast',
    name: 'Cà phê Pike Place rang vừa',
    calories: 570,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Pike_PLace_Roast.jpg',
    alt: 'Cà phê Pike Place rang vừa',
  },
  {
    id: 'Sunsera_Blend',
    name: 'Cà phê pha trộn Sunsera',
    calories: 300,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/Sunsera_Blend.jpg',
    alt: 'Cà phê pha trộn Sunsera',
  },
  {
    id: 'Papper_Shopping_Bag',
    name: 'Túi giấy mua sắm',
    price: 5000,
    image: '../assets/images/MaiThiYenNhi_241230810/papper_bag.jpg',
    alt: 'Túi giấy mua sắm',
  },
  {
    id: 'Sweetened_Iced_Coffee',
    name: 'Cà phê đá ngọt',
    calories: 560,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Sweetened_Iced_Coffee.jpg',
    alt: 'Cà phê đá ngọt',
  },
  {
    id: 'Veranda_Blend®',
    name: 'Cà phê Veranda rang nhẹ',
    calories: 390,
    price: 110000,
    image: '../assets/images/MaiThiYenNhi_241230810/Via_Instant_Blonde_Veranda_Blend.jpg',
    alt: 'Cà phê Veranda rang nhẹ',
  },
  {
    id: 'Sausage_Cheddar_Egg_Sandwich',
    name: 'Bánh sandwich kẹp xúc xích, phô mai Cheddar và trứng',
    calories: 360,
    price: 30000,
    image: '../assets/images/MaiThiYenNhi_241230810/Sausage-Cheddar-Egg-Sandwich.jpg',
    alt: 'Bánh sandwich kẹp xúc xích, phô mai Cheddar và trứng',
  },
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
