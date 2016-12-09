import expect from 'expect'
import * as dateFormat from '../../lib/helpers/date-format'

describe('Helpers', () => {

  describe('Date Format', () => {

    it('should return yearsOld', () => {
      const today = new Date()
      const thisYear = today.getFullYear()
      const thisMonth = today.getMonth()

      let year = null
      let yearsOld = dateFormat.yearsOld(year)
      let expectedYearsOld = "Unknown"
      expect(yearsOld).toEqual(expectedYearsOld)

      year = "2010"
      yearsOld = dateFormat.yearsOld(year)
      expectedYearsOld = (thisYear - parseInt(year))+" years old"
      expect(yearsOld).toEqual(expectedYearsOld)

      year = "2016"
      yearsOld = dateFormat.yearsOld(year)
      expectedYearsOld = (thisYear - parseInt(year))+" years old"
      expect(yearsOld).toEqual(expectedYearsOld)

      year = "2010"
      yearsOld = dateFormat.yearsOld(year, false)
      expectedYearsOld = (thisYear-parseInt(year)+(thisMonth/12)).toFixed(1)+" years old"
      expect(yearsOld).toEqual(expectedYearsOld)
    })

  })

})
