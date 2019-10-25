let placarVaca = 0;
let placarTouro = 0;

function mostraPlacar(){
  textSize(32);
  
  fill("GREEN");
  text(placarVaca, 190, 28);
  
  fill("BLUE");
  text(placarTouro, 420, 28);
  
  if(yVaca < 15){
    placarVaca += 1;
    ponto.play();
    yVaca = 368;
  }
  
  if(yTouro < 15){
    placarTouro += 1;
    ponto.play();
    yTouro = 368;
  }
}