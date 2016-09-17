var start = setInterval(function(){avanzaSlide()},5000);
 

var arrayImagenes = new Array(".bannerimg",".bannerimg2");
 

var contador = 0;
 

function mostrar(img){
  $(img).ready(function(){        
      $(arrayImagenes[contador]).fadeIn(5000);    
  });
}
 
function ocultar(img){
  $(img).ready(function(){        
      $(arrayImagenes[contador]).fadeOut(5000);   
  });
}

function avanzaSlide(){
        
   ocultar(arrayImagenes[contador]);
        
    contador = (contador + 1) % 2;

    mostrar(arrayImagenes[contador]);
}
