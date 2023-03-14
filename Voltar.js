const iframe = document.getElementById("RotaTama")
const ovos = document.getElementById("ovos")
function Voltar(){
    localStorage.setItem("Estado","block")
    localStorage.setItem("EstadoTamo","none")
    location.reload()
}
iframe.src = localStorage.getItem("Src")
iframe.style.display = localStorage.getItem("EstadoTamo")
ovos.style.display = localStorage.getItem("Estado")
