const city = [];

// PUSH - adicionar no final
city.push('São Paulo', 'Rio', 'Brasilia', 'Goianias');
console.log(city);

// UNSHIFT - adicionar no começo
city.unshift('Campinas');
console.log(city);

// POP - remover o último elemento - retorna o elemento removido
city.pop();
console.log(city);

// POP - remover o último elemento - retorna o elemento removido
city.shift();
console.log(city);

// SPLICE - remover 1 ou + itens - utilizando um indece

const indece = city.indexOf('Rio');
console.log(indece);

city.splice(indece, 1);
console.log(city);

// CONCAT - contatenação de arrays

const cidadesInterior = ['Araraquara', 'araras', 'Limeira'];
const cidadesMetropolitanas = ['Campinas', 'São Paulo'];
const cidadesInteriorMetropolitanas = cidadesInterior.concat(
  cidadesMetropolitanas,
);

console.log(cidadesInteriorMetropolitanas);
