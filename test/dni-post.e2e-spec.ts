import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { DniModule } from '../src/dni/dni.module';

describe('DniController POST (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [DniModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /dni/validate DNI with valid format', async () => {
    const res = await request(app.getHttpServer())
      .post('/dni/validate')
      .send({ dni: '12345678Z' })
      .expect(201);

    expect(res.body).toEqual({
      dni: '12345678Z',
      isValid: true,
    });
  });

  it('POST /dni/validate DNI with invalid format', async () => {
    const res = await request(app.getHttpServer())
      .post('/dni/validate')
      .send({ dni: '1234A678' })
      .expect(400);

    expect(res.body.message[0]).toMatch(/DNI with invalid format/i);
  });
});
