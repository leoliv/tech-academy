function mensagemGabriel(callback) {
  setTimeout(() => {
    console.log('Bebam água');
    callback();
  });
}

function mensagemRafael() {
  console.log('Hidratado! Bora pra cima!');
}

mensagemGabriel(mensagemRafael);
