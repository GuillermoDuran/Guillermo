    var fecha = new Date(); 
         
    var dia = fecha.getDate();
    var mes = fecha.getMonth();
    var año = fecha.getFullYear(); 
  
         
    document.write("<h2>Fecha: "+Date()+"</h2>");
    document.write("<h3>Fecha: "+ dia +" / "+(mes+1)+" / "+ año +"</h3>");