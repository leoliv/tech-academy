const articles = [
  {
    id: 1,
    title:
      'Construindo diversidade nas empresas: como os grupos fomentam boas práticas?',
    description:
      'Construir uma cultura em que todas as pessoas possam se sentir pertencentes demanda ações, práticas e muita conversa. Isso faz diferença no reflexo da empresa no mercado, na hora de reter grandes talentos e no ritmo de inovação. Estar aberta às diferenças torna a empresa também mais disposta a tomar novos rumos e se manter competitiva em um mercado que muda sempre.',
  },
  {
    id: 2,
    title: 'Entenda por que Elon Musk não vai mais comprar o Twitter',
    description:
      'Depois de algum tempo negociando a aquisição do Twitter, Elon Musk, CEO da Tesla e da Space X, anunciou na última sexta-feira (8) que decidiu encerrar o acordo avaliado em US$ 44 bilhões. Os bots e usuários fakes do Twitter já tinham sido questionados pelo CEO da Tesla, e agora foram apontados como a causa para a compra não se concretizar. Segundo os documentos enviados por Elon Musk ao SEC, Órgão de Negócios dos Estados Unidos, a rede social não conseguiu justificar o número de robôs e contas falsas na plataforma e, portanto, feriu cláusulas do contrato.',
  },
];

function getArticles() {
  return articles;
}

function getArticlesById(articleId) {
  return articles.find(article => article.id == articleId);
}

export { getArticles, getArticlesById };
