import faker from 'faker';

const fetchData = () => {
  const arr = [];

  for (let i = 0; i < 20; i++) {
    const genders = ['male', 'female'];
    const gender = faker.random.arrayElement(genders);

    const name = faker.name.firstName(gender);

    const city = faker.address.city();
    const breed = faker.animal.cat();
    const age = faker.datatype.number(20);

    arr.push({ name, gender, city, breed, age });
  }

  return arr;
};

export default fetchData;
