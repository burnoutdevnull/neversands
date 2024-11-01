const root = document.getElementById("resources")
const canvas = document.getElementById('root');
ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.imageSmoothingEnabled = false;
    console.log(`resize: [${canvas.height}, ${canvas.width}]`)
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// -- Utility functions --

const loadImage = (id) => {
    const svgData = new XMLSerializer().serializeToString(
        document.getElementById(id)
    );

    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => URL.revokeObjectURL(svgUrl);
    img.src = svgUrl;

    return img
}

// -- Rendering --

const farmer = loadImage('farmer-front');

const draw = (img) => {
    ctx.drawImage(img, window.innerWidth / 2 - 64, window.innerHeight / 2 - 64, 128, 128);  
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const now = new Date();
    document.getElementById('clock').innerHTML = now.toLocaleString('en-GB', {hour: 'numeric', minute: 'numeric', second: 'numeric'}) + ' ' + now.getMilliseconds()
    
    draw(farmer)
}


var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;


// initialize the timer variables and start the animation
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    gameLoop();
}

// the animation loop calculates time elapsed since the last loop
// and only draws if your specified fps interval is achieved
function gameLoop() {
    // request another frame

    requestAnimationFrame(gameLoop);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);
        render();
        // Put your drawing code here

    }
}

startAnimating(2);