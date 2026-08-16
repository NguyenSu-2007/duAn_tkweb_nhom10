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

// 3. Click ra ngoài vùng đen nền (Overlay) để đóng Modal
if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// 4. Đóng modal khi nhấn phím ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// 5. Hàm tự động thêm 1 ô nhập điểm đến (+ Add destination)
function addDestinationField() {
  const container = document.getElementById('destination-container');
  if (container) {
    const newField = document.createElement('div');
    newField.className = 'relative border border-gray-200 rounded-xl p-2.5 focus-within:border-[#DF6951] transition mt-3';
    newField.innerHTML = `
      <label class="block text-[10px] text-gray-400 font-medium">Enter destination (country, region or city)</label>
      <div class="flex items-center justify-between mt-0.5">
        <input type="text" placeholder="Country, region or city" class="w-full text-sm font-medium text-[#181E4B] focus:outline-none bg-transparent">
        <svg class="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
      </div>
    `;
    container.appendChild(newField);
  }
}