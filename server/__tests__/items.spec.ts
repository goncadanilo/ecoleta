import request from 'supertest';

import knex from '../src/database/connection';
import app from '../src/App';

describe('Items', () => {
  afterAll(async () => {
    await knex.destroy();
  });

  it('should returns all registered items', async () => {
    const response = await request(app).get('/v1/items');

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(6);
  });
});
