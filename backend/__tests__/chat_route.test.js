const request = require('supertest');
const express = require('express');
const chatRoutes = require('../routes/chatRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/', chatRoutes);

jest.setTimeout(10000);

test('POST /chat should return a Mushu reply', async () => {
  const res = await request(app)
    .post('/chat')
    .send({ message: 'Hey Mushu, I feel tired.' });

  expect(res.statusCode).toBe(200);
  expect(res.body.reply).toBeDefined();
});

test('POST /chat should return 400 for missing message', async () => {
  const res = await request(app).post('/chat').send({});
  expect(res.statusCode).toBe(400);
  expect(res.body.error).toBe('Missing message in request body');
});
