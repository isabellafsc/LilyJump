const cat = document.querySelector('.cat');
const bucket = document.querySelector('.bucket');

const jump = () => {
  cat.classList.add('jump');

  setTimeout( () => {
    cat.classList.remove('jump');
  }, 800)
}

const loop = setInterval(() => {

  const bucketPosition = bucket.offsetLeft;
  const catPosition = +window.getComputedStyle(cat).bottom.replace('px', '');

  console.log(catPosition)

  if (bucketPosition <= 85 && bucketPosition > 0 && catPosition < 70) {

    bucket.style.animation = 'none';
    bucket.style.left = `${bucketPosition}px`;

    cat.style.animation = 'none';
    cat.style.bottom = `${catPosition}px`;

    cat.src = './assets/game-over.png'
    cat.style.width =  '110px';

    clearInterval(loop);
  }
}, 10)

document.addEventListener('keydown', jump);
document.addEventListener('touch', jump);