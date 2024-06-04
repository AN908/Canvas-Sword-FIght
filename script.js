//Canvas setup
var cnv = document.getElementById("Sword-Fight");
var ctx = cnv.getContext("2d");
cnv.height = 600;
cnv.width = 800;

ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 800, 600);

//Mountain
ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(550, 450);
ctx.lineTo(750, 450);
ctx.lineTo(650, 300);
ctx.lineTo(550, 450);
ctx.fill();

//Snow
ctx.fillStyle = "white";
ctx.beginPath();
ctx.moveTo(615, 350);
ctx.lineTo(685, 350);
ctx.lineTo(650, 300);
ctx.lineTo(615, 350);
ctx.fill();

ctx.fillStyle = "green";
ctx.fillRect(0, 400, 800, 600);

//Sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(100, 50, 30, 0, 2 * Math.PI);
ctx.fill();

//Stick man 1

//Torso
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(200, 380);
ctx.stroke();

//Arms
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(250, 330);
ctx.stroke();

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(180, 350);
ctx.stroke();

//Head
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(200, 280, 20, 0, 2 * Math.PI);
ctx.stroke();

//Legs
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 380);
ctx.lineTo(220, 420);
ctx.stroke();

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(200, 380);
ctx.lineTo(180, 420);
ctx.stroke();

//Spear
let sword = document.getElementById("Weapon1");
ctx.drawImage(sword, 240, 300, 50, 50);

//Stickman  2
//Torso
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 300);
ctx.lineTo(500, 380);
ctx.stroke();

//Arms
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 300);
ctx.lineTo(520, 340);
ctx.stroke();

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 300);
ctx.lineTo(480, 340);
ctx.stroke();

//Head
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.arc(500, 280, 20, 0, 2 * Math.PI);
ctx.stroke();

//Legs
ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 380);
ctx.lineTo(520, 420);
ctx.stroke();

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(500, 380);
ctx.lineTo(480, 420);
ctx.stroke();

let spear1 = document.getElementById("Weapon2");
ctx.drawImage(spear1, 420, 290, 100, 85);

//Title
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Sword Fight", 20, 20);
