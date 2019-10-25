function setup() {
  createCanvas(600, 400);
  trilha.setVolume(0.2);
  trilha.loop();
}

function draw() {
  if(frameCount > 400){ // +/- 8s
    if(placarVaca <=5 && placarTouro <=5){
      jogar();
      console.log("Vaca: " + placarVaca + " Touro: " + placarTouro);
  }else
      verificaVencedor();
}else{
  telaInicial();
 }
}

function verificaVencedor(){
  if(placarVaca >= 5)
    vacaVencedora(); //Tela Final
  else
    touroVencedor(); // Tela Final
}

function  touroVencedor(){
 background("Darkorchid")
 textStyle(BOLD);
 textAlign(CENTER);
 fill("DarkOrage");
 textSize(48);
 text("Touro Victoria", 200, 90);
 image(imgTouro, 200, 100, 200, 200);
}

function vacaVencedora(){
 background("Chartreuse")
 textStyle(BOLD);
 textAlign(CENTER);
 fill("Chocolate");
 textSize(48);
 text("Vaca Victoria", 200, 90);
 image(imgVaca, 200, 100, 200, 200);
}

function telaInicial(){
 fill("chartreuse");
 background("silver")
 textStyle(BOLD);
 textAlign(CENTER);
 fill("Chocolate");
 textSize(48);
 text("Jogo da Av. 1º de Maio", 300, 190);
 textSize(24);
 text("Desenvolvido por Gabriel", 300, 230);
}

function jogar(){
  background(imgEstrada);
  mostraCarros();
  mostraVaca();
  movimentaCarros();
  movimentaVaca();
  atropelamento();
  mostraPlacar();

  
}