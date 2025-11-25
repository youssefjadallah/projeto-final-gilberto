function animação() {
  const palco = document.getElementById('carousel-stage');

  const imagens = [
    'img/naruto titulo.png',
    'img/jujutsu kaisen titulo.png',
    'img/one piece titulo.png'
  ];
  const descricoes = [
    `<strong>Naruto</strong> é a saga épica de um ninja que transformou a rejeição em <strong>esperança</strong>.<br><br>
Acompanha <strong>Naruto Uzumaki</strong>, um órfão que carrega a temida <strong>Raposa de Nove Caudas</strong>, e sua busca incessante por <strong>reconhecimento</strong> na Vila da Folha.<br><br>
O anime mostra como ele e o <strong>Time 7</strong> superam perdas, ódio e desafios, sempre defendendo os <strong>laços de amizade</strong> (Kizuna) e a <strong>Vontade do Fogo</strong>.<br><br>
<strong>Naruto Shippuden</strong> culmina essa jornada, provando que a <strong>perseverança</strong> de quem nunca desiste pode mudar o <strong>destino</strong> de todo o mundo <strong>Ninja</strong>.`,

    `Em <strong>Jujutsu Kaisen</strong>, o mundo é assolado por <strong>Maldições</strong> — manifestações de emoções negativas humanas.<br><br>
A trama acompanha <strong>Yuji Itadori</strong>, que engole um objeto amaldiçoado e passa a ser o hospedeiro de <strong>Sukuna</strong>, o Rei das Maldições.<br><br>
Como feiticeiro de <strong>Jujutsu</strong>, ele se une a <strong>Nobara</strong> e <strong>Megumi</strong> sob a tutela do poderoso <strong>Gojo Satoru</strong>, para enfrentar essa ameaça sombria.<br><br>
A missão é combater o <strong>ódio</strong> e proteger os <strong>inocentes</strong>, provando que nem mesmo o <strong>destino</strong> mais cruel pode apagar a <strong>humanidade</strong>.`,

    `O mundo de <strong>One Piece</strong> acompanha a jornada de <strong>Monkey D. Luffy</strong>, um garoto com o sonho de ser o <strong>Rei dos Piratas</strong>.<br><br>
A bordo do Thousand Sunny, ele e o bando do <strong>Chapéu de Palha</strong> navegam pela Grand Line em busca do tesouro lendário: o <strong>One Piece</strong>.<br><br>
Guiados pela <strong>liberdade</strong> e pelo senso de <strong>justiça</strong>, eles enfrentam a Marinha, Shichibukai e Yonkou, sempre defendendo o valor da <strong>amizade</strong> e dos seus <strong>sonhos</strong>.<br><br>
Luffy é a prova de que com <strong>determinação</strong>, coragem e lealdade, é possível alcançar o <strong>topo do mundo</strong>.`
  ];
  const cores = ['naruto', 'roxo', 'azul', 'marrom', 'preto', 'rosa'];

  const cartoes = [];
  let i = 0;
  while (i < imagens.length) {

    const cartao = document.createElement('figure');
    cartao.className = 'carousel-card';

    const imagemEl = document.createElement('img');
    imagemEl.src = imagens[i];
    cartao.appendChild(imagemEl);

    console.log(cartao)

    switch (i) {
      case 0:
        corimgprevia = 'naruto'
      break;
      case 1:
        corimgprevia = 'roxo'
      break;
      case 2:
        corimgprevia = 'azul'
      break;
    }

    cartao.dataset.glow = corimgprevia
    //add data glow

    let indiceClicado = i;
    cartao.addEventListener('click', function () {
      irPara(indiceClicado);
    });

    palco.appendChild(cartao);
    cartoes.push(cartao);

    i++;
  }


  let indice = 0;
  const maxVisiveis = 1;


  function deslocamentoRelativo(indiceAlvo) {
    const n = imagens.length;
    let d = (indiceAlvo - indice);
    if (d < -n / 2) d = d + n;
    if (d > n / 2) d = d - n;
    return d;
  }


  function renderizar() {
    for (let k = 0; k < cartoes.length; k++) {
      const desloc = deslocamentoRelativo(k);
      if (Math.abs(desloc) <= maxVisiveis) {
        cartoes[k].dataset.offset = String(desloc);
      } else {
        cartoes[k].dataset.offset = 'out';
      }
    }
  }

  function irPara(novoIndice) {
    indice = novoIndice;
    let conteudo = document.querySelector('.conteudo')
    let titulo = document.querySelector('.titulo')
    let cor = document.querySelector('.icons')
    let imag = document.querySelector('.comp')
    const descricao = document.querySelector('.descrição');
    const texto = descricao.querySelector('.texto');

    const corAtual = cores[indice];
    cor.dataset.offset = corAtual;
    imag.dataset.offset = corAtual;
    conteudo.dataset.offset = corAtual;
    titulo.dataset.offset = corAtual;
    descricao.dataset.glow = corAtual;

    imag.src = `img/${corAtual}comp.png`;

    // Transição suave de texto
    texto.style.opacity = '0';
    setTimeout(() => {
      texto.innerHTML = descricoes[indice];
      texto.style.opacity = '1';
    }, 100);

    switch (indice) {
      case 0:
        cor.dataset.offset = "naruto";
        imag.dataset.offset = "naruto";
        conteudo.dataset.offset = "naruto";
        titulo.dataset.offset = "naruto";
        break

      case 1:
        cor.dataset.offset = "roxo";
        imag.dataset.offset = "roxo";
        conteudo.dataset.offset = "roxo";
        titulo.dataset.offset = "roxo";
        break

      case 2:
        cor.dataset.offset = "azul";
        imag.dataset.offset = "azul";
        conteudo.dataset.offset = "azul";
        titulo.dataset.offset = "azul";
        break
    }
    renderizar();
  }
  renderizar();
}

animação();
