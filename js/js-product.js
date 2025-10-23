// Lưu trữ trạng thái ban đầu của ảnh
const initialImages = {
    tall: '../picture/tall.png',
    grande: '../picture/grand.png',
    venti: '../picture/venti.png',
};

let selectedSize = null; // Theo dõi kích thước đang được chọn

function changeImage(button) {
    // Lấy phần tử cha (size-option)
    const selectedOption = button.parentElement;
    const img = selectedOption.querySelector('img');
    const initialImageSrc = initialImages[selectedOption.classList[1]]; // Lấy class (tall, grande, venti)
    const selectedImageSrc = selectedOption.getAttribute('data-selected-image');

    // Lấy tất cả các size-option
    const sizeOptions = document.querySelectorAll('.size-option');

    // Nếu đã chọn, khôi phục trạng thái ban đầu
    if (selectedOption.classList.contains('selected')) {
        selectedOption.classList.remove('selected');
        img.src = initialImageSrc;
        selectedSize = null; // Xóa trạng thái chọn
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
    }
}

let flavors = 1;
let shots = 1;

function increaseFlavors() {
    flavors++;
    document.getElementById('flavors-value').textContent = flavors;
}
function decreaseFlavors() {
    if (flavors > 0) {
        flavors--;
        document.getElementById('flavors-value').textContent = flavors;
    }
}

function increaseShots() {
    shots++;
    document.getElementById('shots-value').textContent = shots;
}

function decreaseShots() {
    if (shots > 0) {
        shots--;
        document.getElementById('shots-value').textContent = shots;
    }
}