import expect from 'expect'
import { humanNumber,
        currency,
        yearsOld,
        yearsFromNowRange,
        validateEmail,
        createSessionListener,
        removeAndBroadcastSession,
        setAndBroadcastSession
      } from '../src'

describe('lhc-js-lib', () => {

  it('exports humanNumber', () => {
    expect(humanNumber).toBeTruthy()
  })
  it('exports currency', () => {
    expect(currency).toBeTruthy()
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
  it('exports createSessionListener', () => {
    expect(createSessionListener).toBeTruthy()
  })
  it('exports removeAndBroadcastSession', () => {
    expect(removeAndBroadcastSession).toBeTruthy()
  })
  it('exports setAndBroadcastSession', () => {
    expect(setAndBroadcastSession).toBeTruthy()
  })

})
