const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosision = pipe.offsetLeft;
    const cloudsPosision = clouds.offsetLeft;
    const marioPosision = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosision <= 120 && pipePosision > 0 && marioPosision < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosision}px`;
        
        mario.style.animation = 'none';
        mario.style.left = `${marioPosision}px`;

        mario.src = 'images/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px';
        mario.style.marginRigth = '50px';

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosision}px`

        clearInterval(loop)
    }

}, 10);

document.addEventListener('keydown', jump);