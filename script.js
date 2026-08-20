const modal = document.getElementById('build-package-modal');

// 1. Hàm MỞ Modal
function openModal() {
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang khi mở modal
  }
}

// 2. Hàm ĐÓNG Modal
function closeModal() {
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Mở lại cuộn trang
  }
}

// 3. Đóng modal khi nhấn phím ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

