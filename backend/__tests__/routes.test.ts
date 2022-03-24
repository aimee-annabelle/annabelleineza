// End To End Testing
import request from 'supertest'
import app from '../src/index'
describe('Post Endpoints', () => {
  it('Get Token Test', async () => {
    const res = await request(app)
      .post('/api/token/get')
      .send({
        amount:900,
        meter_number:122258
        
    })
    expect(res.statusCode).toEqual(201)
  })
  it('Not Add Because Amount is invalid Test', async () => {
    const res = await request(app)
      .post('/api/token/get')
      .send({
        amount:550,
        meter_number:128856
        
    })
    expect(res.statusCode).toEqual(409)
  })
})