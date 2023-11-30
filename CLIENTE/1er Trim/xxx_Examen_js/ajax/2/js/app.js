const TABLEDIV = document.getElementById("table-div");
const INPUTNAME = document.getElementById("name");
const INPUTAGE = document.getElementById("age");
let promptCity = "";
let personList = [];
let tableExist = false;

// Función para crear un objeto de persona
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// Función para mostrar la tabla obteniendo datos del servidor
function mostrarTabla() {
    const httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            createTable(data);
        } else {
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`);
        }
    };

    httpRequest.open("GET", "/DAW/CLIENTE/xxx_Examen_js/ajax/2/check.py", true);
    httpRequest.send();
}

// Función para crear la tabla con los datos proporcionados
function createTable(dataList) {
    personList = dataList.map(data => new Person(data[0], data[1], data[2]));

    if (tableExist) {
        document.getElementById("table").remove();
    }

    const table = document.createElement("table");
    table.setAttribute("border", 1);
    table.setAttribute("id", "table");

    // Crear la fila de encabezado
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Nombre</th><th>Edad</th><th>Ciudad</th>";
    table.appendChild(headerRow);

    // Crear filas de datos
    personList.forEach(person => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${person.name}</td><td>${person.age}</td><td>${person.city}</td>`;
        table.appendChild(tr);
    });

    TABLEDIV.appendChild(table);
    tableExist = true;
}


// Función para validar el formulario
function checkForm() {
    promptCity = "";
    let isValid = true;

    [INPUTNAME, INPUTAGE].forEach(input => {
        if (input.value === null || input.value === "") {
            input.style.background = "red";
            isValid = false;
        }
    });

    return isValid;
}

// Función para procesar los datos del formulario
function procesarDatos() {
    const httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            mostrarTabla();
        } else {
            console.log(`estado: ${this.readyState}, respuesta servidor: ${this.status}`);
        }
    };

    const url = `/DAW/CLIENTE/xxx_Examen_js/ajax/2/add.py?name=${INPUTNAME.value}&age=${INPUTAGE.value}&city=${promptCity}`;
    httpRequest.open("GET", url, true);
    httpRequest.send();
}

// Evento que se ejecuta al cargar la página
window.onload = function() {
    while(promptCity === "") {
        promptCity = window.prompt("Ciudad: ");
        setInterval(10000);
    }
};
