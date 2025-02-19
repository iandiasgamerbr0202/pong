//puntos del jugador
let punto = 0

//variables da la pelota
let xPelota = 300;
let yPelota = 200;
let diametro = 15;
let rayo = diametro / 2 ;

//velocidade de la pelota
let velocidadeXPelota = 6;
let velocidadeYPelota = 6;


//variables de la raqueta
let xRaqueta = 5;
let yRaqueta = 150;
let raquetaComprimento = 10;
let raquetaAltura = 90;

function setup() {
  createCanvas(600, 400);
  
}

function draw() {
  background(0);
  crearPelota();
  movimientaPelota();
  verificaContactoPelota();
  crearRaqueta();
  movimientaMyRaqueta();
  verificaContactoRaqueta();
  escribePuntos(10);
}

function crearPelota(){
  circle(xPelota, yPelota, diametro);
}

function movimientaPelota(){
  xPelota += velocidadeXPelota;
  yPelota += velocidadeYPelota;
}

function verificaContactoPelota(){
  if (xPelota + rayo> width ||
     xPelota - rayo< 0){
    velocidadeXPelota *= -1;
  }
  if (yPelota + rayo> height ||
     yPelota - rayo < 0){
    velocidadeYPelota *= -1;
  }
}

function crearRaqueta(){
  rect(xRaqueta, yRaqueta, raquetaComprimento, 
      raquetaAltura);
}

function movimientaMyRaqueta(){
  if (keyIsDown(UP_ARROW)){
    yRaqueta -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaqueta += 10;
  }
}

function verificaContactoRaqueta(){
  if (xPelota - rayo < xRaqueta + raquetaComprimento && 
      yPelota - rayo < yRaqueta + raquetaAltura &&
      yPelota + rayo > yRaqueta)
    {
      velocidadeXPelota *= -1;
      punto += 1;
    }
}
function escribePuntos(x) {
  fill(300);
  switch (punto) {
    case 0:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 1:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 2:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 3:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 4:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 5:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 6:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 7:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 8:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 9:
      text(`Puntos: ${punto}`, x, 25)
      break
    case 10:
    text("Ganaste!!!!", x, 25)
    velocidadeXPelota = 0;
    velocidadeYPelota = 0;
    xRaqueta = 0;
    yRaqueta = 0;
    comprimentoRaqueta = 0;
    break
  }
  
  if (punto === 0) {} 
  else if (punto === 100) {
    
  }
}