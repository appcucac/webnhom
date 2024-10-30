// Gửi lời chào khi trang tải xong
window.onload = function() {
    alert("Chào mừng bạn đến với hồ sơ cá nhân của Trần Phong!");
};

// Tự động cập nhật năm hiện tại
const currentYear = new Date().getFullYear();
const footer = document.querySelector('footer');
if (footer) {
    footer.innerHTML = `&copy; ${currentYear} Trần Phong`;
}