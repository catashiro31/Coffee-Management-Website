// Carousel JavaScript
(function () {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel__item');
    const dotsContainer = document.querySelector('.carousel__dots');
    const prevBtn = document.querySelector('.carousel__btn--prev');
    const nextBtn = document.querySelector('.carousel__btn--next');
    let currentIndex = 0;

    // Create dots dynamically
    items.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel__dot');
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.setAttribute('role', 'tab');
        dot.dataset.index = index;
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel__dot');

    // Function to update carousel state
    function updateCarousel(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
            dot.setAttribute('aria-selected', i === index);
        });
        currentIndex = index;
    }

    // Event listeners for navigation buttons
    prevBtn.addEventListener('click', () => {
        const newIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel(newIndex);
    });

    nextBtn.addEventListener('click', () => {
        const newIndex = (currentIndex + 1) % items.length;
        updateCarousel(newIndex);
    });

    // Event listener for dots
    dots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index, 10);
            updateCarousel(index);
        });
    });

    // Optional: Auto-play carousel (uncomment to enable)
    setInterval(() => {
        const newIndex = (currentIndex + 1) % items.length;
        updateCarousel(newIndex);
    }, 10000); // Change slide every 5 seconds
})();


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
});

let adDisplayCount = 0;
document.addEventListener('DOMContentLoaded', () => {
    const adOverlay = document.getElementById('ad-overlay');
    const closeAdButton = document.getElementById('close-ad');
    let adInterval;

    // Hàm hiển thị quảng cáo
    function showAd() {
        // Chỉ hiển thị nếu quảng cáo đang ẩn
        if (!adOverlay.classList.contains('active')) {
            adOverlay.classList.add('active');
            // Tự động đóng sau 10 giây
            setTimeout(closeAd, 10000);
        }
    }

    // Hàm đóng quảng cáo
    function closeAd() {
        adOverlay.classList.remove('active');
    }

    // Bắt đầu hiển thị quảng cáo mỗi 100 giây
    function startAdInterval() {
        showAd(); // Hiển thị lần đầu
        adInterval = setInterval(showAd, 100000); // Lặp lại mỗi 100 giây
    }

    // Dừng hiển thị quảng cáo
    function stopAdInterval() {
        clearInterval(adInterval);
    }

    // Đóng quảng cáo khi nhấp nút đóng
    closeAdButton.addEventListener('click', () => {
        closeAd();
        // Tạm dừng hiển thị quảng cáo trong 300 giây sau khi đóng
        adDisplayCount+=1;
        stopAdInterval();
        setTimeout(startAdInterval, 300000);
    });

    // Đóng quảng cáo khi nhấp ra ngoài
    adOverlay.addEventListener('click', (e) => {
        if (e.target === adOverlay) {
            adDisplayCount+=1;
            closeAd();
            stopAdInterval();
            setTimeout(startAdInterval, 300000);
        }
    });

    // Bắt đầu hiển thị quảng cáo
    startAdInterval();

    // Giới hạn số lần hiển thị (tùy chọn)

    if (adDisplayCount < 3) { // Giới hạn tối đa 3 lần mỗi phiên
        localStorage.setItem('adDisplayCount', adDisplayCount + 1);
    } else {
        stopAdInterval(); // Dừng quảng cáo nếu đã hiển thị đủ 3 lần
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const addrOverlay = document.getElementById('addr-overlay');
    const openButton = document.getElementById('deliver_button');
    const closeButton = document.querySelector('.close-delivery');
    const confirmButton = document.querySelector('.confirm');
    const addressInput = document.querySelector('.input input');
    const addrDisplay = document.getElementById('addr'); // Phần tử để hiển thị địa chỉ

    // Hàm hiển thị popup
    function showPopup() {
        if (!addrOverlay.classList.contains('active')) {
            addrOverlay.classList.add('active');
            addrOverlay.dataset.autoCloseTimer = autoCloseTimer;
        }
    }

    // Hàm đóng popup
    function closePopup() {
        addrOverlay.classList.remove('active');
        clearTimeout(addrOverlay.dataset.autoCloseTimer);
        delete addrOverlay.dataset.autoCloseTimer;
    }

    // Kích hoạt popup khi nhấp vào nút "Giao hàng"
    openButton.addEventListener('click', showPopup);

    // Đóng popup khi nhấp nút đóng
    closeButton.addEventListener('click', closePopup);

    // Xử lý nút xác nhận và hiển thị địa chỉ
    confirmButton.addEventListener('click', () => {
        const address = addressInput.value.trim();
        if (address) {
            addrDisplay.textContent = address; // Cập nhật địa chỉ nếu không rỗng
            localStorage.setItem('savedAddress', address); // Lưu địa chỉ
        } else {
            addrDisplay.textContent = "Chưa xác định"; // Hiển thị nếu trống
            localStorage.removeItem('savedAddress'); // Xóa địa chỉ lưu nếu trống
        }
        closePopup();
    });

    // Lưu và khôi phục địa liệu từ localStorage
    const savedAddress = localStorage.getItem('savedAddress') || '';
    addrDisplay.textContent = savedAddress || "Chưa xác định"; // Hiển thị "Chưa xác định" nếu không có địa chỉ
    addressInput.value = savedAddress;

    addressInput.addEventListener('change', (e) => {
        localStorage.setItem('savedAddress', e.target.value);
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const subNav = document.querySelector('.sub-nav');
    const fastOrderOverlay = document.getElementById('fast-order-overlay');
    const closeButton = document.querySelector('.close_fast_order');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Hàm hiển thị popup
    function showPopup() {
        if (!fastOrderOverlay.classList.contains('active')) {
            fastOrderOverlay.classList.add('active');
            fastOrderOverlay.dataset.autoCloseTimer = autoCloseTimer;
        }
    }

    // Hàm đóng popup
    function closePopup() {
        fastOrderOverlay.classList.remove('active');
        clearTimeout(fastOrderOverlay.dataset.autoCloseTimer);
        delete fastOrderOverlay.dataset.autoCloseTimer;
    }

    // Kích hoạt popup khi nhấp vào sub-nav
    subNav.addEventListener('click', showPopup);

    // Đóng popup khi nhấp nút đóng
    closeButton.addEventListener('click', closePopup);

    // Xử lý nút thêm vào giỏ (chỉ hiển thị thông báo đơn giản)
    
});

let sl_espresso = 0, sl_latte = 0, sl_cappuccino = 0, sl_mocha = 0, sl_americano = 0;
const espresso = document.getElementById("espresso");
const latte = document.getElementById("latte");
const cappuccino = document.getElementById("cappuccino");
const mocha = document.getElementById("mocha");
const americano = document.getElementById("americano"); // Thêm khai báo
const pay = document.getElementById("pay");

let price = 0;
function update_ordered() {
    // Cập nhật hiển thị dựa trên số lượng
    espresso.style.display = sl_espresso > 0 ? "flex" : "none";
    latte.style.display = sl_latte > 0 ? "flex" : "none";
    cappuccino.style.display = sl_cappuccino > 0 ? "flex" : "none";
    mocha.style.display = sl_mocha > 0 ? "flex" : "none";
    americano.style.display = sl_americano > 0 ? "flex" : "none";

    document.getElementById("espresso-value").textContent = sl_espresso;
    document.getElementById("latte-value").textContent = sl_latte;
    document.getElementById("cappuccino-value").textContent = sl_cappuccino;
    document.getElementById("mocha-value").textContent = sl_mocha;
    document.getElementById("americano-value").textContent = sl_americano;

    price = sl_espresso * 75000 + sl_latte * 120000 + sl_cappuccino * 98000 + sl_mocha * 53000 + sl_americano * 64000;
    document.getElementById("price_ordered").textContent = price.toLocaleString('vi-VN');
    // Hiển thị nút "Pay now" nếu có ít nhất 1 sản phẩm
    pay.style.display = (sl_espresso + sl_latte + sl_cappuccino + sl_mocha + sl_americano) > 0 ? "inline-flex" : "none";
}

function reset_espresso() {
    sl_espresso = 0;
    update_ordered();
}

function reset_latte() {
    sl_latte = 0;
    update_ordered();
}

function reset_cappuccino() {
    sl_cappuccino = 0;
    update_ordered()
}

function reset_mocha() {
    sl_mocha = 0;
    update_ordered();
}

function reset_americano() {
    sl_americano = 0;
    update_ordered();
}

function add_espresso() {
    sl_espresso += 1;
    update_ordered();
}

function add_latte() {
    sl_latte += 1;
    update_ordered();
}

function add_cappuccino() {
    sl_cappuccino += 1;
    update_ordered()
}

function add_mocha() {
    sl_mocha += 1;
    update_ordered();
}

function add_americano() {
    sl_americano += 1;
    update_ordered();
}


// Popup QR
const qrOverlay = document.getElementById("qr-overlay");
const priceElement = document.getElementById("price");
const timeElement = document.getElementById("time");
const closeQrButton = document.querySelector(".close_qr");

function showQrPopup() {
    if (!qrOverlay.classList.contains('active')) {
        priceElement.textContent = price.toLocaleString('vi-VN');
        qrOverlay.classList.add('active');
        document.body.classList.add('fast-order-open');

        let timeLeft = 30;
        const timer = setInterval(() => {
            timeElement.textContent = timeLeft;
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(timer);
                closeQrPopup();
            }
        }, 1000);
        qrOverlay.dataset.timer = timer;
    }
}

function closeQrPopup() {
    qrOverlay.classList.remove('active');
    document.body.classList.remove('fast-order-open');
    clearInterval(qrOverlay.dataset.timer);
    delete qrOverlay.dataset.timer;
}

closeQrButton.addEventListener('click', closeQrPopup);