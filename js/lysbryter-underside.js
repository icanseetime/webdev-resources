// Bytte mellom dark mode og light mode
let lightSwitch = document.getElementById('light-switch')
localStorage.setItem("mode", "../css/darkmode.css")

lightSwitch.addEventListener('click', e => {
    if (localStorage.getItem("mode") == "../css/darkmode.css") {
        document.getElementById('css-mode').href = "../css/lightmode.css"
        localStorage.setItem("mode", "../css/lightmode.css")
        document.getElementById("light-switch").src = "../img/moon.png"
        document.getElementById("light-switch").alt = "Moon"
    } else if (localStorage.getItem("mode") == "../css/lightmode.css") {
        document.getElementById('css-mode').href = "../css/darkmode.css"
        localStorage.setItem("mode", "../css/darkmode.css")
        document.getElementById("light-switch").src = "../img/sun.png"
        document.getElementById("light-switch").alt = "Sun"
    }
})