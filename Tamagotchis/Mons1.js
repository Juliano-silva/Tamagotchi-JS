var numE = 100
var numAL = 100
var numA = 100
var numT = 100
var numH = 100
var numF = 100
var Green = document.getElementById("Green")
Green.src = "../GREEN/1.png"
function Loop(time = 1){
    var Total = numE + numAL + numH +numT +numA + numF;
    if (numF == 0,numE == 0,numH == 0,numT == 0,numA == 0,numF == 0){
     alert("Acabou. Começando de novo")
     location.reload()
     location.href = "/"
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
    // Green
    if (numAL >= 110){
        Green.src = "../GREEN/2.png"
    }
    if (numAL >= 120 , numT >= 140){
        Green.src = "../GREEN/3.png"
    }
    if (numAL >= 145 , numT >= 160){
        Green.src = "../GREEN/4.png"
    }
    if (numAL >= 160 , numT >= 210){
        Green.src = "../GREEN/5.png"
    }
}
Start();
