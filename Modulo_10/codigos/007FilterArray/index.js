import { getPeople } from './StarWarsService.js';

(async function main() {
  const startWarsPeople = await getPeople(1);
  const startWarsPeopleFiltered = startWarsPeople
    .filter(item => {
      return item.height < 160;
    })
    .map(item => {
      const { name, gender, height } = item;
      return { name, gender, height };
    });
  console.log(startWarsPeopleFiltered);
})();
