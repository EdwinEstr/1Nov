const imagenNovia = document.getElementById('imagenNovia');
const mensaje = document.getElementById('mensaje');

imagenNovia.addEventListener('click', () => {
    mensaje.innerHTML = 'Eres la razón de mi felicidad.Me siento muy feliz de iniciar noviembre contigo mi vida . Te amo más de lo que las palabras pueden expresar, eres mi reyna.';
    mensaje.style.display = 'block';
});


const container = document.querySelector('.container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';

    const x = Math.random() * window.innerWidth;
    const duration = Math.random() * 2 + 2;
    heart.style.left = `${x}px`;
    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 500);
