// Unit Test
import moment from 'moment'
import {calculateExpirationDate} from '../src/helpers/calculations'
describe('Post Endpoints', () => {
  it('Return Expiration Date Test', async () => {
    const expiration_date = calculateExpirationDate(400)
    const expected_date = moment().subtract(4, 'days').add(1,'second').toDate()
    expect(expiration_date).toBe(expiration_date)
  })
  it('Return False Amount is invalid', async () => {
    const expiration_date = calculateExpirationDate(450)
    expect(expiration_date).toBeFalsy()
  })
  it('Token Expiration', async () => {
    const expiration_date = calculateExpirationDate(400)
    const expected_date = moment().subtract(4, 'days').add(1,'second').toDate()
    expect(expiration_date).toBe(expiration_date)
  })
  it('Invalidity', async () => {
    const expiration_date = calculateExpirationDate(450)
    expect(expiration_date).toBeFalsy()
  })
})