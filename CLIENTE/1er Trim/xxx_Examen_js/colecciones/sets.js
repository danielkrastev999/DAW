// SETS => No se pueden repetir datos


// CREACION DE SETS
//const letters = new Set(["a","b","c"]);
const letters = new Set();

// AÑADIR VALORES AL SET
// const letters = new Set();
letters.add("a")
letters.add("b")
letters.add("c")
//      letters == ["a","b","c"]
// Solo guarda 1 igual; si añadimos dos "a", sólo se guarda la primera


// RECORRER EL SET
for (letter of letters.values() ){
    console.log(value)
}
// --- LOG ---
//      a
//      b
//      c


letters.forEach(function(value){
    console.log(value)
})
// --- LOG ---
//      a
//      b
//      c

