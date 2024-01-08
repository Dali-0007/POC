import faker from 'Faker';
//const faker = require('faker');

const generateData = (count) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i + 1,
      name: faker.Name.findName(),
      email: faker.Internet.email(),
      
    });
  }
  return data;
};

export default generateData;
