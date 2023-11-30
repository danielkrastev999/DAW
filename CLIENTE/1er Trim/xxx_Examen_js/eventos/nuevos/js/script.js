// Ejercicio 1
function removeElement() {
    let elementToRemove = document.getElementById("elementToRemove");
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

// Ejercicio 2
function changeImage() {
    let imageToChange = document.getElementById("imageToChange");
    if (imageToChange.src.endsWith("img/juice.jpg")) {
        imageToChange.src = "img/juice2.jpg";
    } else {
        imageToChange.src = "img/juice.jpg";
    }
}

// Ejercicio 3
let clickCounter = 0;
function incrementClicks() {
    clickCounter++;
    document.getElementById("clickCounter").innerText = "Clics: " + clickCounter;
}
function resetClicks() {
    clickCounter = 0;
    document.getElementById("clickCounter").innerText = "Clics: 0";
}


// Ejercicio 4
function changeStyles() {
    let styledElement = document.getElementById("styledElement");
    styledElement.style.color = "red";
    styledElement.style.fontSize = "24px";
    styledElement.style.border = "2px solid blue";

}


// Ejercicio 5
setInterval(updateClock, 1000);
function updateClock() {
    let realTimeClock = document.getElementById("realTimeClock");
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    realTimeClock.innerText = hours + ":" + minutes + ":" + seconds;
}


// Ejercicio 6
function updateSecondDropdown() {
    let firstDropdown = document.getElementById("firstDropdown");
    let secondDropdown = document.getElementById("secondDropdown");
    secondDropdown.innerHTML = ""; // Limpiar el segundo dropdown
    for (let i = 1; i <= 3; i++) {
        if (i != firstDropdown.value) {
            let option = document.createElement("option");
            option.value = i;
            option.text = "Opción " + i;
            secondDropdown.add(option);
        }
    }
}

// Ejercicio 7
function sortList() {
    let sortableList = document.getElementById("sortableList");
    let listItems = Array.from(sortableList.getElementsByTagName("li"));
    listItems.sort((a, b) => a.innerText.localeCompare(b.innerText));
    sortableList.innerHTML = ""; // Limpiar la lista
    listItems.forEach(item => sortableList.appendChild(item));
}

// Ejercicio 8
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let draggedElement = document.getElementById(data);
    let dropzone = document.getElementById("dropzone");
    dropzone.appendChild(draggedElement);
}

// Ejercicio 9
function changeBackgroundColor(isMouseOver) {
    let backgroundChange = document.getElementById("backgroundChange");
    if (isMouseOver) {
        backgroundChange.style.backgroundColor = "yellow";
    } else {
        backgroundChange.style.backgroundColor = "white";
    }
}

// Ejercicio 11
function toggleVisibility() {
    let toggleElement = document.getElementById("toggleElement");
    toggleElement.style.display = (toggleElement.style.display === "none" || toggleElement.style.display === "") ? "block" : "none";
}

// Ejercicio 12
function rotateElement() {
    let rotateElement = document.getElementById("rotateElement");
    let currentRotation = parseFloat(rotateElement.style.transform.replace("rotate(", "").replace("deg)", "") || 0);
    rotateElement.style.transform = "rotate(" + (currentRotation + 45) + "deg)";
}

// Ejercicio 13
function changeText() {
    let textElement = document.getElementById("textElement");
    textElement.innerText = "¡Texto Cambiado!";
}

// Ejercicio 14
function createAlert() {
    alert("¡Esto es una alerta!");
}

// Ejercicio 15
function changeTextColor() {
    let textColorElement = document.getElementById("textColorElement");
    textColorElement.style.color = getRandomColor();
}

// Ejercicio 16
function playAudio() {
    let audioElement = document.getElementById("audioElement");
    audioElement.play();
}

// Ejercicio 17
function shakeElement() {
    let shakeElement = document.getElementById("shakeElement");
    shakeElement.style.animation = "shake 0.5s";
}

// Ejercicio 18
function resizeElement() {
    let resizeElement = document.getElementById("resizeElement");
    resizeElement.style.width = (parseFloat(resizeElement.style.width || 100) + 20) + "px";
    resizeElement.style.height = (parseFloat(resizeElement.style.height || 50) + 20) + "px";
}

// Ejercicio 19
function changeBackgroundImage() {
    let backgroundImageElement = document.getElementById("backgroundImageElement");
    backgroundImageElement.style.backgroundImage = "url('img/juice2.jpg')";
}

// Ejercicio 20
function generateRandomColor() {
    let randomColorElement = document.getElementById("randomColorElement");
    randomColorElement.style.backgroundColor = getRandomColor();
}

// Función auxiliar para generar colores aleatorios
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}


// Ejercicio 21
function copyText() {
    let copyTextElement = document.getElementById("copyTextElement");
    copyTextElement.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles: " + copyTextElement.value);
}

// Ejercicio 22
function showDate() {
    let dateElement = document.getElementById("dateElement");
    let currentDate = new Date().toLocaleString();
    dateElement.innerText = "Fecha Actual: " + currentDate;
}

// Ejercicio 23
function changeFontFamily() {
    let fontFamilyElement = document.getElementById("fontFamilyElement");
    let fonts = ["Arial", "Verdana", "Courier New", "Georgia", "Times New Roman"];
    let randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    fontFamilyElement.style.fontFamily = randomFont;
}

// Ejercicio 24
function toggleFullScreen() {
    if (document.fullscreenElement) {
        document.exitFullscreen();
    } else {
        document.documentElement.requestFullscreen();
    }
}

// Ejercicio 25
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ejercicio 26
function changeCursor() {
    let cursorElement = document.getElementById("cursorElement");
    cursorElement.style.cursor = "pointer";
}

// Ejercicio 27
function toggleBackgroundColor() {
    let backgroundToggleElement = document.getElementById("backgroundToggleElement");
    backgroundToggleElement.style.backgroundColor = (backgroundToggleElement.style.backgroundColor === "lightblue") ? "lightgreen" : "lightblue";
}

// Ejercicio 28
function showRandomQuote() {
    let quotes = ["La vida es lo que pasa mientras estás ocupado haciendo otros planes.", "La única manera de hacer un gran trabajo es amar lo que haces.", "La mente es todo. Lo que piensas, te conviertes.", "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.", "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden."];
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quoteElement").innerText = randomQuote;
}

// Ejercicio 29
function countdownTimer() {
    let countdownElement = document.getElementById("countdownElement");
    let countdownTime = 10;
    let countdownInterval = setInterval(function () {
        countdownElement.innerText = "Cuenta regresiva: " + countdownTime + " segundos";
        countdownTime--;
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerText = "¡Tiempo agotado!";
        }
    }, 1000);
}

// Ejercicio 30
function changeElementBorder() {
    let borderElement = document.getElementById("borderElement");
    borderElement.style.border = "3px solid #000";
}

// Ejercicio 31
function toggleElementSize() {
    let sizeToggleElement = document.getElementById("sizeToggleElement");
    sizeToggleElement.style.width = (sizeToggleElement.style.width === "100px") ? "50px" : "100px";
    sizeToggleElement.style.height = (sizeToggleElement.style.height === "100px") ? "50px" : "100px";
}

// Ejercicio 32
function toggleElementContent() {
    let contentToggleElement = document.getElementById("contentToggleElement");
    contentToggleElement.innerText = (contentToggleElement.innerText === "Este texto puede cambiar") ? "¡Texto Cambiado!" : "Este texto puede cambiar";
}

// Ejercicio 33
function disableButton() {
    let disableButton = document.getElementById("disableButton");
    disableButton.disabled = !disableButton.disabled;
}

// Ejercicio 34
function changeElementPosition() {
    let positionElement = document.getElementById("positionElement");
    positionElement.style.position = "absolute";
    positionElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    positionElement.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
}

// Ejercicio 35
function toggleElementBorderRadius() {
    let borderRadiusToggleElement = document.getElementById("borderRadiusToggleElement");
    borderRadiusToggleElement.style.borderRadius = (borderRadiusToggleElement.style.borderRadius === "0px") ? "50%" : "0px";
}

// Ejercicio 36
function showMouseCoordinates() {
    document.addEventListener("mousemove", function (event) {
        let mouseCoordinatesElement = document.getElementById("mouseCoordinatesElement");
        mouseCoordinatesElement.innerText = "X: " + event.clientX + ", Y: " + event.clientY;
    });
}

// Ejercicio 37
function changeElementOpacity() {
    let opacityElement = document.getElementById("opacityElement");
    opacityElement.style.opacity = (opacityElement.style.opacity === "1") ? "0.5" : "1";
}

// Ejercicio 38
function changeElementZIndex() {
    let zIndexElement1 = document.getElementById("zIndexElement1");
    let zIndexElement2 = document.getElementById("zIndexElement2");
    zIndexElement1.style.zIndex = (zIndexElement1.style.zIndex === "1") ? "0" : "1";
    zIndexElement2.style.zIndex = (zIndexElement2.style.zIndex === "1") ? "0" : "1";
}

// Ejercicio 39
function rotateImage() {
    let rotateImageElement = document.getElementById("rotateImageElement");
    rotateImageElement.style.transform = "rotate(90deg)";
}

// Ejercicio 40
function changeElementShadow() {
    let shadowElement = document.getElementById("shadowElement");
    shadowElement.style.boxShadow = "10px 10px 5px #888888";
}