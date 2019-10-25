let atropelaVaca = false;
let atropelaTouro = false;

function atropelamento(){
  
  //Teste carro a carro
  for(let i=0; i<imgCarro.length; i++){
    
    atropelaVaca = collideRectRect(xVaca, yVaca, 28, 28, xCarro[i], yCarro[i], 50,30);
    
    if(atropelaVaca){
      //Vaca atropelada
      yVaca = 367;
      if(placarVaca > 0)//Evita placar negativo
        placarVaca -= 1;
    }
    
    atropelaTouro = collideRectRect(xTouro, yTouro, 28, 28, xCarro[i], yCarro[i], 50,30);
    
    if(atropelaTouro){
      //Touro atropelado
      yTouro = 367; 
      if(placarTouro > 0)//Evita placar negativo
        placarTouro -= 1;
    }
    
  }//For
}//atropelamento