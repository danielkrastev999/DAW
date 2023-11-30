$(principal);

function principal(){
   $("button").click(function(){
      let hipo = Math.sqrt($("#lon1").val()**2 + $("#lon2").val()**2)
      $("#salida").html(hipo)
   })

}

