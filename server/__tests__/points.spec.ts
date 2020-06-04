import request from 'supertest';

import knex from '../src/database/connection';
import app from '../src/App';
import fakePoint from './fakes/FakePoint';

describe('Points', () => {
  afterEach(async () => {
    await knex('point_items').delete('*');
    await knex('points').delete('*');
  });

  afterAll(async () => {
    await knex.destroy();
  });

  it('should be able to create a new point', async () => {
    const response = await request(app).post('/v1/points').send(fakePoint);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toMatchObject(fakePoint);
  });

  it('should be able to list a specific point by id', async () => {
    const createdPoint = await request(app).post('/v1/points').send(fakePoint);
    const { id } = createdPoint.body;
    const response = await request(app).get(`/v1/points/${id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('point');
    expect(response.body).toHaveProperty('items');
  });
});
