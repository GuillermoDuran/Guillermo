function calcular(){

    var ingreso = parseInt(document.getElementById('ingresos').value);
    var egresos = parseInt(document.getElementById('egresos').value);
    var diferencia = ingreso - egresos;
    document.getElementById('difer').value = (diferencia)
} 