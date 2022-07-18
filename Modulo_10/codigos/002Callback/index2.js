import fs from 'fs';

let alunos;
fs.readFile('./alunos.json', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  alunos = JSON.parse(data);
  console.log('Alunos:', alunos);
});
