
    //  Crea una funcion, no la ejecuta hasta que no se la llama, clickando en el boton que tiene el evento onclick()
function cadenaCaracter(){

   //let texto = document.getElementById("texto"); //                           Elemento del dom, tiene todo el contenido
   let texto = document.getElementById("texto").value.trim(); //                Solo coge lo que hay dentro del imput
   console.log(texto.length);
   document.getElementById("salida1").innerHTML = texto;//                      Mostrarlo dentro de la pagina html

    //metodos de String
    document.getElementById("salida1").innerHTML = texto.slice(3,7);//          Incluye el 3 pero no el 7 caracter
    //  Si solo pones un parametro, es desde ese hasta el final. texto.slice(5); 
    //  Si pones un numero negativo, empieza desde el final. texto.slice(-3); 

    //Substring
    document.getElementById("salida1").innerHTML = texto.substring(-3,3); //    Los numeros negativos los convierte en 0

    //substr
    document.getElementById("salida1").innerHTML = texto.substr(3,4); //        Posicion - Longitud
    // empieza en el caracter 3 y a partir de ahi, te muestra 4

    //replace
    document.getElementById("salida1").innerHTML = texto.replace("ABC", "XYZ"); //Reemplaza
    console.log(texto); //  la variable no cambia "ABCD..", el replace simplemente lo sustituye en el html
    // texto = texto.replace("ABC","YXZ");//   Aqui si se modifica la variable
    // console.log(texto);
    document.getElementById("salida1").innerHTML = texto.replaceAll("ABC", "XYZ"); 
    //       ABCDEFGHIJABC convierte en XYZDEFGHIJXYZ

    //toUpperCase & toLowerCase
    document.getElementById("salida1").innerHTML = texto.toLowerCase(); //  abcdefghij

    //********* */
    // Siempre te devuelve una cadena nueva, los String no se pueden modificar, si reemplazar
    //********* */

    //  trim -> elimina los espacios en blanco 
    // let texto = document.getElementById("texto").value.trim();

    //padStart/padEnd -> si faltan caracteres, lo que falta, lo rellena por la izquierda(start) y derecha(end)
    document.getElementById("salida1").innerHTML = texto.padStart(15, "-");//  -----ABCDEFGHIJ
    document.getElementById("salida1").innerHTML = texto.padEnd(15, "_"); //    ABCDEFGHIJ_____

    //Extraer un caracter de la cadena de caracteres 
    //  charAt
    document.getElementById("salida1").innerHTML = texto.charCodeAt(); //   Muestra el codigo ascii del caracter
    document.getElementById("salida1").innerHTML = texto[9]; //             Muestra el caracter de la decima posicion
                                                              //            Si accedo a una posicion que no existe, me sale "undefined"
    document.getElementById("salida1").innerHTML = texto.charAt(2); //      Extrae el tercer caracter de la cadena

    //split -> si no lo separas por nada, te devuelve todo en un array
    console.log(texto.split(","));//    Devuelve el texto en un array separando por comas
    console.log(texto.split(" ")); //   Separa por espacios ['hola', 'que', 'tal', 'majo']
    // sirve para separar un texto, guardarlo en un array y luego hacer algo con el

    //indexOf() ->  te dice en que posicion/indice, empieza X palabra
    //              no permite expresiones regulares pero si desde donde quieres empezar a buscar
    let text = "please locate where 'locate' occurs!";
    let index = text.indexOf("locate");
    console.log(index); 

    //search() ->   permite expresiones regulares pero no te deja decir desde que punto buscas
    let text2 = "please locate where 'locate' occurs!";
    let index2 = text.indexOf("/Locate/");
    console.log(index2); 

    //match() -> BUSCAR INFORMACION ! !!!!!!!!!!  !!!!!!!!!!!!
    let text3 = "The rain in SPAIN stays mainly in the plain";
    text3.match("ain");
    console.log(text3.match("ain"));

    //text3.startWith/endWith 
    let text4 = "Hello world fjfsjdi sfdnfskd sdfis"
    document.getElementById("salida1").innerHTML = text4.startsWith("Hello") //      devuelve True
    document.getElementById("salida1").innerHTML = text4.startsWith("world",7)  //  si empieza con world desde la posicion 7, devuelve False

    // Interpolacion-> dentro de una cadena de texto puedo interpolar texto
    let firstName = "John";
    let lastName = "Wick";

    let total = `Welcome ${firstName} ${lastName}!`;
    document.getElementById("salida1").innerHTML = total

}

