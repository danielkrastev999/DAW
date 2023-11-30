// VARIABLE DE EJEMPLO
texto = "abc abc"

// MUESTRA LONGITUD DEL STRING
length = texto.length;
//      length == 7

// DEVUELVE UN CACHO DEL STRING DESDE UNA POSICION INICIAL HASTA POSICION FINAL (primera incluye, ultima excluye)
slice = texto.slice(3, 5);
//      slice == " a"

// UTILIA UN INDICE INICIAL Y UNA LONGITUD PARA DETERMINAR LA PORCION QUE SE EXTRAERA
texto2 = "Hola mundo"
substr = texto.substr(3, 5);
//      substr == "a mun"

// REMPLAZA TEXTO
replacement = texto.replace("abc", "000");
//      replacement == "000 abc"

replacement = texto.replaceAll("abc", "cba");
//      replacement == "cba cba"

// PONER TEXTO EN MAYUSCULAS
upper = texto.toUpperCase();
//      upper == "ABC ABC"

// PONER TEXTO EN MINUSCULAS
texto = "ABC ABC"
lower = texto.toLowerCase();
//      lower == "abc abc"

// QUITAR ESPACIOS EN BLANCO SOBRANTES !!!!*****
texto = "  ABC ABC  "
trim = texto.trim();
//      trim == "ABC ABC"

// Quita espacios en blanco de adlante
    texto = "  ABC ABC  "
    trim = texto.trimStart();
//      trim == "ABC ABC  "

// Quita espacios en blanco de atras
texto = "  ABC ABC  "
trim = texto.trimEnd();
//      trim == "  ABC ABC"

//Si hay menos caracteres del numero indicado, añade el segundo parametro al principio hasta llegar a ese numero
texto = "ABC"
pad = texto.padStart(5, "-");
//      pad == "--ABC"

// Si hay menos caracteres del numero indicado, añade el segundo parametro al final hasta llegar a ese numero
texto = "ABC"
pad = texto.padEnd(5, "-");
//      pad == "ABC--"

// EXTRAER UN CARACTER DE UNA POSICION INDICADA
character = texto.charAt(1); //Si no hay nada devuelve una cadena vacia
character == "a"
console.log(texto[1]);  //Si no hay nada devuelve "undefined"
//      character == "a"

// Extrae el ascii un caracter del string en la posicion indicada
ascii = texto.charCodeAt(1);
//      ascii == 97

// DIVIDE EL TEXTO POR UN CARACTER INDICADO Y LO GUARDA EN UN ARRAY !!!****
texto = "abc,abc"
split = texto.split(",");
//      split == ["abc","abc"]

// Busca la primera ocurrencia de "c" en la cadena texto comenzando desde el índice 0
index = texto.indexOf("c", 0);
//      index == 2 // La primera ocurrencia de "c" está en el índice 2
// comienza desde el índice 4 y la primera ocurrencia esta en el indice 6
index = texto.indexOf("c", 4);
index == 6

// Cuenta las coincidencias en el texto
// Usando el método matchAll o si solo queremos 1, match
const matches = texto.matchAll(/a/);

// Iterar sobre las coincidencias usando el método next() del iterador
for (const match of matches) {
  console.log(match[0]); // match[0] contiene la coincidencia completa
}

// Devuelve true o false
start = texto.startsWith("a",0); // Si empieza por un string a partir del indice de caracter que se le indique
// true
start = texto.startsWith("a",6); // Si empieza por un string a partir del indice de caracter que se le indique
// false
includes = texto.includes("abc",0); // Si contiene un string a partir del indice de caracter que se le indique
// true
includes = texto.includes("abc",7); // Si contiene un string a partir del indice de caracter que se le indique
// false

//Interpolacion
phrase = `El texto es: ${texto}`;
//      phrase == "El texto es: abc abc"