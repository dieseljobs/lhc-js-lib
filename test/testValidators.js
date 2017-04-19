import expect from 'expect'
import { validateEmail } from '../src'

describe('Validators', () => {

  it('should validate email', () => {
    let email = "aa"
    expect(validateEmail(email)).toEqual(false)

    email = "aaron.kaz@mail"
    expect(validateEmail(email)).toEqual(false)

    email = "aaron.kaz@mail.com"
    expect(validateEmail(email)).toEqual(true)
  })

})
