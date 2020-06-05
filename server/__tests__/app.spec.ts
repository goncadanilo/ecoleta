import request from 'supertest';

import knex from '../src/database/connection';
import app from '../src/App';

describe('App', () => {
  it('should return 500 if an error occurs in the api', async () => {
    await knex.destroy();

    const response = await request(app).get('/v1/items');

    expect(response.status).toBe(500);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Internal server error');
  });
});
