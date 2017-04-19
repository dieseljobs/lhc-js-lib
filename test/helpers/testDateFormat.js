import expect from 'expect'
import { yearsOld, yearsFromNowRange } from '../../src'

describe('Helpers', () => {

  describe('Date Format', () => {

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
