const startBtn = document.getElementById('startBtn');
const question = document.getElementById('question');
const loveText = document.getElementById('loveText');
const mainTitle = document.getElementById('mainTitle');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');

startBtn.addEventListener('click', () => {
  startBtn.style.display = 'none';
  mainTitle.style.display = 'none';
  question.style.display = 'block';
});

yesBtn.addEventListener('click', () => {
  loveText.style.display = 'block';
  music.play().catch((e) => {
    console.log('Автовоспроизведение заблокировано:', e);
  });

  // Вызов фейерверка сердечек
  launchHeartFireworks();

  // Постоянное падение сердечек
  setInterval(createHeart, 300);
});

// Кнопка "Нет" убегает с анимацией
noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Обычные падающие сердечки
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Фейерверк сердечек (в разные стороны)
function launchHeartFireworks() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.width = '15px';
      heart.style.height = '15px';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.transform = `rotate(45deg) translate(-50%, -50%)`;
      heart.style.position = 'fixed';

      const angle = Math.random() * 2 * Math.PI;
      const distance = Math.random() * 300 + 100;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      heart.style.transition = 'transform 1s ease-out, opacity 1s';
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.style.transform = `translate(${x}px, ${y}px) rotate(720deg)`;
        heart.style.opacity = '0';
      }, 10);

      setTimeout(() => {
        heart.remove();
      }, 1500);
    }, i * 30);
    let noMoved = false;

noBtn.addEventListener('mouseover', () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // Установить позиционирование только один раз
  if (!noMoved) {
    noBtn.style.position = 'absolute';
    noMoved = true;
  }

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

  }

}