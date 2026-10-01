document.querySelectorAll('.image-container').forEach(container => {
  const img = container.querySelector('img');
  // Создаем элемент для знака минус, если еще не создан
  let sign = container.querySelector('.sign-minus');
  if (!sign) {
    sign = document.createElement('div');
    sign.className = 'sign-minus';
    sign.innerHTML = '-'; // Можно заменить на иконку или другой символ
    // Стили для отображения знака
    sign.style.position = 'absolute';
    sign.style.top = '-5px'; // подняли чуть выше
    sign.style.right = '10px'; // справа
    sign.style.background = 'rgba(0,0,0,0.5)';
    sign.style.color = 'white';
    sign.style.padding = '10px 15px'; // увеличиваем размер
    sign.style.borderRadius = '50%';
    sign.style.fontSize = '24px'; // больше текста
    sign.style.cursor = 'pointer';
    sign.style.display = 'none'; // по умолчанию скрыт
    container.appendChild(sign);
  }

  // Обновляем обработчик
  img.addEventListener('click', () => {
    if (img.style.transform === 'scale(2)') {
      img.style.transform = 'scale(1)';
      sign.style.display = 'none'; // скрываем знак
    } else {
      img.style.transform = 'scale(2)';
      sign.style.display = 'block'; // показываем знак
    }
  });

  // Обработчик для знака минус
  sign.addEventListener('click', () => {
    img.style.transform = 'scale(1)';
    sign.style.display = 'none';
  });
});


  document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-section a');
  const currentPage = window.location.pathname.split('/').pop(); // получаем имя файла

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});



