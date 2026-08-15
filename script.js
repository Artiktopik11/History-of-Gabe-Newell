document.addEventListener('DOMContentLoaded', () => {
  const introScreen = document.getElementById('intro-screen');
  const siteContent = document.getElementById('site-content');
  const startBtn = document.querySelector('.start-btn');
  const animBoxes = document.querySelectorAll('.anim-box');

  // Время показа каждой анимации (в мс)
  const durationPerAnim = 2500;

  // Показываем первую анимацию
  function showAnim(index) {
    if (index >= animBoxes.length) {
      // Все анимации прошли — показываем кнопку
      startBtn.style.display = 'block';
      return;
    }

    const box = animBoxes[index];
    box.classList.add('visible');

    setTimeout(() => {
      // Скрываем текущую, чтобы освободить место (опционально)
      // box.style.opacity = '0';
      // box.style.transform = 'translateY(30px)';

      // Показываем следующую
      showAnim(index + 1);
    }, durationPerAnim);
  }

  // Запускаем первую анимацию
  showAnim(0);

  // При нажатии на кнопку — убираем заставку
  startBtn.addEventListener('click', () => {
    introScreen.style.display = 'none';
    siteContent.style.display = 'block';
    document.body.style.overflow = 'auto';
  });
});
