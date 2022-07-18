import express from 'express';
import * as ArticleService from './ArticleService.js';

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  const articles = ArticleService.getArticles();
  res.render('pages/home', { title: 'EJS', articles });
});

app.get('/artigos/:articleId', (req, res) => {
  const articleId = req.params.articleId;
  const article = ArticleService.getArticlesById(articleId);
  const title = article ? article.title : 'Artigo não encontrado';
  res.render('pages/artigos', { title, article });
});
