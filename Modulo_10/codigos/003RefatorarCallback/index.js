function mensagemGabriel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bebam água');
      resolve();
    }, 1000);
  });
}

function mensagemRafael() {
  console.log('Hidratado! Bora pra cima!');
}

mensagemGabriel().then(mensagemRafael);
// mensagemRafael();
