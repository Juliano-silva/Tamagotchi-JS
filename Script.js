const iframe = document.getElementById("RotaTama")
const ovos = document.getElementById("ovos")
document.getElementById("Rotas1").addEventListener("click",RotaPrincipal1)
document.getElementById("Rotas2").addEventListener("click",RotaPrincipal2)
document.getElementById("Rotas3").addEventListener("click",RotaPrincipal3)
function RotaPrincipal1(){
    localStorage.setItem("Src","Tamagotchis/Tamagoshi1.html")
    localStorage.setItem("Estado","none")
    localStorage.setItem("EstadoTamo","block")
    location.reload()
}
function RotaPrincipal2(){
    localStorage.setItem("Src","Tamagotchis/Tamagoshi2.html")
    localStorage.setItem("Estado","none")
    localStorage.setItem("EstadoTamo","block")
    location.reload()
}
function RotaPrincipal3(){
    localStorage.setItem("Src","Tamagotchis/Tamagoshi3.html")
    localStorage.setItem("Estado","none")
    localStorage.setItem("EstadoTamo","block")
    location.reload()
}
iframe.src = localStorage.getItem("Src")
ovos.style.display = localStorage.getItem("Estado")
iframe.style.display = localStorage.getItem("EstadoTamo")
