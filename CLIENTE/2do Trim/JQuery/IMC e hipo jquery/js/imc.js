$(principal);

function principal(){
   $("#btn1").click(function(){
    let imc = ($("#peso").val() / $("#altura").val()**2).toFixed(2)
    //$(".salida").append(imc)
    $("#salida").html(imc)
   })

   $("#btn2").click(function(){
      let hipo = (Math.sqrt($("#lon1").val()**2 + $("#lon2").val()**2)).toFixed(2)
      $("#salida2").html(hipo)
   })

}

