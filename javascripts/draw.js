// Draw a colored rectangle
function  drawRect(canvas, color, offset) {
    var context = canvas.getContext('2d');
    context.beginPath();
    var y = 0;
    var width = Math.min(canvas.width/4, 170);
    var height = canvas.height;
    context.rect(offset*width, y, width, height);
    context.fillStyle = color;
    context.fill();
}

function drawVerticalRect(canvas, color, start, width, alpha) {
    var context = canvas.getContext('2d');
    context.beginPath();
    var height = canvas.height;
    context.rect(start, 0, width, height);
    context.globalAlpha = alpha
    context.fillStyle = color;
    context.fill();
}

function drawHorizontalRect(canvas, color, start, height, alpha) {
    var context = canvas.getContext('2d');
    context.beginPath();
    var width = canvas.width;
    context.rect(0, start, width, height);
    context.globalAlpha = alpha;
    context.fillStyle = color;
    context.fill();
}
