import expect from 'expect'
import { humanNumber,
        currency,
        format2d,
        varToDate,
        dateStampFormat,
        daysAgoFormat,
        longFormat,
        monthDayFormat,
        monthDayYearFormat,
        shortMonthDayFormat,
        yearsOld,
        yearsFromNowRange,
        validateEmail,
        createSessionListener,
        removeAndBroadcastSession,
        setAndBroadcastSession,
        encode64,
        decode64,
        parseJwt
      } from '../src'

describe('lhc-js-lib', () => {

  it('exports humanNumber', () => {
    expect(humanNumber).toBeTruthy()
  })
  it('exports currency', () => {
    expect(currency).toBeTruthy()
  })
  it('exports format2d', () => {
    expect(format2d).toBeTruthy()
  })
  it('exports varToDate', () => {
    expect(varToDate).toBeTruthy()
  })
  it('exports dateStampFormat', () => {
    expect(dateStampFormat).toBeTruthy()
  })
  it('exports daysAgoFormat', () => {
    expect(daysAgoFormat).toBeTruthy()
  })
  it('exports longFormat', () => {
    expect(longFormat).toBeTruthy()
  })
  it('exports monthDayFormat', () => {
    expect(monthDayFormat).toBeTruthy()
  })
  it('exports monthDayYearFormat', () => {
    expect(monthDayYearFormat).toBeTruthy()
  })
  it('exports shortMonthDayFormat', () => {
    expect(shortMonthDayFormat).toBeTruthy()
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
  it('exports encode64', () => {
    expect(encode64).toBeTruthy()
  })
  it('exports decode64', () => {
    expect(decode64).toBeTruthy()
  })
  it('exports parseJwt', () => {
    expect(parseJwt).toBeTruthy()
  })

})
