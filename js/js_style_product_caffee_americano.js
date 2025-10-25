// Lưu trữ trạng thái ban đầu của ảnh
const initialImages = {
    short: '../assets/images/duong-241230692/short.png',
    tall: '../assets/images/duong-241230692/tall.png',
    grande: '../assets/images/duong-241230692/grande.png',
    venti: '../assets/images/duong-241230692/venti.png',
};

const box1 = document.getElementById("option_1");
const box2 = document.getElementById("option_2");
const leg1 = document.getElementById("leg_1");
const leg2 = document.getElementById("leg_2");
const selecter = document.getElementById("selection");

let selectedSize = null; // Theo dõi kích thước đang được chọn
let selectedImageIndex = null; // Theo dõi index của ảnh được chọn
let cost = 0; // Giá hiện tại
const sizes = {
    short: 2,
    tall: 5,
    grande: 7,
    venti: 10
}; // Giá cơ bản cho các kích thước [short, tall, grande, venti]
let init_shots = 2;
let shots = 2;
let shotPrice = 1; // Giá mỗi shot, có thể điều chỉnh
let type_espresso = [0,1, 2, 4, 5, 6, 10];

function updatePrice() {
    // Tính giá: giá kích thước + (số shots * giá mỗi shot)
    if (selectedSize != null && selectedImageIndex != null) {
        cost = sizes[selectedImageIndex] + (shots * shotPrice) + type_espresso[selecter.selectedIndex];
    } else {
        cost = 0;
    }
    document.getElementById('price').textContent = cost.toFixed(2); // Hiển thị giá với 2 chữ số thập phân
}

function changeImage(button) {
    // Lấy phần tử cha (size-option)
    const selectedOption = button.parentElement;
    const img = selectedOption.querySelector('img');
    const initialImageSrc = initialImages[selectedOption.classList[1]]; // Lấy class (short, tall, grande, venti)
    const selectedImageSrc = selectedOption.getAttribute('data-selected-image');

    // Lấy tất cả các size-option
    const sizeOptions = document.querySelectorAll('.size-option');

    // Nếu đã chọn, khôi phục trạng thái ban đầu
    if (selectedOption.classList.contains('selected')) {
        selectedOption.classList.remove('selected');
        img.src = initialImageSrc;
        selectedSize = null; // Xóa trạng thái chọn
        selectedImageIndex = null; // Xóa index ảnh
    } else {
        // Xóa class 'selected' khỏi tất cả các option
        sizeOptions.forEach(option => {
            option.classList.remove('selected');
            const optionImg = option.querySelector('img');
            optionImg.src = initialImages[option.classList[1]]; // Khôi phục tất cả về ảnh ban đầu
        });
        
        // Thêm class 'selected' cho option được nhấp
        selectedOption.classList.add('selected');
        
        // Thay đổi ảnh
        img.src = selectedImageSrc;
        selectedSize = selectedOption.classList[1]; // Cập nhật kích thước được chọn
        selectedImageIndex = selectedOption.classList[1]; // Cập nhật index ảnh được chọn
    }

    // Cập nhật giá
    updatePrice();
}

function increaseShots() {
    shots++;
    document.getElementById('shots-value').textContent = shots;
    box1.style.border = "3px solid green";
    leg1.style.color = "green";
    updatePrice(); // Cập nhật giá khi số shots thay đổi
}

function decreaseShots() {
    if (shots > 1) {
        shots--;
        document.getElementById('shots-value').textContent = shots;
        box1.style.border = "3px solid green";
        leg1.style.color = "green";
        updatePrice(); // Cập nhật giá khi số shots thay đổi
    }
}

function changed() {
    box2.style.border = "3px solid green";
    leg2.style.color = "green";
    updatePrice(); // Cập nhật giá nếu cần (tùy thuộc vào logic của selecter)
}

function add_order() {
    if (selectedSize == null) {
        alert("Bạn chưa chọn Size!");
    } else {
        alert(`Bạn đã thêm sản phẩm thành công! \nKích thước: ${selectedSize.toUpperCase()}, Số shots: ${shots}\nGiá: ${cost.toFixed(2)}$`);
    }
}

function reset_val() {
    shots = init_shots;
    document.getElementById('shots-value').textContent = shots;
    selecter.selectedIndex = 2;
    box1.style.border = "3px solid #D4E9E2";
    box2.style.border = "3px solid #D4E9E2";
    leg1.style.color = "gray";
    leg2.style.color = "gray";
    
    // Đặt lại kích thước và ảnh
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
        option.classList.remove('selected');
        const optionImg = option.querySelector('img');
        optionImg.src = initialImages[option.classList[1]]; // Khôi phục ảnh ban đầu
    });
    selectedSize = null;
    selectedImageIndex = null;
    updatePrice(); // Cập nhật giá khi reset
}

// Menu toggle logic (giữ nguyên)
document.addEventListener('DOMContentLoaded', () => {
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
        if (focusables.length > 0) {
            focusables[0].focus();
        }
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

    // Khởi tạo giá ban đầu
    updatePrice();
});