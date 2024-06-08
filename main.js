// 漢堡選單
$(".navbar-btn").click(function () {
  $(".navbar-btn").toggleClass("active");
  $(".material-symbols-outlined").toggleClass("close");
  $(".navbar-list").toggleClass("active");
});

// 在 DOM 內容完全加載後執行，並為作品列表中的每個項目添加點擊事件，以顯示詳細信息的模態窗口
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.works-list-item');
  const modal = document.getElementById('modal');
  const closeButton = document.getElementById('close-button');
  const itemDetails = document.getElementById('item-details');

  items.forEach(item => {
    item.addEventListener('click', function() {
      // 從被點擊的作品項目中獲取 data-id 屬性的值，用於查找對應的詳細內容
      const itemId = item.getAttribute('data-id');

      const detailsContent = document.getElementById(`details-${itemId}`).innerHTML;

      // 將詳細信息顯示在模態窗口中
      itemDetails.innerHTML = detailsContent;

      // 將模態窗口顯示在屏幕上
      modal.style.display = 'block';
    });
  });

  closeButton.addEventListener('click', function() {
    // 將模態窗口從屏幕上隱藏
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    // 允許用戶點擊窗口外部來關閉模態窗口
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});