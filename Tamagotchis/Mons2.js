var numE = 100
var numAL = 100
var numA = 100
var numT = 100
var numH = 100
var numF = 100
var Blue = document.getElementById("Blue")
Blue.src = "../BLUE/1.png"
function Loop(time = 1){
    var Total = numE + numAL + numH +numT +numA + numF;
    if (numF == 0,numE == 0,numH == 0,numT == 0,numA == 0,numF == 0){
    alert("Acabou. Começando de novo")
     location.reload()
 }
numE = numE - parseInt(time)
numAL = numAL - parseInt(time)
numA = numA - parseInt(time)
numT = numT - parseInt(time)
numH = numH - parseInt(time)
numF = numF - parseInt(time)
document.getElementById("MenosUmE").innerText = numE + "%"
document.getElementById("MenosUmAL").innerText = numAL + "%"
document.getElementById("MenosUmA").innerText = numA + "%"
document.getElementById("MenosUmT").innerText = numT + "%"
document.getElementById("MenosUmH").innerText = numH + "%"
document.getElementById("MenosUmF").innerText = numF + "%"
}
function Start(){
    setInterval(Loop,1000)
}
// Red
function ButtonH(){numH++}
function ButtonA(){numA++}
// Green
function ButtonAL(){numAL++}
function ButtonT(){numT++}
// Blue
function ButtonF(){numF++}
function ButtonE(){numE++}
function EVOLUTION(){
    // Blue
    if (numF >= 115){
        Blue.src = "../BLUE/2.png"
    }
    if (numF >= 125 , numE >= 120){
        Blue.src = "../BLUE/3.png"
    }
    if (numF >= 155 , numE >= 140){
        Blue.src = "../BLUE/4.png"
    }
    if (numF >= 155 , numE >= 180){
        Blue.src = "../BLUE/5.png"
    }
}
Start();
