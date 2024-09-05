let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadexBolinha = 10;
let velocidadeyBolinha = 10;
let xRaquete = 10;
let yRaquete = 200;
let comprimentoRaquete = 20;
let larguraRaquete = 100;
let xraqueteoponente=590
let yraqueteoponente=200
let comprimentoraqueteoponente=20
let larguraraqueteoponente= 100

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentoBolinha();
  colisaoBolinha();
  mostrarRaquete();
  movimentoMinhaRaquete();
  verificaColisãoRaquete();
   mostrarRaqueteoponente()

  function mostrarBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }

  circle(xBolinha, yBolinha, diametro);
  rect(xRaquete, yRaquete, 20, 100);

  function movimentoBolinha() {}
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;

  function colisaoBolinha() {}

  if (yBolinha > height || yBolinha < 0) {
    velocidadeyBolinha *= -1;
  }
  if (xBolinha > width || xBolinha < 0) {
    velocidadexBolinha *= -1;
  }
}

function mostrarRaquete() {
  rect(xRaquete, yRaquete, comprimentoRaquete, larguraRaquete);
}
function movimentoMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function verificaColisãoRaquete() {
  if (
    xBolinha - raio < xRaquete + comprimentoRaquete &&
    yBolinha - raio < yRaquete + larguraRaquete &&
    yBolinha + raio > yRaquete
  ) {
    velocidadexBolinha *= -1;
  }
}
function mostrarRaqueteoponente() {
  rect(xraqueteoponente, yraqueteoponente, comprimentoraqueteoponente, larguraraqueteoponente);
}