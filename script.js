const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let isMouseDown = false;

canvas.addEventListener('mousedown', (e) => {
    if (e.button === 0) { // Left mouse button
        isMouseDown = true;
    }
});

canvas.addEventListener('mouseup', (e) => {
    if (e.button === 0) { // Left mouse button
        isMouseDown = false;
    }
});

canvas.addEventListener('mousemove', (e) => {
    if (isMouseDown) {
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2); // ellipse with 30 width/height
        ctx.fill();
        ctx.closePath();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
        canvas.addEventListener('mousemove', erase);
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') {
        canvas.removeEventListener('mousemove', erase);
    }
});

function erase(e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 15, 0, Math.PI * 2); // ellipse with 30 width/height
    ctx.fill();
    ctx.closePath();
}

function drawText() {
    ctx.font = '16px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("Hold 'shift' to erase.", 10, 390);
}

// Initial text draw
drawText();
