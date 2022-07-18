import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  return res.send('<h1>Trabalhando com servidor Express</h1>');
});
