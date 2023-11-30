
// Map = object that holds key-value pairs of any data type

const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50]
]);

//store.get("t-shirt");
//store.set("hat", 40);
//store.delete("hat");
//console.log(store.has("underwear"));
//console.log(store.size);

store.forEach((value, key) => console.log(`${key} $${value}`));


//=======================================

// CREACION DE MAPS
// const fruits = new Map([["apples", 500], ["bananas", 300], ["oranges", 200]]);
const fruits = new Map();

// AÑADIR VALORES AL MAP
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
//      fuits == [["apples", 500], ["bananas", 300], ["oranges", 200]]
// Set se puede usar para añadir nuevos elementos o para editar los valores de un elemento ya existente !!!!!!!!

// ACCEDER A VALORES DEL MAP
apples = fruits.get("apples");
//      apples == 500

// AVERIGUAR LA CANTIDAD DE VALORES DEL MAP
size = fruits.size;
//      size == 3

// BORRAR ELEMENTOS DEL MAP
fruits.delete("apples")
//      fuits == [["bananas", 300], ["oranges", 200]]

// COMPROBAR EXISTENCIA DE UN ELEMENTO
hayManzanas = fruits.has("apples")
//      hayManzanas == true



// RECORRER MAP
for (const x of fruits.entries()) {
    console.log(x);
  }
  // --- LOG ---
  //      apples, 500
  //      bananas, 300
  //      oranges, 200
  

fruits.forEach (function(value, key) {
    console.log( key, value );
})
// --- LOG ---
//      apples 500
//      bananas 300
//      oranges 200


//=======================================
