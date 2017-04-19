import expect from 'expect'
import { humanNumber,
        yearsOld,
        yearsFromNowRange,
        validateEmail
      } from '../src'

describe('lhc-js-lib', () => {

  it('exports humanNumber', () => {
    expect(humanNumber).toBeTruthy()
  })
  it('exports yearsOld', () => {
    expect(yearsOld).toBeTruthy()
  })
  it('exports yearsFromNowRange', () => {
    expect(yearsFromNowRange).toBeTruthy()
  })
  it('exports validateEmail', () => {
    expect(validateEmail).toBeTruthy()
  })

})
