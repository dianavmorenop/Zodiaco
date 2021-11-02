let seleccionarDia = document.querySelector('#selectDia'); //Retorna los elementos que cumplan con el criterio dado. 
let seleccionarMes = document.querySelector('#selectMes'); //Retorna los elementos que cumplan con el criterio dado.
seleccionarDia.addEventListener('change', calculaSigno); //Función que permite registrar el evento
seleccionarMes.addEventListener('change', calculaSigno); //Función que permite registrar el evento


function cargarDias(){ //Arreglo que carga los días

  let dia=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]; //Datos que estarán en la lista desplegable 1
  
  dia.forEach( i => //forEach: Blucle
  document.getElementById('selectDia').innerHTML += "<option value='"+dia[i -1]+"'>"+dia[i-1]+"</option>");
}


function cargarMeses(){ //Arreglo que carga los meses

  let mes=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']; //Datos que estarán en la lista desplegable 2

  for (var i in mes){ //For: Blucle

  document.getElementById('selectMes').innerHTML += "<option value='"+mes[i]+"'>"+mes[i]+"</option>";
  
  }
}

function calculaSigno(){ //Función que selecciona los elementos a comparar 
  let diaA=document.getElementById('selectDia'); //Selecciona un elemento del documento por medio del valor del atributo id 
  let diaC = diaA.options[diaA.selectedIndex].value; //Indice de la opción que se encuentra seleccionada
  let mesA=document.getElementById('selectMes'); //Selecciona un elemento del documento por medio del valor del atributo id 
  let mesC = mesA.options[mesA.selectedIndex].value; //Indice de la opción que se encuentra seleccionada

  if((diaC>=21&&mesC=="Marzo")||(diaC<=20&&mesC=="Abril")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Aries";
  }else if((diaC>=24&&mesC=="Septiembre")||(diaC<=23&&mesC=="Octubre")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Libra";
  }else if((diaC>=21&&mesC=="Abril")||(diaC<=21&&mesC=="Mayo")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Tauro";
  }else if((diaC>=24&&mesC=="Octubre")||(diaC<=22&&mesC=="Noviembre")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Escorpio";
  }else if((diaC>=22&&mesC=="Mayo")||(diaC<=21&&mesC=="Junio")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Géminis";
  }else if((diaC>=23&&mesC=="Noviembre")||(diaC<=21&&mesC=="Diciembre")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Sagitario";
  }else if((diaC>=21&&mesC=="Junio")||(diaC<=23&&mesC=="Julio")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Cáncer";
  }else if((diaC>=22&&mesC=="Diciembre")||(diaC<=20&&mesC=="Enero")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Capricornio";
  }else if((diaC>=24&&mesC=="Julio")||(diaC<=23&&mesC=="Agosto")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Leo";
  }else if((diaC>=21&&mesC=="Enero")||(diaC<=19&&mesC=="Febrero")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Acuario";
  }else if((diaC>=24&&mesC=="Agosto")||(diaC<=23&&mesC=="Septiembre")){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Virgo";
  }else if ((diaC>=20&&mesC==2)||(diaC<=20&&mesC==3)){
    document.getElementById("calculaSigno").innerHTML = "Tu signo es: Piscis";
  }
  else{
    document.getElementById("calculaSigno").innerHTML = ""; //Elemento vacío cuando no se ha seleccionado ninguna opción
  }
}

cargarDias(); //Función que carga el arreglo
cargarMeses(); //Función que carga el arreglo