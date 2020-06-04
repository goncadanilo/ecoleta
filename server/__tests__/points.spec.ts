import request from 'supertest';
import faker from 'faker';

import knex from '../src/database/connection';
import app from '../src/App';

describe('Points', () => {
  afterAll(async () => {
    await knex.destroy();
  });

  it('should be able to create a new point', async () => {
    const point = {
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
    const response = await request(app).post('/v1/points').send(point);

    delete point.items;

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toMatchObject(point);
  });
});
