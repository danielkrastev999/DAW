//ARRAYS 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.length
// Devuelve el TAMAÑO DEL ARRAY =>  4

const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.indexOf("Banana")
// Devuelve el index del elemento => 0
// Si no existe, devuelve -1 (podemos hacer un condicional if(result == -1){console.log("El elemento no existe")})


const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.toString()
// Devuelve el ARRAY CONVERTIDO EN STRING => "Banana, Orange, Apple, Mango"


const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.join(" - ")
// Devuelve el ARRAY COMO STRING ESPECIFICANDO EL SEPARADOR => "Banana - Orange - Apple - Mango"


const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.pop()
// ELIMINA EL ULTIMO ELEMENTO DE LA LISTA Y LO DEVUELVE => "Mango"


const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.push("Kiwi")
// AÑADIR UN NUEVO ELEMENTO AL FINAL DEL ARRAY, 'result' devuelve el nuevo tamaño del array
// fruits == ["Banana","Orange","Apple","Mango","Kiwi"]
//      result == 5


const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.shift()
// ELIMINA EL PRIMER ELEMENTO DE LA LISTA. Mueve todos los elementos una posicion atras
//      result == "Banana"

const fruits = ["Banana", "Orange", "Apple", "Mango"];
result == fruits.unshift("Lemon")
// AÑADE UN NUEVO ELEMENTO AL PRINCIPIO DEL ARRAY, devuelve el nuevo tamaño del array
//      fruits == ["Lemon","Banana", "Orange", "Apple", "Mango"];
//      result == 5


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myDog = ["Tobi"]
const myFamily= myGirls.concat(myBoys,myDog,"Artem");
// CONCATENAR ARRAYS EN UNO NUEVO, se le pueden pasar tantos arrays como se quiera como parametro y también strings
//      myFamily == ["Cecilie","Lone","Emil","Tobias","Linus","Tobi","Artem"]


const fruits = ["Banana", "Orange", "Apple", "Mango"];
result = fruits.splice(2, 1, "Lemon", "Kiwi");
//  DESDE CUAL ELIMINAR, CUANTOS ELIMINAR, ELEMENTO1 A AÑADIR, ELEMENTO2 A AÑADIR
// A partir del índice 2 (que es el tercer elemento en el array, "Apple").
// Eliminar 1 elemento.
// Agregar los elementos "Lemon" y "Kiwi" en ese lugar.
// result contiene un array con los elementos eliminados
// Si no se pasan elementos se puede usar para borrar elementos
//      result == "Apple"


const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
// DEVUELVE UN CACHO DEL ARRAY COMO OTRO ARRAY
//      citrus == ["Orange", "Lemon", "Apple", "Mango"]
// Se puede LIMITAR EL RANGO, excluye el último
const citrus = fruits.slice(1,3);
//      citrus == ["Orange", "Lemon"]


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
// ORDENA
//      fruits == ["Apple","Banana","Mango","Orange"]
// INVIERTE EL ORDEN
// fruits.reverse();
//      fruits == ["Orange","Mango","Banana","Apple"]

//===============================================================================
// Recorrer un array de atras en adelante
for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}
//o para recorrerlo normal
for(let fruit of fruits){
    console.log(fruit);
}