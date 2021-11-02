function cargarSignoUno(){ //Arreglo que carga los signos de la primera lista
  let signoUno=['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis']
  for (var i in signoUno){
    document.getElementById('selectPrimerSigno').innerHTML += "<option value='"+signoUno[i]+"'>"+signoUno[i]+"</option>";
  } 
}

function cargarSignoDos(){ //Arreglo que carga los signos de la segunda lista
  let signoDos=['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis']
  for (var i in signoDos){
    document.getElementById('selectSegundoSigno').innerHTML += "<option value='"+signoDos[i]+"'>"+signoDos[i]+"</option>";   
  } 
}

function infoCompatibilidad(){ //Función que selecciona los elementos a comparar 
  let signoA=document.getElementById('selectPrimerSigno'); //Selecciona un elemento del documento por medio del valor del atributo id 
  let signoC = signoA.options[signoA.selectedIndex].value; //Indice de la opción que se encuentra seleccionada
  let signoDosA=document.getElementById('selectSegundoSigno'); //Selecciona un elemento del documento por medio del valor del atributo id 
  let signoDosC = signoDosA.options[signoDosA.selectedIndex].value; //Indice de la opción que se encuentra seleccionada

  // Compatibilidad de Aries con los demás signos
  if (signoC=="Aries" && signoDosC=="Aries"){
    document.getElementById("infoSigno").innerHTML = "El nivel de compatibilidad de Aries con Aries es regular. Se pasarán el día midiéndose y se puede establecer una relación de fuerzas constante. Los Aries son muy apasionados, exigentes y competitivos, por lo que es probable, que en esta relación predominen los choques de ego."
  } else if((signoC=="Aries" &&  signoDosC=="Tauro") || (signoC=="Tauro" &&  signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Aries y Tauro es muy buena. Tauro un signo de Tierra, mientras que Aries es un signo de Fuego, por lo que las relaciones entre estos dos signos suelen estar centradas generalmente en el aspecto financiero y materialista de la vida."
  } else if ((signoC=="Aries" &&  signoDosC=="Géminis") || (signoC=="Géminis" &&  signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Aries se suele sentir atraido por la creatividad y la energía de Géminis, y esta combinación promete una gran amistad, una brillante conversación e interesantes momentos de ocio juntos. Por lo que su grado de compatibilidad puede ser muy grande."
  } else if((signoC=="Aries" &&  signoDosC=="Cáncer") || (signoC=="Cáncer" &&  signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Cuando Cáncer empieza una relación con Aries se suele establecer entre ambos una conexión inmediata a nivel emocional. El signo de Cáncer se sentirá muy atraído por el aire apasionado, seguro y entuasta de Aries, quien a su vez, se sentirá en paz al estar con un Cáncer."
  } else if ((signoC=="Leo" &&  signoDosC=="Aries") || (signoC=="Aries" &&  signoDosC=="Leo")){
    document.getElementById("infoSigno").innerHTML = "La atracción inmediata entre Aries y Leo es muy fuerte y por tanto Aries como Leo se crecerán en compañía uno del otro y querrán conocer mejor a su pareja a todos los niveles, fícamente, mentalmente, emocionalmente e incluso, espiritualmente. Por lo tanto, la compatibilidad entre Aries y Leo es altísima."
  } else if((signoC=="Aries" && signoDosC=="Virgo") || (signoC=="Virgo" && signoDosC=="Aries")){ 
    document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Aries y Virgo es regular. Los Virgo suelen ser bastante fríos, prácticos y a veces, críticos, lo que supone un contraste para los Aries que son rápidos, impetuosos e impulsivos."
  } else if ((signoC=="Aries" && signoDosC=="Libra") || (signoC=="Libra" && signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Aries y Libra son signos opuestos, lo cual puede ser bueno, al menos, al inicio de la relación por la atracción de opuestos. No obstante, a medida que el tiempo pasa la novedad desaparece, y puede que haya demasiadas diferencias para que la relación funcione a largo plazo, a menos que exista una base muy fuerte de amor y buena voluntad."
  } else if((signoC=="Aries" &&  signoDosC=="Escorpio") || (signoC=="Escorpio" &&  signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Aries y Escorpio es una combinación muy complicada y ambos signos deberán poner mucho de su parte, para que la relación funcione, debido a sus enormes diferencias entre sus carácteres. Sus planetas regentes, Marte y Saturno, son fuerzas diametralmente opuestas."
  } else if ((signoC=="Aries" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Tanto Aries como Sagitario son signos de Fuego, por lo que a esta combinación no le faltará nada de variedad y emoción, pudiendo ser, en ocaones, explova. La relación despegará directamente desde su comienzo. Su grado de compatibilidad es muy alto."
  } else if((signoC=="Aries" &&  signoDosC=="Capricornio") || (signoC=="Capricornio" &&  signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Aries y Capricornio es una combinación muy complicada y su grado de compatibilidad es bajo. Ambos signos deberán poner mucho de su parte para que la relación funcione, debido a sus enormes diferencias entre sus carácteres. Sus planetas regentes, Marte y Saturno, son fuerzas diamétricamente opuestas."
  } else if ((signoC=="Aries" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries."
  } else if((signoC=="Aries" &&  signoDosC=="Piscis") || (signoC=="Piscis" &&  signoDosC=="Aries")){
    document.getElementById("infoSigno").innerHTML = "Una pareja Aries y Piscis es una combinación difícil con bastantes retos, porque a pesar de una fuerte atracción inicial, existen diferencias importantes entre estos dos signos, que tendrán que ser superadas para que una relación de pareja funcione a largo plazo."
    // Compatibilidad de Tauro con los demás signos  
    }else if((signoC=="Tauro" && signoDosC=="Tauro") || (signoC=="Tauro" && signoDosC=="Tauro")){ 
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Tauro y Tauro es muy alta. Tauro es el signo de la tierra y esto constituye una base muy sólida para la relación. Hay algo simple y franco en los Tauro. Son prácticos y no se complican demaado, por lo que son muy compatibles en una relación."
    }else if((signoC=="Tauro" && signoDosC=="Géminis") || (signoC=="Géminis" && signoDosC=="Tauro")){
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Géminis y Tauro no es muy alta porque aunque los planetas Venus y Mercurio, que rigen sobre Tauro y Géminis, respectivamente, se llevan bien, hay algunas diferencias importantes en las motivaciones y la personalidad de ambos signos."
    }else if((signoC=="Tauro" && signoDosC=="Cáncer") || (signoC=="Cáncer"  && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "Esta combinación Cáncer - Tauro es una de las más compatibles tanto para Cáncer como para Tauro. La gran ventaja es, que estos dos signos disfrutan demostrando su afecto hacia su pareja, y cuando los dos están de buen humor, es una combinación irrestible."
    }else if((signoC=="Tauro" && signoDosC=="Leo") || (signoC=="Leo" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Leo y Tauro es alta, siempre y cuando los dos asuman sus diferencias y las gestionen inteligentemente. Esta combinación mostrará, signos de permanencia, firmeza y devoción, a pesar de producirse fuertes peleas en ocasiones."
    }else if((signoC=="Tauro" && signoDosC=="Virgo") || (signoC=="Virgo" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "Una combinación con compatibilidad muy alta, en realidad Tauro y Virgo tiene todas posibilidades, para tener una relación feliz y estable durante muchos años."
    }else if((signoC=="Tauro" && signoDosC=="Libra") || (signoC=="Libra" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Libra y Tauro no es muy alta, por no decir baja y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación. Hacer perdurar esta relación supone, sin duda, un reto muy interesante."
    }else if((signoC=="Tauro" && signoDosC=="Escorpio") || (signoC=="Escorpio" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Escorpio y Tauro es más alta de lo que podría parecer. Tauro y Escorpio son signos zodiacales opuestos y por eso, a veces, se atraen mutuamente sin remedio. Su primer encuentro podría ser sencillamente increíble y a Tauro le podría sorprender la pasión, que despierta su presencia."
    }else if((signoC=="Tauro" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "El estilo de vida de Sagitario no depende de la costumbre y la estructura como el de Tauro, no que Sagitario tiende a basar su vida en una filosofía de libertad, independencia y espontaneidad. Es poco probable que pueda proporcionar a Tauro la seguridad y comodidad que éste necesita."
    }else if((signoC=="Tauro" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad es muy alta, porque tienen mucho en común y pueden esperar ser muy felices juntos. El sentido práctico de Capricornio se lleva bien con la actitud realista de Tauro. Su conexión inicial con Capricornio será buena y Tauro encontrará muchas militudes con su pareja."
    }else if((signoC=="Tauro" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Acuario y Tauro no es muy alta debido a las incompatibilidades, que existen entre ellos. Pero sí tiene muchas pobilidades siempre y cuando ambos estén dispuestos a esforzarse para que funcione."
    }else if((signoC=="Tauro" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Tauro")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Piscis y Tauro es muy buena aunque sobre todo desde el punto de vista de compañerismo y actividad social.  una pareja Tauro-Piscis decide separarse, lo más seguro es que logren conservar una excelente amistad que puede incluso llegar a incomodar a futuras parejas."
     // Compatibilidad de Géminis con los demás signos 
    }else if((signoC=="Géminis" && signoDosC=="Géminis") || (signoC=="Géminis" && signoDosC=="Géminis")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Géminis con Géminis es alta y lo más probable, que una pareja de dos Géminis tengan una relación llena de diverón, aventura y variedad aunque tengan que aprender virtudes como la paciencia y el compromiso para que funcione a largo plazo."
    }else if((signoC=="Géminis" && signoDosC=="Cáncer") || (signoC=="Cáncer" && signoDosC=="Géminis")){  
      document.getElementById("infoSigno").innerHTML = "Cáncer, regido por la Luna, es senble y emocional y ente más que piensa. Géminis, en cambio, es más intelectual y reflexivo, y actua más con la cabeza que con el corazón. Cáncer es más temperamental, algo que a Géminis tal vez le cueste comprender. Cáncer es muy hogareño, mientras que a Géminis le encanta una buena fiesta."
    }else if((signoC=="Géminis" && signoDosC=="Leo") || (signoC=="Leo" && signoDosC=="Géminis")){ 
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse."
    }else if((signoC=="Géminis" && signoDosC=="Virgo") || (signoC=="Virgo" && signoDosC=="Géminis")){ 
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Géminis con Virgo es bastante alta, sobre todo  los dos se esfuerzan en comprender y escuchar a su pareja."
    }else if((signoC=="Géminis" && signoDosC=="Libra") || (signoC=="Libra" && signoDosC=="Géminis")){ 
      document.getElementById("infoSigno").innerHTML = "Géminis y Libra presentan una excelente compatibilidad, por lo que  esta es la combinación de tu relación hay muchas probabilidades de que seas extremadamente feliz durante mucho tiempo.Incluso se trata de una combinación tan afortunada, que se podría decir que existe un toque de magia entre ambos signos."
    }else if((signoC=="Géminis" && signoDosC=="Escorpio") || (signoC=="Escorpio" && signoDosC=="Géminis")){ 
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Escorpio y Géminis es bastante baja y ambas partes de la relación deberán trabajar duramente para conseguir, que funcione, si son lo suficientemente decididos, podría ser posible, pero deberán tener cuidado o se podrían ver envueltos en un escenario en el, que incluso dirigirse la palabra les resultaría difícil."
    }else if((signoC=="Géminis" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Géminis")){ 
      document.getElementById("infoSigno").innerHTML = "Esta combinación de energías planetarias resulta intrigante. Sagitario es el signo opuesto a Géminis y el que resulte bien o no dependerá de la perspectiva, que tomen ambos.Esta mezcla de diferencias y milaridades en sus personalidades implica, que ambos deberán esforzarse un poco para que la relación funcione."
    }else if((signoC=="Géminis" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Géminis")){
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Capricornio con Géminis es bastante baja, dada la forma tan distinta, que tienen de enfocar la vida. A ambos signos tendrán, que hacer un gran esfuerzo para que la relación funcione a largo plazo."
    }else if((signoC=="Géminis" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Géminis")){ 
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre los signos Acuario y Géminis es muy alta, ya que ambos esperan sacar más o menos lo mismo de la vida.Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte."
    }else if((signoC=="Géminis" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Géminis")){ 
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Piscis y Géminis no es una de las más altas de estos signos y ambos tendrán, que esforzarse para hacer, que la relación funcione. Sus elementos de aire y agua son muy distintos porque mientras, que el Aire está relacionado con la mente, el Agua está relacionado con las emociones."
     // Compatibilidad de Cáncer con los demás signos 
    }else if((signoC=="Cáncer" && signoDosC=="Cáncer") || (signoC=="Cáncer" && signoDosC=="Cáncer")){
      document.getElementById("infoSigno").innerHTML = "El grado de compatibilidad entre dos Cáncer es muy alto. Es una combinación muy buena, ya que los Cáncer son un signo, que hay que entender para avanzar y ¿Quién mejor para entenderse que ellos mismos?"
    }else if((signoC=="Cáncer" && signoDosC=="Leo") || (signoC=="Leo" && signoDosC=="Cáncer")){ 
      document.getElementById("infoSigno").innerHTML = "Cáncer-Leo es una combinación es muy compatible. Tanto Cáncer como Leo tienen un ego bastante frágil, son vulnerables y no encajan bien la crítica, porque se ofenden con facilidad. Ambos signos necetan cariño y mucha atención de su pareja."
    }else if((signoC=="Cáncer" && signoDosC=="Virgo") || (signoC=="Virgo" && signoDosC=="Cáncer")){
      document.getElementById("infoSigno").innerHTML = "Una combinación Cáncer y Virgo tiene compatibilidad muy alta. Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles."
    }else if((signoC=="Cáncer"  && signoDosC=="Libra") || (signoC=="Libra" && signoDosC=="Cáncer")){
      document.getElementById("infoSigno").innerHTML = "La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja  hay una base de amor y pasión muy fuerte."
    }else if((signoC=="Cáncer"  && signoDosC=="Escorpio") || (signoC=="Escorpio" && signoDosC=="Cáncer")){ 
      document.getElementById("infoSigno").innerHTML = "Las personas, que nacen bajo el mismo elemento suelen sentirse cómodas y atraerse entre sí. Este es el caso de Cáncer y Escorpio. Tiene un grado de compatibilidad alto. Ambos son sensibles, emocionales y cariñosos, pero Escorpio tiene un modo muy distinto de expresar el amor."
    }else if((signoC=="Cáncer" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Cáncer")){  
      document.getElementById("infoSigno").innerHTML = "El grado de compatibilidad entre Cáncer y Sagitario es más bien bajo. Aunque hay una posibilidad de que Cáncer y Sagitario experimenten una fuerte atracción al conocerse, la relación puede no estar destinada a funcionar a largo plazo."
    }else if((signoC=="Cáncer" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Cáncer")){  
      document.getElementById("infoSigno").innerHTML = "La Compatibilidad entre Cáncer y Capricornio es más bien baja. A pesar de las importantes diferencias entre los signos de Cáncer y Capricornio, es posible que se establezca una relación entre los dos, aunque ambos deberán poner un poco de su parte. Mientras que los Cáncer son cariñosos y expresivos, a Capricornio le cuesta expresar sus sentimientos."
    }else if((signoC=="Cáncer"  && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Cáncer")){  
      document.getElementById("infoSigno").innerHTML = "La combinación de los signos Cáncer y Acuario presenta muchos retos en una pareja. La compatibilidad es baja a primera vista, aunque gracias a que ambos signos son muy persistentes,  hay suficientemente amor y disposición de esforzarse, una relación duradera es difícil, pero no imposible."
    }else if((signoC=="Cáncer"  && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Cáncer")){  
      document.getElementById("infoSigno").innerHTML = "Piscis y Cáncer tienen mucho en común, especialmente en cuanto a compatibilidad emocional. Ambos signos se entienden instintivamente entre sí y enten las necedades del otro. Ambos son cariñosos y dan apoyo a su pareja."
      // Compatibilidad de Leo con los demás signos 
    }else if((signoC=="Leo" && signoDosC=="Leo") || (signoC=="Leo" && signoDosC=="Leo" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "Cuándo dos Leo se conocen, las llamas del amor y los rugidos de pasión hacen que toda la jungla tiemble de delicia. Leo, el León es el monarca del Zodiaco y la combinación real es observada con entuasmo por los demás, ya que se exhibe para, que todos la vean. Su grado de compatibilidad es altíma."
    }else if((signoC=="Leo" && signoDosC=="Virgo") || (signoC=="Virgo" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Leo con Virgo es regular, y ambos signos tendrán, que trabajar bastante para que la relación sea duradera. La personalidad de Leo es muy distinta a la de Virgo. Leo busca ser el centro de atención, mentras que Virgo es una persona mucho más privada."
    }else if((signoC=="Leo" && signoDosC=="Libra") || (signoC=="Libra" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "El sabroso mejunje de Libra, la Balanza, y Leo, el León, es exquito. Libra busca una relación con una ferviente fascinación. Libra vive para el amor y el estilo. Leo es intrépido, brillante y muy animado. Tienen un nivel de compatiblidad muy alto."
    }else if((signoC=="Leo" && signoDosC=="Escorpio") || (signoC=="Escorpio" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Escorpio y Leo es bastante baja. La atracción es enorme, pero el choque fuertes caracteres más. El romántico Leo, un signo de Fuego, es autosuficiente y seguro y un amante ardiente, lleno de encanto personal y magnetismo físico.Un reto maravilloso."
    }else if((signoC=="Leo" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "El intrépido Leo y el aventurero Sagitario forman una combinación romántica natural también pueden ser los mejores amigos. Dos signos de Fuego juntos encenderán pasiones abrasadoras en el dormitorio, dado que ambos entienden instintivamente las necesidades más profundas del otro. Su compatibilidad es muy alta."
    }else if((signoC=="Leo" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "Capricornio y Leo son una pareja muy improbable, pero a veces esta combinación puede funcionar muy bien. Parece haber una conexión kármica entre ambos, especialmente  están conectados por una relación familiar. Si ambos dejan a un lado su orgullo y trabajan juntos por un fin común, podría ser una relación muy gratificante."
    }else if((signoC=="Leo" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "A los Acuario les gusta el calor, la generodad y la energía de Leo mientras, que a los Leo les impresiona la capacidad intelectual y la seguridad de Acuario.Los dos signos son muy distintos, pero a pesar de sus diferencias logran atraerse e impreonarse. Son signos opuestos que se atraen o como ya se ha demostrado en Astrología"
    }else if((signoC=="Leo" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Leo")){  
      document.getElementById("infoSigno").innerHTML = "Leo se sentirá atraído por el sexy, pero vulnerable, Piscis. Piscis también se siente atraído por el León, al percibir que Leo tiene un corazón cálido y una fuerza interior que puede estar ahí para él cuando los terrores de la noche acechen. Su compatibilidad y complementariedad pueden ser muy grandes."
     // Compatibilidad de Virgo con los demás signos 
    }else if((signoC=="Virgo" && signoDosC=="Virgo") || (signoC=="Virgo" && signoDosC=="Virgo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Virgo con Virgo es muy alta y en esta relación la palabra clave es el perfeccionismo y de ahí se deriva el principal problema, que deban superar - exigencias excesivas. Virgo es tremendamente aplicado y  funcionan como pareja, juntos serán capaces de mover montañas."
    }else if((signoC=="Virgo" && signoDosC=="Libra") || (signoC=="Libra" && signoDosC=="Virgo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Libra con Virgo no es muy alta y para que funcione la relación ambos signos tendrán que trangir. No obstante, cuando funciona puede formarse una pareja muy equiLibrada y muy especial, sobre todo cuando ambos logran convertir sus diferencias en un activo complementario para su pareja."
    }else if((signoC=="Virgo" && signoDosC=="Escorpio") || (signoC=="Escorpio" && signoDosC=="Virgo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Escorpio con Virgo es bastante alta, ya que la combinación de Tierra con Agua hace, que esta relación suele ser fructífera en muchos sentidos."
    }else if((signoC=="Virgo" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Virgo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Sagitario con Virgo no es muy alta dadas las grandes diferencias, que existen entre estos dos signos. Mientras, que Virgo presta atención a los pequeños detalles, Sagitario tiende a centrarse en la visión global."
    }else if((signoC=="Virgo" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Virgo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Capricornio con Virgo es muy alta gracias a una combinación de elementos similares, que da una buena base para su relación. Virgo tendrá una compenetración inmediata con Capricornio. Por algún motivo, Capricornio parece menos serio, para Virgo que para otros signos del Zodiaco."
    }else if((signoC=="Virgo" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Virgo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Acuario con Virgo es una de las más bajas del Zodiaco y tendrá, que haber mucho amor para que esta relación tenga posibilidades a largo plazo. Nada es imposible y todo con esfuerzo se consigue, así que  esta es la combinación de su relación, ¡Manos a la obra!"
    }else if((signoC=="Virgo" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Virgo")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicción entre los dos signos.Son dos signos opuestos: algo que paradójicamente en Astrología se suele considerar como un indicador positivo de amor y matrimonio. Al mismo tiempo, sus enfoques de la vida son muy diferentes y sus personalidades también."
     // Compatibilidad de Libra con los demás signos 
    }else if((signoC=="Libra" && signoDosC=="Libra") || (signoC=="Libra" && signoDosC=="Libra")){  
      document.getElementById("infoSigno").innerHTML = "Cuando el estiloso Libra encuentra a otro Libra, la atracción es inmediata. El gusto atrae al gusto. La magia favorable de esta unión Aire - Aire tiene sus retos pero, una vez resueltos, los dos disfrutarán de una pareja comprensiva y un romance de por vida."
    }else if((signoC=="Libra" && signoDosC=="Escorpio") || (signoC=="Escorpio" && signoDosC=="Libra")){  
      document.getElementById("infoSigno").innerHTML = "La pareja formada por Escorpio y Libra tiene la gran ventaja de ser una relación muy equlLibrada porque la compatibilidad entre estos dos signos es altísima."
    }else if((signoC=="Libra" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Libra")){  
      document.getElementById("infoSigno").innerHTML = "La combinación de Libra, la Balanza, y Sagitario, el Arquero, es muy buena. Libra es el punto focal de la elegancia en el zodíaco. Regido por Venus, el planeta de amor y el placer sensual, Libra busca una relación con una ferviente fascinación. Libra vive para el amor y el estilo."
    }else if((signoC=="Libra" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Libra")){  
      document.getElementById("infoSigno").innerHTML = "Libra-Capricornio no es la combinación más cómoda del Cosmos por varias razones, pero eso no significa que no puedan aprender a estar juntos y amarse mucho. De hecho,  aprenden a apreciar y respetar las fortalezas y debilidades del otro, los dos pueden llegar a ser mucho mejor persona. solo hará falta paciencia y comprensión."
    }else if((signoC=="Libra" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Libra")){  
      document.getElementById("infoSigno").innerHTML = "En la relación Libra-Acuario, ambos signos son sociables, les encanta conversar y disfrutan con reuniones y actos sociales. Los dos son muy extrovertidos y suelen tener muchos amigos. A los dos les gusta la independencia y por eso no será un problema dar y disfrutar de cierta libertad dentro de su relación."
    }else if((signoC=="Libra" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Libra")){  
      document.getElementById("infoSigno").innerHTML = "Libra y Piscis son una combinación inusual, pero la atracción entre ambos puede ser intensa. El aire y el agua no se mezclan fácilmente, por lo que Libra tendrá que estar atento a las necedades de Piscis, incluso aunque no empre entienda cuáles son. No es de ninguna manera una combinación fácil, pero cuándo funciona, tiene una calidad especial."
      // Compatibilidad de Escorpio con los demás signos 
    }else if((signoC=="Escorpio" && signoDosC=="Escorpio") || (signoC=="Escorpio" && signoDosC=="Escorpio")){  
      document.getElementById("infoSigno").innerHTML = "La atracción sexual entre dos apasionados Escorpio es fuerte, pero la temperatura no puede ir siempre en aumento. Los dos son muy parecidos y, sin embargo, apenas se entienden mutuamente. La duplicidad del elemento Agua le imprime un profundo poder emocional y hace de lupa, que magnifica cada uno de los elementos de la compleja individualidad de ambos."
    }else if((signoC=="Escorpio" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Escorpio")){  
      document.getElementById("infoSigno").innerHTML = "La pareja formado por Sagitario y Escorpio es una combinación muy difícil porque mientras el aventurero Sagitario adora los cambios y la exploración de horizontes lejanos, asumiendo todo tipo de riesgos (físicos, emocionales y espirituales) para, a continuación, pasar al siguiente gran reto."
    }else if((signoC=="Escorpio" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Escorpio")){  
      document.getElementById("infoSigno").innerHTML = "Se trata de una combinación apasionada y fiel, y puede ser una de las mejores del Zodíaco. Incluso  no es una relación romántica, es probable, que los dos sean cariñosos mutuamente y se entan muy cómodos con el contacto fíco."
    }else if((signoC=="Escorpio" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Escorpio")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Escorpio y Acuario es bastante baja. Ambos tienen personalidades muy diferentes y su forma de enfocar la vida y las relaciones íntimas es muy distinto. Por otra parte, dónde sí se parecen es su actitud cabezota de imponerse al otro, querer tener empre razón y las ganas de discutir. ¡Peligro! porque son actitudes, que les pueden llevar a la ruptura."
    }else if((signoC=="Escorpio" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Escorpio")){  
      document.getElementById("infoSigno").innerHTML = "La atracción de Escorpio y Piscis es irrestible, una unión con todas las pobilidades de éxito. Los dos son apasionados y leales, por lo que es fácil que disfruten de un compañerismo natural. Escorpio es un signo Fijo, por lo que una vez que se compromete, se entrega totalmente."
     // Compatibilidad de Sagitario con los demás signos 
    }else if((signoC=="Sagitario" && signoDosC=="Sagitario") || (signoC=="Sagitario" && signoDosC=="Sagitario")){  
      document.getElementById("infoSigno").innerHTML = "Dos Sagitarios juntos forman un equipo formidable. Algunos astrólogos piensan, que es la combinación perfecta y en muchas formas, es muy apropiada. Se pueden atraer con una conversación estimulante, dado que ambos tendrán intereses similares y cuándo a uno le apremie el impulso de empaquetar y partir a la aventura en busca de horizontes lejanos, el otro lo seguirá encantado."
    }else if((signoC=="Sagitario" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Sagitario")){  
      document.getElementById("infoSigno").innerHTML = "Sagitario no parece tener mucho en común con Capricornio, pero aún así puede ser una combinación razonablemente buena. Los dos tendrán, que aprender a apreciar sus diferencias antes de poder sentirse cómodos juntos, pero una vez hecho esto, puede ser un equipo muy exitoso."
    }else if((signoC=="Sagitario" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Sagitario")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Sagitario y Acuario es bastante alta y  ambos se esfuerzan un poco, lo más probable es que su relación sea larga y feliz."
    }else if((signoC=="Sagitario" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Sagitario")){  
      document.getElementById("infoSigno").innerHTML = "Piscis y Sagitario son complementarios y compatibles. Tanto el imaginativo Piscis como el aventurero Sagitario están regidos por Júpiter, el planeta de los sueños y amplios horizontes. Sagitario, como signo de Fuego, expresa el lado filosófico y viajero de Júpiter, pasando fácilmente de una escapada a otra."
     // Compatibilidad de Capricornio con los demás signos 
    }else if((signoC=="Capricornio" && signoDosC=="Capricornio") || (signoC=="Capricornio" && signoDosC=="Capricornio")){  
      document.getElementById("infoSigno").innerHTML = "Esta puede ser una combinación muy compatible, pero también podría adolecer del síndrome de demasiado buena. Si ambos tienen suficientes intereses diferentes como para evitar caer en la rutina y consiguen mantener un equilibrio sano de poder, podría ser una relación muy feliz."
    }else if((signoC=="Capricornio" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Capricornio")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Capricornio y Acuario puede ser bastante alta. Si  los dos logran que las importantes diferencias que existen entre ellos, se conviertan en un punto potivo de la pareja.  Sino, la relación será muy tormentosa y es probable, que lejos de complementarse, los dos terminen completamente agotados"
    }else if((signoC=="Capricornio" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Capricornio")){  
      document.getElementById("infoSigno").innerHTML = "Piscis es una combinación excelente para Capricornio, aunque al principio pueda haber dudas. Piscis es un soñador y puede parecer frágil, pero a veces una sutil entereza se puede confundir con debilidad. Las fortalezas combinadas de ambos ayudan a compensar sus debilidades individuales, y juntos forman un equipo sólido y satisfactorio."
     // Compatibilidad de Acuario con los demás signos 
    }else if((signoC=="Acuario" && signoDosC=="Acuario") || (signoC=="Acuario" && signoDosC=="Acuario")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre dos Acuario es alta, ya que, no hay ningún signo con mayor capacidad para comprender el signo y de no sentirse amenazado por su forma de ser tan distinta y singular."
    }else if((signoC=="Acuario" && signoDosC=="Piscis") || (signoC=="Piscis" && signoDosC=="Acuario")){  
      document.getElementById("infoSigno").innerHTML = "La compatibilidad entre Piscis y Acuario no es muy alta y para, que una relación de pareja sea duradera, tendrá que haber una base sólida de amor y comprensión, así como mucho interés por parte de ambos signos. Sin embargo, la compatibilidad para una relación de amigos es mayor."
     // Compatibilidad de Piscis con piscis 
    }else if((signoC=="Piscis" && signoDosC=="Piscis" ) || (signoC=="Piscis" && signoDosC=="Piscis")){  
      document.getElementById("infoSigno").innerHTML = "Piscis, el signo de los Peces, es un signo de Agua. Dos peces juntos pueden crear un paraíso privado o un infierno en la tierra, dependiendo de  eligen nadar río abajo o contra corriente. Si bien los dos se enten irrestiblemente atraídos el uno por el otro, ambos son propensos a perderse en sueños y fantasías."
    }else{ // Espacio vacío cuando no se haya seleccionado ningún signo
      document.getElementById("infoigno").innerHTML = "";
    }
}

cargarSignoUno(); //Función que carga el arreglo #1
cargarSignoDos(); //Función que carga el arreglo #2