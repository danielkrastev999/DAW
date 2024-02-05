let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/28161?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkYW5pZWxrcmFzdGV2OTk5QGdtYWlsLmNvbSIsImp0aSI6ImQyZjA4Yzc3LTk3N2QtNGQ4Ny1iZjJmLWI1ZTAzYzQzZmZmYiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNzA1OTE5ODY0LCJ1c2VySWQiOiJkMmYwOGM3Ny05NzdkLTRkODctYmYyZi1iNWUwM2M0M2ZmZmIiLCJyb2xlIjoiIn0.k4yUqN2s1GhbtSQA8jjnUDyanXH7ZjOyni_cMKXMeyM",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    if (response.estado == 200) {
        pedirDatos(response.datos);
    }else{
        alert("Error em la peticionn: " + response.descripcion)
    }
  });
  
function pedirDatos(resultado){
    let setting = {
        "async": true,
        "crossDomain": true,
        "url": resultado,
        "method": "GET",
        "headers": {
          "cache-control": "no-cache"
        }
      }
      $.ajax(setting).done(function (response) {
        let salida = JSON.parse(response);
        let texto = "";
        for (let predDia of salida[0].prediccion.dia){
            texto += (predDia.fecha) + "-";
            texto += (predDia.temperatura.maxima) + "-";
            texto += (predDia.temperatura.minima);
            texto += "<br>";
        }
        $("#salida").html(texto);
      });
}