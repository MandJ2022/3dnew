const canvas = document.querySelector('.canvas');
const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resize ()
window.addEventListener('resize', resize)

const context = canvas.getContext('2d');
const frameCount = 99;

const currentFrame = (index) => `./pic/${(index + 1).toString()}.jpg`;
const images = [];
let ball = {frame : 0};

for(let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}


gsap.to(ball, {
    frame: frameCount - 1,
    snap: 'frame',
    ease: 'none',
    scrollTrigger: {
        scrub: true,
        pin: 'canvas',
        end: '500%',
    },
    onUpdate: render,
});

images[0].onload = render;

function render() {
    context.clearRect(1,1, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 1, 1);
}


