/*
============================================================
  PHẦN 1: DATASET (Tất cả sản phẩm)
============================================================
*/

// QUAN TRỌNG: Tên các key (ví dụ: 'Bakery') 
// phải TRÙNG KHỚP với giá trị `data-category` bạn đặt trong HTML
const allCategoryData = {
    
    // ------- ĐỒ ĂN --------
    'Bakery': { 
        pageTitle: 'Tiệm bánh',
        categoryName: 'Tiệm bánh',
        productType: 'food', // Link tới product_food.html
        categoryClass: 'food', 
        subCategories: [
            {
                title: 'Bánh sừng bò & Bánh Đan Mạch',
                items: [
                    { id: 'baked-apple-croissant', name: 'Bánh sừng bò táo nướng', img: '../assets/images/MaiThiYenNhi_241230810/baked_apple_croissant.jpg' },
                    { id: 'Ham_Swiss_Croissant', name: 'Bánh sừng bò thịt nguội & phô mai Thụy Sĩ', img: '../assets/images/MaiThiYenNhi_241230810/ham_swiss_croissant.jpg' },
                    { id: 'Butter_Croissant', name: 'Bánh sừng bò bơ', img: '../assets/images/MaiThiYenNhi_241230810/butter_croissant.jpg' },
                    { id: 'Chocolate_Croissant', name: 'Bánh sừng bò sô-cô-la', img: '../assets/images/MaiThiYenNhi_241230810/Chocolate_Croissant.jpg' }
                ]
            },
            {
                title: 'Bánh mì, Muffin & Bánh ngọt',
                items: [
                    { id: 'Pumpkin_Cream_Cheese_Muffin', name: 'Bánh muffin bí đỏ kem phô mai', img: '../assets/images/MaiThiYenNhi_241230810/pumpkin_cream_cheese_muffin.jpg' },
                    { id: 'Blueberry_Streusel_Muffin', name: 'Bánh muffin việt quất', img: '../assets/images/MaiThiYenNhi_241230810/blueberry_streusel_muffin.jpg' }
                ]
            },
             {
                title: 'Bánh vòng',
                items: [
                    { id: 'Plain_Bagel', name: 'Bánh vòng truyền thống', img: '../assets/images/MaiThiYenNhi_241230810/plain_bagel.jpg' },
                    { id: 'Everything_Bagel', name: 'Bánh vòng thập cẩm', img: '../assets/images/MaiThiYenNhi_241230810/Everything_Bagel.jpg' },
                    { id: 'Avocado_Spread', name: 'Sốt bơ nghiền', img: '../assets/images/MaiThiYenNhi_241230810/avocado_spread.jpg' }
                ]
            }
        ]
    },

    'Snacks': { 
        pageTitle: 'Đồ ăn vặt',
        categoryName: 'Đồ ăn vặt',
        productType: 'food',
        categoryClass: 'food',
        subCategories: [
            {
                title: 'Oishi',
                items: [
                    { id: 'Oishi_Corn_Snack', name: 'Bắp Oishi', img: '../assets/images/MaiThiYenNhi_241230810/oishi_bap.jpg' },
                    { id: 'Oishi_Crab_Snack', name: 'Snack cua Oishi', img: '../assets/images/MaiThiYenNhi_241230810/oishi_cua.jpg' },
                ]
            },
            {
                title: 'Lays',
                items: [
                    { id: 'LaysKhoaiTâyVịGàCayPhôMaiHànQuốc', name: 'Khoai tây Lays vị Gà cay phô mai Hàn Quốc', img: '../assets/images/MaiThiYenNhi_241230810/lays_ga_cay_pho_mai_han_quoc.jpg' },
                ]
            }
        ]
    },

    'Breakfast': {
        // ... (Thêm data cho Bữa sáng)
    },
    'Lunch': {
        // ... (Thêm data cho Bữa trưa)
    },
    'Treats': {
        // ... (Thêm data cho Món ngọt)
    },

    // ------- ĐỒ UỐNG --------
    'menucold': { 
        pageTitle: 'Cà phê lạnh',
        categoryName: 'Cà phê lạnh',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Cà phê Cold Brew',
                items: [
                    { id: 'cold-brew', name: 'Cà phê Cold Brew', img: '../assets/images/duong-241230692/Cold Brew.jpg' },
                    { id: 'Pumpkin Cream Cold Brew', name: 'Cold Brew kem bí đỏ', img: '../assets/images/duong-241230692/Pumpkin Cream Cold Brew.jpg' },
                ]
            },
            {
                title: 'Nitro Cold Brew',
                items: [
                    { id: 'Nitro Cold Brew', name: 'Nitro Cold Brew', img: '../assets/images/duong-241230692/Nitro Cold Brew.jpg' },
                ]
            }
        ]
    },
    'menuhot': {
        // ... (Thêm data cho Cà phê nóng)
        pageTitle: 'Cà phê nóng',
        categoryName: 'Cà phê nóng',
        productType: 'drink', 
        categoryClass: 'drinks', 
        subCategories: [
            {
                title: 'Cà Phê Pha',
                items: [
                    { id: 'Coffee Since 2025® Blonde Roast - Veranda Blend®', name: 'Coffee Since 2025® Blonde Roast - Veranda Blend®', img: '../assets/images/duong-241230692/Starbucks® Blonde Roast - Veranda Blend®.jpg' },
                    { id: 'Medium Roast - Pike Place® Roast', name: 'Medium Roast - Pike Place® Roast', img: '../assets/images/duong-241230692/Starbucks® Blonde Roast - Veranda Blend®.jpg' },
                ]
            },
            {
                title: 'Nitro Cold Brew',
                items: [
                    { id: 'Nitro Cold Brew', name: 'Nitro Cold Brew', img: '../assets/images/duong-241230692/Nitro Cold Brew.jpg' },
                ]
            }
        ]
    },
    // ... (Thêm data cho tất cả các mục khác)
};


/*
============================================================
  PHẦN 2: LOGIC TẢI SẢN PHẨM (Không cần sửa)
============================================================
*/

// Hàm này dùng để "vẽ" sản phẩm ra màn hình
function renderCategory(categoryKey) {
    const data = allCategoryData[categoryKey];

    // 1. Kiểm tra xem có data cho key này không
    if (!data) {
        console.warn(`Chưa có dữ liệu cho danh mục: ${categoryKey}`);
        document.getElementById('category-title').textContent = 'Sản phẩm đang được cập nhật';
        document.getElementById('breadcrumb-category-name').textContent = 'Chưa có';
        document.getElementById('dynamic-product-container').innerHTML = '<p>Nội dung cho mục này đang được chuẩn bị. Vui lòng quay lại sau.</p>';
        return;
    }

    // 2. Cập nhật Tiêu đề trang, Tiêu đề H2 và Breadcrumb
    document.title = data.pageTitle;
    document.getElementById('category-title').textContent = data.categoryName;
    document.getElementById('breadcrumb-category-name').textContent = data.categoryName;

    // 3. Lấy thẻ div container để chuẩn bị chèn HTML
    const container = document.getElementById('dynamic-product-container');
    container.innerHTML = ''; // XÓA SẠCH nội dung cũ

    // 4. Lặp qua từng danh mục con (subCategories) trong data
    data.subCategories.forEach(subCategory => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = `category ${data.categoryClass}`; 

        const titleH3 = document.createElement('h3');
        titleH3.textContent = subCategory.title;
        categoryDiv.appendChild(titleH3);

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'items-grid';

        // 5. Lặp qua từng sản phẩm (item) trong danh mục con
        subCategory.items.forEach(item => {
            const productPage = data.productType === 'food' ? 'product_food.html' : 'product_drinks.html';
            const itemLink = `${productPage}?id=${item.id}`;

            const itemHtml = `
                <a href="${itemLink}" class="item-link">
                    <div class="item">
                        <img src="${item.img}" alt="${item.name}">
                        <p>${item.name}</p>
                    </div>
                </a>
            `;
            itemsGrid.innerHTML += itemHtml;
        });

        categoryDiv.appendChild(itemsGrid);
        container.appendChild(categoryDiv);
    });
}

// Hàm này sẽ chạy khi trang được tải lần đầu
function initializeMenu() {
    const menuLinks = document.querySelectorAll('.menu-left .category-list a[data-category]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Ngăn trình duyệt tải trang mới

            const categoryKey = this.getAttribute('data-category');
            window.location.hash = categoryKey; // Cập nhật URL
            
            renderCategory(categoryKey);
        });
    });

    // Hàm kiểm tra URL khi tải trang
    function loadContentFromHash() {
        const hash = window.location.hash.substring(1);
        if (hash && allCategoryData[hash]) {
            renderCategory(hash);
        } else {
            // Mặc định: Hiển thị nội dung của trang menu.html
            // (Bạn có thể copy-paste nội dung trang menu.html vào đây nếu muốn)
            document.getElementById('category-title').textContent = 'Thực đơn';
            document.getElementById('breadcrumb-category-name').textContent = 'Tất cả';
            document.getElementById('dynamic-product-container').innerHTML = `
                <h2>Chào mừng bạn!</h2>
                <p>Hãy chọn một danh mục từ menu bên trái để khám phá sản phẩm.</p>
                `;
        }
    }

    loadContentFromHash(); // Tải nội dung khi vào trang
    window.addEventListener('hashchange', loadContentFromHash); // Tải khi hash thay đổi
}

// Chạy code khi toàn bộ HTML đã tải xong
document.addEventListener('DOMContentLoaded', initializeMenu);