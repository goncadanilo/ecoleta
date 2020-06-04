import faker from 'faker';

const fakePoint = {
  image: faker.image.image(),
  name: faker.company.companyName(),
  email: faker.internet.email(),
  whatsapp: faker.phone.phoneNumber(),
  latitude: faker.address.latitude(),
  longitude: faker.address.longitude(),
  city: faker.address.city(),
  uf: faker.address.stateAbbr(),
  items: [1, 2, 6],
};

export default fakePoint;
