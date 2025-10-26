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

    // Bắt đầu hiển thị quảng cáo mỗi 10 giây
    function startAdInterval() {
        showAd(); // Hiển thị lần đầu
        adInterval = setInterval(showAd, 10000); // Lặp lại mỗi 10 giây
    }

    // Dừng hiển thị quảng cáo
    function stopAdInterval() {
        clearInterval(adInterval);
    }

    // Đóng quảng cáo khi nhấp nút đóng
    closeAdButton.addEventListener('click', () => {
        closeAd();
        // Tạm dừng hiển thị quảng cáo trong 30 giây sau khi đóng
        stopAdInterval();
        setTimeout(startAdInterval, 30000);
    });

    // Đóng quảng cáo khi nhấp ra ngoài
    adOverlay.addEventListener('click', (e) => {
        if (e.target === adOverlay) {
            closeAd();
            stopAdInterval();
            setTimeout(startAdInterval, 30000);
        }
    });

    // Bắt đầu hiển thị quảng cáo
    startAdInterval();

    // Giới hạn số lần hiển thị (tùy chọn)
    let adDisplayCount = parseInt(localStorage.getItem('adDisplayCount') || '0');
    if (adDisplayCount < 3) { // Giới hạn tối đa 3 lần mỗi phiên
        localStorage.setItem('adDisplayCount', adDisplayCount + 1);
    } else {
        stopAdInterval(); // Dừng quảng cáo nếu đã hiển thị đủ 3 lần
    }
});


