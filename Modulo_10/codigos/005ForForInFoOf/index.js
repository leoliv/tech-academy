import { getPeople } from './StarWarsService.js';

async function main() {
  const startWarsPeople = await getPeople(2);
  // for (let i = 0; i < startWarsPeople.length; i++) {
  //   console.log(startWarsPeople[i].name);
  // }

  // for (let prop in startWarsPeople[0]) {
  //   console.log(startWarsPeople[0][prop]);
  // }

  for (let date of startWarsPeople) {
    console.log(date.name);
  }
}

main();
