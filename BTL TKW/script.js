// Hàm thay đổi câu chào dựa trên giờ
function setGreeting() {
    const greetingElement = document.getElementById("greeting");
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greetingElement.innerText = "Chào buổi sáng!";
    } else if (currentHour < 18) {
        greetingElement.innerText = "Chào buổi chiều!";
    } else {
        greetingElement.innerText = "Chào buổi tối!";
    }
}

// Hàm hiển thị thông báo khi nhấp vào liên kết mạng xã hội
function showAlert(platform) {
    alert(`Bạn đang chuyển đến trang ${platform}!`);
}

// Gọi hàm setGreeting khi tải trang
window.onload = setGreeting;
