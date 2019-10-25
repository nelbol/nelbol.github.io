//Criação de funções para organização 
//do código

function mostraVaca(){
  image(imgVaca, xVaca, yVaca, 28, 28);
  image(imgTouro, xTouro, yTouro, 28, 28);
}

function movimentaVaca(){
  //movimenta vaca
  if(keyIsDown(87)){
    //yVaca = yVaca - 3;
    if(yVaca > 5)
      yVaca -= 5;
  }
  if(keyIsDown(83)){
    if(yVaca < 366)
      yVaca += 5;
     }
  //movimenta touro
   if(keyIsDown(UP_ARROW)){
    //yVaca = yVaca - 3;
    if(yTouro > 5)
      yTouro -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(yTouro < 366)
      yTouro += 5;
  }
}
