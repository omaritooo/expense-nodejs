const request = require('supertest');
import express from 'express';
import { app, server } from '..';

import { Expenses } from '../models/expenses';
import { testDB } from '../db';

const seeder = [
    {
        title: 'Test',
        description: '',
        value: 231.41,
        type: 'single payment',
        categoryId: 1,
    },
    {
        title: 'Test 2',
        description: '',
        value: 251.41,
        type: 'single payment',
        categoryId: 1,
    },
    {
        title: 'Test 3',
        description: '',
        value: 231.41,
        type: 'loan',
        categoryId: 1,
    },
];

describe('Testing expense endpoints. ', () => {
    beforeEach(async () => {
        await Expenses.bulkCreate(seeder);
        await testDB.sync({ force: true });
        await testDB.sync();
    });
    afterEach(async () => {
        await testDB.drop();
    });
    afterAll(async () => {
        server.close();
        await testDB.drop();
    });
    it('GET all users', async () => {
        const res = await request(app).get('/api/v1/expenses');
        console.log(res.body.data);
        expect(res.status).toBe(200);
    });
    it('POST expense', async () => {
        const slug = {
            title: 'Test',
            description: '',
            value: 231.41,
            type: 'single payment',
            categoryId: 1,
        };
        const response = await request(app).post('/api/v1/expenses').send(slug);
        const { status, data } = response.body;
        expect(data).not.toBe(null);
        expect(data).not.toBe({});
        expect(status).toBe('success');
        expect(response.status).toBe(200);
        expect(data.title).toBe(slug.title);
    });
    it('GET by ID', async () => {
        const res = await request(app).get('/api/v1/expenses/2');
        const { data } = res.body;
        expect(data.id).toBe(2);
    });
    it('DELETE by ID', async () => {
        const res = await request(app).delete('/api/v1/expenses/2');
        const { data } = res.body;
        expect(data.id).toBe(2);
    });
    it('UPDATE by ID', async () => {
        const res = await request(app).put('/api/v1/expenses/2').send({ name: 'Test 15' });
        const { data } = res.body;
        expect(data.name).toBe('Test 15');
    });
});
