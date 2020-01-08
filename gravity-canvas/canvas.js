var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

addEventListener("resize", function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
})

addEventListener("click", function(){

    init();
})


var c = canvas.getContext('2d');

var colors = [
    "#DFE9F2",
    "#4A738C",
    "#79878C",
    "#093640",
    "#062026"
]

function Circle(x,y,dx,dy,radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;


    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.strokeStyle = "black";
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
        c.closePath();
    }

    this.update = function(){
        
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx;
    }
    if(this.y + this.radius + this.dy > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy * friction;
    } else{
        this.dy +=1;
    }
    this.x+=this.dx;
    this.y+=this.dy;


    this.draw();
    }
}
var friction = 1;

var circleArray;
function init(){
    circleArray = [];
    for(var i = 0; i < 100; i++){
        var radius = Math.random() * (40 - 20) + 10;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - (innerHeight * .2)) + radius;
        var dx = (Math.random() - .5);
        var dy = (Math.random() - .5);
        var color = colors[Math.floor(Math.random() * (colors.length - 0) + 0)];
        circleArray.push( new Circle(x,y,dx,dy,radius, color));

    }
}
    
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
        
    }
}
init();
animate();
