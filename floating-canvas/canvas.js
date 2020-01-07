var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

addEventListener("resize", function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
})

var c = canvas.getContext('2d');

function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;


    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
        c.strokeStyle = "blue";
        c.stroke();
        c.fill();
    }

    this.update = function(){
        
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.dy = -this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;

    this.draw();
    }
}

var circleArray;
function init(){
    circleArray = [];
    for(var i = 0; i < 100; i++){
        var radius = 30;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5);
        var dy = (Math.random() - 0.5);

        circleArray.push( new Circle(x,y,dx,dy,radius));

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
