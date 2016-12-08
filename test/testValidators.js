import expect from 'expect'
import validators from '../lib/validators'

describe('Validators', () => {

  it('should validate email', () => {
    let email = "aa"
    expect(validators.email(email)).toEqual(false)

    email = "aaron.kaz@mail"
    expect(validators.email(email)).toEqual(false)

    email = "aaron.kaz@mail.com"
    expect(validators.email(email)).toEqual(true)
  })

})
