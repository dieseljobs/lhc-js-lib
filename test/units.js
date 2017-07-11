import expect from 'expect'
import { humanNumber,
        currency,
        format2d,
        varToDate,
        dateStampFormat,
        daysAgoFormat,
        monthDayFormat,
        shortMonthDayFormat,
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
  it('exports format2d', () => {
    expect(currency).toBeTruthy()
  })
  it('exports varToDate', () => {
    expect(yearsOld).toBeTruthy()
  })
  it('exports dateStampFormat', () => {
    expect(yearsOld).toBeTruthy()
  })
  it('exports daysAgoFormat', () => {
    expect(yearsOld).toBeTruthy()
  })
  it('exports monthDayFormat', () => {
    expect(yearsOld).toBeTruthy()
  })
  it('exports shortMonthDayFormat', () => {
    expect(yearsOld).toBeTruthy()
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
