import expect from 'expect'
import { varToDate,
         dateStampFormat,
         daysAgoFormat,
         monthDayFormat,
         shortMonthDayFormat,
         yearsOld,
         yearsFromNowRange } from '../../src'

describe('Helpers', () => {

  describe('Date Format', () => {

    const _php_epoch = '1499362748'
    const _epoch = 1499362748000
    const _string = '2017-07-06 13:39:08'
    const _date = new Date( '2017-07-06 13:39:08' )
    const _today = new Date()

    it('should convert epoch time', () => {
      expect(varToDate(_epoch)).toEqual('Thu Jul 06 2017 13:39:08 GMT-0400 (EDT)')
    })

    it('should convert php epoch time', () => {
      expect(varToDate(_php_epoch)).toEqual('Thu Jul 06 2017 13:39:08 GMT-0400 (EDT)')
    })

    it('should convert datetime string', () => {
      expect(varToDate(_string)).toEqual('Thu Jul 06 2017 13:39:08 GMT-0400 (EDT)')
    })

    it('should convert date instance', () => {
      expect(varToDate(_date)).toEqual('Thu Jul 06 2017 13:39:08 GMT-0400 (EDT)')
    })

    it('should handle dateStampFormat', () => {
      expect(dateStampFormat(_date)).toEqual("2017-07-06")
    })

    it('should handle daysAgoFormat Today', () => {
      expect(daysAgoFormat(_today)).toEqual("Today")
    })

    it('should handle monthDayFormat', () => {
      expect(monthDayFormat(_date)).toEqual("July 6")
    })

    it('should handle shortMonthDayFormat', () => {
      expect(shortMonthDayFormat(_date)).toEqual("Jul 6")
    })

    it('should return yearsOld', () => {
      const today = new Date()
      const thisYear = today.getFullYear()
      const thisMonth = today.getMonth()

      let year = null
      let _yearsOld = yearsOld(year)
      let expectedYearsOld = "Unknown"
      expect(_yearsOld).toEqual(expectedYearsOld)

      year = "2010"
      _yearsOld = yearsOld(year)
      expectedYearsOld = (thisYear - parseInt(year))+" years old"
      expect(_yearsOld).toEqual(expectedYearsOld)

      year = "2016"
      _yearsOld = yearsOld(year)
      expectedYearsOld = (thisYear - parseInt(year))+" year old"
      expect(_yearsOld).toEqual(expectedYearsOld)

      year = "2010"
      _yearsOld = yearsOld(year, false)
      expectedYearsOld = (thisYear-parseInt(year)+(thisMonth/12)).toFixed(1)+" years old"
      expect(_yearsOld).toEqual(expectedYearsOld)
    })

    it('should return yearsFromNowRange', () => {
      expect(yearsFromNowRange(2)).toEqual([2017,2018])
    })

  })

})
