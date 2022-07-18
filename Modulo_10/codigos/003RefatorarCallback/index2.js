import fs from 'fs';
import { promisify } from 'util';

const readFilePromise = promisify(fs.readFile);

let alunos;
// fs.readFile('./alunos.json', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   alunos = JSON.parse(data);
//   console.log('Alunos:', alunos);
// });

readFilePromise('./alunos.json')
  .then(data => {
    alunos = JSON.parse(data);
    console.log('Alunos:', alunos);
  })
  .catch(err => {
    console.error(err);
  });
