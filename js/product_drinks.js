const products = [
    {
        id: 'caffe-mocha',
        name: 'Caffè Mocha',
        calories: 370,
        imageSrc: '../assets/images/duong-241230692/Caffè Mocha.jpg',
        // Định nghĩa CÁC TÙY CHỈNH (customizers) có sẵn cho sản phẩm này
        customizers: {
            sizes: true, // Hiển thị mục chọn size
            milk: true,
            roast: true,
            hot: true,
            topping: true,
            flavors: true,
            shots: true,
            espresso: true,
        }
    },
    {
        id: 'cold-brew',
        name: 'Cold Brew Coffee',
        calories: 5,
        imageSrc: '../assets/images/duong-241230692/cold-brew.jpg', // (Bạn cần có ảnh này)
        // Sản phẩm này CHỈ CÓ size, KHÔNG có các tùy chọn khác
        customizers: {
            sizes: true,
            milk: false, // Ẩn mục chọn sữa
            roast: false,
            hot: false,
            topping: false,
            flavors: true, // Hiển thị mục chọn flavors
            shots: true,
            espresso: false,
        }
    }
    // Thêm các sản phẩm khác vào đây...
];

/* ==============================================
   2. CÁC BIẾN VÀ HÀM HELPER
   ============================================== */

// Helpers để lấy URL param
const getParam = (key) => new URL(window.location.href).searchParams.get(key);

// Helpers để chọn sản phẩm
function pickProduct() {
  const pid = getParam('id') || 'caffe-mocha'; // Mặc định là 'caffe-mocha'
  return products.find((p) => p.id === pid) || products[0];
}

// Helper tạo phần tử (rất hữu ích)
function createEl(tag, options = {}) {
  const el = document.createElement(tag);
  if (options.cls) el.className = options.cls;
  if (options.id) el.id = options.id;
  if (options.text) el.textContent = options.text;
  if (options.html) el.innerHTML = options.html;
  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) {
      el.setAttribute(key, value);
    }
  }
  return el;
}

// --- DỮ LIỆU CỦA BẠN (GIỮ NGUYÊN) ---
const initialImages = {
    short: '../assets/images/duong-241230692/short.png',
    tall: '../assets/images/duong-241230692/tall.png',
    grande: '../assets/images/duong-241230692/grande.png',
    venti: '../assets/images/duong-241230692/venti.png',
};

// --- CÁC BIẾN TRẠNG THÁI CỦA BẠN (GIỮ NGUYÊN) ---
let selectedSize = null;
let selectedImageIndex = null;
let cost = 0;
const roast_select = ["Bọt", "Foam (Bọt sữa)", "Nhiều bọt", "Ít bọt", "Không bọt"];
const hot_select = ["Nóng", "Hấp nóng (Streamed Hot)", "Rất nóng", "Ấm"];
const milk_select = ["Sữa", "Sữa 2% béo", "Sữa hạnh nhân", "Sữa dừa", "Breve (Nửa sữa, nửa kem)", "Kem béo"];
const topping_select = ["Topping (Phủ)", "Kem tươi (Whipped Cream)", "Nhiều kem tươi", "Ít kem tươi", "Nhiều kem tươi"];
const espresso_select = ["Espresso", "Espresso rang sáng (Blonde)", "Espresso đặc trưng (Signature)", "Espresso 1/2 Decaf", "Espresso rang Decaf", "Espresso 1/3 Decaf", "Espresso 2/3 Decaf"];
const sizes = { short: 40000, tall: 45000, grande: 50000, venti: 55000 };
let type_milk = [0, 0, 5000, 5000, 7000, 7000];
let type_hot = [0, 0, 0, 0];
let type_roast = [0, 0, 3000, 3000, 0];
let type_topping = [0, 5000, 7000, 3000, 7000];
let type_espresso = [0, 5000, 0, 3000, 3000, 3000, 3000];
let cost_shot = 5000;
let cost_flavor = 3000;
let shots = 0;
let flavors = 0;

// --- BIẾN DOM (SẼ ĐƯỢC GÁN TRONG DOMCONTENTLOADED) ---
// Chúng ta khai báo chúng ở đây để các hàm global có thể "thấy"
let box1, box2, box3, box4, box5, box6, box7;
let leg1, leg2, leg3, leg4, leg5, leg6, leg7;
let select1, select2, select3, select4, select7;


/* ==============================================
   3. HÀM RENDER (PHẦN MỚI)
   ============================================== */

// Hàm render thông tin sản phẩm CƠ BẢN (Ảnh, Tên, Calo)
function renderProduct(product) {
    const container = document.getElementById('product-section');
    if (!container) return;

    container.innerHTML = ''; // Xóa nội dung cũ

    // 1. Render Ảnh
    if (product.imageSrc) {
        const img = createEl('img', {
            attrs: {
                src: product.imageSrc,
                alt: product.name,
                width: "400px",
                height: "300px"
            }
        });
        container.appendChild(img);
    }

    // 2. Render Thông tin
    const infoDiv = createEl('div', { cls: 'info' });
    if (product.name) {
        infoDiv.appendChild(createEl('label', { text: product.name }));
    }
    if (product.calories) {
        infoDiv.appendChild(createEl('p', { text: `${product.calories} calories` }));
    }
    container.appendChild(infoDiv);
}

// Hàm render CÁC TÙY CHỌN (Phần phức tạp)
function renderCustomizer(customizers) {
    const container = document.getElementById('custom-section');
    if (!container) return;

    container.innerHTML = ''; // Xóa sạch

    // Tạo cột trái và phải
    const left = createEl('div', { cls: 'left' });
    const right = createEl('div', { cls: 'right' });
    right.appendChild(createEl('h3', { text: 'Bao gồm những gì ?' }));

    // --- 1. Render Cột Trái (Sizes) ---
    if (customizers.sizes) {
        left.appendChild(createEl('h3', { text: 'Lựa chọn kích thước' }));
        const sizeContainer = createEl('div', { cls: 'select-size' });
        
        // Helper để tạo 1 nút size
        const createSizeOption = (size, name, oz) => {
            const wrapper = createEl('div', { 
                cls: `size-option ${size}`, 
                attrs: { 'data-selected-image': `../assets/images/duong-241230692/venti.png` } // Giả sử bạn có ảnh _selected
            });
            const btn = createEl('button', { attrs: { onclick: 'changeImage(this)' } });
            btn.appendChild(createEl('img', { attrs: { src: initialImages[size], alt: size } }));
            wrapper.appendChild(btn);
            wrapper.appendChild(createEl('h4', { text: name }));
            wrapper.appendChild(createEl('p', { text: `${oz} fl oz` }));
            return wrapper;
        };
        
        sizeContainer.appendChild(createSizeOption('short', 'Nhỏ', 8));
        sizeContainer.appendChild(createSizeOption('tall', 'Vừa', 12));
        sizeContainer.appendChild(createSizeOption('grande', 'Lớn', 16));
        sizeContainer.appendChild(createSizeOption('venti', 'Rất lớn', 24));
        left.appendChild(sizeContainer);

        // Render khu vực giá
        const priceDiv = createEl('div', { cls: 'price' });
       // Sửa "Price" -> "Giá", "0.00" -> "0", "$" -> "VND"
        priceDiv.innerHTML = `<p style="font-weight: bold;">Giá: <span style="font-size: 32px; font-weight: bold; color: red;" id="price">0</span> VND<p>`;
        left.appendChild(priceDiv);
    }
    
    // --- 2. Render Cột Phải (Dropdowns & Counters) ---
    
    // Helper tạo Dropdown (select)
    const createDropdown = (id, legend, options) => {
        const fieldset = createEl('fieldset', { id: `box${id}` });
        fieldset.appendChild(createEl('legend', { html: `<span class="legend-left" id="leg${id}">${legend}</span>` }));
        const select = createEl('select', { 
            id: `select${id}`, 
            attrs: { name: `select${id}`, onclick: `changed${id}()` } 
        });
        
        options.forEach((opt, index) => {
            const optionEl = createEl('option', { value: index, text: opt });
            if (index === 1) optionEl.selected = true; // Mặc định chọn cái thứ 2
            if (index === 0) optionEl.disabled = true; // Vô hiệu hóa cái đầu tiên
            select.appendChild(optionEl);
        });
        
        fieldset.appendChild(select);
        return createEl('div', { cls: 'option', html: fieldset.outerHTML });
    };

    // Helper tạo Counter (tăng/giảm)
    const createCounter = (id, legend, value, decFunc, incFunc) => {
        const fieldset = createEl('fieldset', { id: `box${id}` });
        fieldset.innerHTML = `
            <legend><span class="legend-left" id="leg${id}">${legend}</span></legend>
            <div class="options">
                <label>${legend}</label>
                <div class="in-de">
                    <button onclick="${decFunc}()">
                        <i class="fa-regular fa-circle-down fa-xl" style="color: #008000;"></i>
                    </button>
                    <p id="${value}-value">${legend === 'Flavors' ? flavors : shots}</p>
                    <button onclick="${incFunc}()">
                        <i class="fa-regular fa-circle-up fa-xl" style="color: #008000;"></i>
                    </button>
                </div>
            </div>`;
        return createEl('div', { cls: 'option', html: fieldset.outerHTML });
    };
    
    // Dùng data để render
    if (customizers.milk) {
        right.appendChild(createDropdown('1', 'Sữa', milk_select));
    }
    if (customizers.roast) {
        right.appendChild(createDropdown('2', 'Bọt', roast_select));
    }
    if (customizers.hot) {
        right.appendChild(createDropdown('3', 'Nhiệt độ', hot_select));
    }
    if (customizers.topping) {
        right.appendChild(createDropdown('4', 'Toppings', topping_select));
    }
    if (customizers.flavors) {
        right.appendChild(createCounter('5', 'Flavors', 'flavors', 'decreaseFlavors', 'increaseFlavors'));
    }
    if (customizers.shots) {
        right.appendChild(createCounter('6', 'Shots', 'shots', 'decreaseShots', 'increaseShots'));
    }
    if (customizers.espresso) {
        right.appendChild(createDropdown('7', 'Tùy chọn Espresso', espresso_select));
    }

    // Nút Add/Reset (chỉ hiển thị nếu có CỘT PHẢI)
    if (right.children.length > 1) { // >1 vì đã có <h3>
        const buttonsDiv = createEl('div', { cls: 'cus-res' });
        buttonsDiv.innerHTML = `
            <button class="cus" onclick="add_order()"><i class="fa-solid fa-wand-magic-sparkles" style="color: #FFD43B;"></i> Add an order</button>
            <button class="res" onclick="reset_val()"><i class="fa-solid fa-rotate-right" style="color: #FFD43B;"></i> Reset to standard recipe</button>
        `;
        right.appendChild(buttonsDiv);
    }

    // Gắn cột vào container chính
    if (left.children.length > 0) container.appendChild(left);
    if (right.children.length > 1) container.appendChild(right); // >1 vì đã có <h3>
}


/* ==============================================
   4. CODE CỦA BẠN (ĐÃ SỬA ĐỔI ĐỂ CHỐNG LỖI)
   ============================================== */

// Các hàm của bạn giờ phải KIỂM TRA xem phần tử có tồn tại không
function updatePrice() {
    if (selectedSize != null && selectedImageIndex != null) {
        cost = sizes[selectedImageIndex];
        // Chỉ cộng nếu select tồn tại
        if (select1) cost += type_milk[select1.selectedIndex];
        if (select2) cost += type_roast[select2.selectedIndex];
        if (select3) cost += type_hot[select3.selectedIndex];
        if (select4) cost += type_topping[select4.selectedIndex];
        if (select7) cost += type_espresso[select7.selectedIndex];
        cost += cost_shot * shots + cost_flavor * flavors;
    } else {
        cost = 0;
    }
    
    const priceEl = document.getElementById('price');
    if (priceEl) { // Phải kiểm tra xem #price có tồn tại không
        priceEl.textContent = Math.round(cost).toLocaleString('vi-VN');
    }
}

// Hàm này được gọi bằng onclick, nên nó phải ở global scope
function changeImage(button) {
    const selectedOption = button.parentElement;
    const img = selectedOption.querySelector('img');
    const initialImageSrc = initialImages[selectedOption.classList[1]];
    const selectedImageSrc = selectedOption.getAttribute('data-selected-image');
    const sizeOptions = document.querySelectorAll('.size-option');

    if (selectedOption.classList.contains('selected')) {
        selectedOption.classList.remove('selected');
        img.src = initialImageSrc;
        selectedSize = null;
        selectedImageIndex = null;
    } else {
        sizeOptions.forEach(option => {
            option.classList.remove('selected');
            const optionImg = option.querySelector('img');
            optionImg.src = initialImages[option.classList[1]];
        });
        selectedOption.classList.add('selected');
        img.src = selectedImageSrc;
        selectedSize = selectedOption.classList[1];
        selectedImageIndex = selectedOption.classList[1];
    }
    updatePrice();
}

// Các hàm changedX phải kiểm tra null
function changed1() {
    if (box1) box1.style.border = "3px solid green";
    if (leg1) leg1.style.color = "green";
    updatePrice();
}
function changed2() {
    if (box2) box2.style.border = "3px solid green";
    if (leg2) leg2.style.color = "green";
    updatePrice();
}
function changed3() {
    if (box3) box3.style.border = "3px solid green";
    if (leg3) leg3.style.color = "green";
    updatePrice();
}
function changed4() {
    if (box4) box4.style.border = "3px solid green";
    if (leg4) leg4.style.color = "green";
    updatePrice();
}
function changed7() {
    if (box7) box7.style.border = "3px solid green";
    if (leg7) leg7.style.color = "green";
    updatePrice();
}

function add_order() {
    if (selectedSize == null) {
        alert("Bạn chưa chọn Size!");
    } else {
        // Xây dựng thông báo một cách an toàn
        let message = `Bạn đã thêm sản phẩm thành công! \nKích thước: ${selectedSize.toUpperCase()}`;
        if (select1) message += `, Sữa: ${milk_select[select1.selectedIndex]}`;
        if (select2) message += `\nBọt: ${roast_select[select2.selectedIndex]}`;
        if (select3) message += `, Nhiệt độ: ${hot_select[select3.selectedIndex]}`;
        if (select4) message += `\nToppings: ${topping_select[select4.selectedIndex]}`;
        if (document.getElementById('flavors-value')) message += `, Flavors: ${flavors}`;
        if (document.getElementById('shots-value')) message += `, Shots: ${shots}`;
        if (select7) message += `\nEspresso: ${espresso_select[select7.selectedIndex]}`;
        message += `\nGiá: ${cost.toFixed(2)}$`;
        
        alert(message);
    }
}

function reset_val() {
    // Reset selects
    if (select1) select1.selectedIndex = 1;
    if (select2) select2.selectedIndex = 1;
    if (select3) select3.selectedIndex = 1;
    if (select4) select4.selectedIndex = 3;
    if (select7) select7.selectedIndex = 3;

    // Reset styles
    const boxes = [box1, box2, box3, box4, box5, box6, box7];
    const legs = [leg1, leg2, leg3, leg4, leg5, leg6, leg7];
    boxes.forEach(box => { if (box) box.style.border = "3px solid #D4E9E2"; });
    legs.forEach(leg => { if (leg) leg.style.color = "gray"; });

    // Reset counters
    const shotsVal = document.getElementById('shots-value');
    const flavorsVal = document.getElementById('flavors-value');
    if (shotsVal) shotsVal.textContent = 2;
    if (flavorsVal) flavorsVal.textContent = 4;
    shots = 2;
    flavors = 4;
    const sizeOptions = document.querySelectorAll('.size-option');
    if (sizeOptions.length > 0) {
        sizeOptions.forEach(option => {
            option.classList.remove('selected');
            const optionImg = option.querySelector('img');
            optionImg.src = initialImages[option.classList[1]];
        });
        selectedSize = null;
        selectedImageIndex = null;
    }
    
    updatePrice();
}

// Các hàm tăng/giảm phải kiểm tra null
function increaseFlavors() {
    flavors++;
    const el = document.getElementById('flavors-value');
    if (el) el.textContent = flavors;
    if (box5) box5.style.border = "3px solid green";
    if (leg5) leg5.style.color = "green";
    updatePrice();
}
function decreaseFlavors() {
    if (flavors > 1) {
        flavors--;
        const el = document.getElementById('flavors-value');
        if (el) el.textContent = flavors;
        if (box5) box5.style.border = "3px solid green";
        if (leg5) leg5.style.color = "green";
        updatePrice();
    }
}
function increaseShots() {
    shots++;
    const el = document.getElementById('shots-value');
    if (el) el.textContent = shots;
    if (box6) box6.style.border = "3px solid green";
    if (leg6) leg6.style.color = "green";
    updatePrice();
}
function decreaseShots() {
    if (shots > 1) {
        shots--;
        const el = document.getElementById('shots-value');
        if (el) el.textContent = shots;
        if (box6) box6.style.border = "3px solid green";
        if (leg6) leg6.style.color = "green";
        updatePrice();
    }
}

/* ==============================================
   5. KHỞI TẠO TRANG (GOM TẤT CẢ LẠI)
   ============================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LẤY VÀ RENDER DATA SẢN PHẨM ---
    const product = pickProduct();
    renderProduct(product);
    renderCustomizer(product.customizers); // Truyền vào các tùy chọn

    // --- 2. GÁN CÁC BIẾN DOM CỦA BẠN (QUAN TRỌNG) ---
    // Bây giờ các phần tử đã tồn tại, ta mới gán biến
    box1 = document.getElementById("box1");
    box2 = document.getElementById("box2");
    box3 = document.getElementById("box3");
    box4 = document.getElementById("box4");
    box5 = document.getElementById("box5");
    box6 = document.getElementById("box6");
    box7 = document.getElementById("box7");
    leg1 = document.getElementById("leg1");
    leg2 = document.getElementById("leg2");
    leg3 = document.getElementById("leg3");
    leg4 = document.getElementById("leg4");
    leg5 = document.getElementById("leg5");
    leg6 = document.getElementById("leg6");
    leg7 = document.getElementById("leg7");
    select1 = document.getElementById("select1");
    select2 = document.getElementById("select2");
    select3 = document.getElementById("select3");
    select4 = document.getElementById("select4");
    select7 = document.getElementById("select7");
    
    // Khởi tạo giá trị cho counter (nếu tồn tại)
    const flavorsVal = document.getElementById('flavors-value');
    const shotsVal = document.getElementById('shots-value');
    if (flavorsVal) flavorsVal.textContent = flavors;
    if (shotsVal) shotsVal.textContent = shots;


    // --- 3. LOGIC MENU BURGER CỦA BẠN (GIỮ NGUYÊN) ---
    const burger = document.getElementById('burger');
    const overlay = document.getElementById('overlay');
    const drawer = overlay?.querySelector('.drawer');

    const getFocusable = () => {
        return drawer ? Array.from(drawer.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )) : [];
    };

    function openMenu() {
        if (!overlay) return;
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
        burger?.setAttribute('aria-expanded', 'true');
        document.body.classList.add('lock');
        const focusables = getFocusable();
        if (focusables.length > 0) focusables[0].focus();
    }

    function closeMenu() {
        if (!overlay) return;
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
        burger?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('lock');
        burger?.focus();
    }

    function toggleMenu() {
        const isOpen = overlay?.classList.contains('open') ?? false;
        isOpen ? closeMenu() : openMenu();
    }

    burger?.addEventListener('click', toggleMenu);
    overlay?.addEventListener('click', (e) => {
        if (e.target === overlay) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay?.classList.contains('open')) closeMenu();
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay?.classList.contains('open') || e.key !== 'Tab') return;
        const focusables = getFocusable();
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });

    const mql = window.matchMedia('(min-width: 960px)');
    const handleMediaQueryChange = (e) => {
        if (e.matches && overlay?.classList.contains('open')) closeMenu();
    };
    mql.addEventListener('change', handleMediaQueryChange);
    handleMediaQueryChange(mql);

    // --- 4. KHỞI TẠO GIÁ BAN ĐẦU ---
    // (Bây giờ nó sẽ chạy đúng)
    updatePrice();
});