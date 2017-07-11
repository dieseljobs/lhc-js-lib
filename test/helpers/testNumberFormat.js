import expect from 'expect'
import { humanNumber, currency, format2d } from '../../src'

describe('Helpers', () => {

  describe('Number Format', () => {

    it('should return humanNumber', () => {
      let num = 1000000
      let formattedNum = humanNumber(num)
      expect(formattedNum).toEqual("1,000,000")
    })

    it('should return currency', () => {
      let num = 1000000
      let formattedNum = currency(num)
      expect(formattedNum).toEqual("$1,000,000")
    })

    it('should handle format2d', () => {
      expect(format2d(1)).toEqual(1.00)
    })

  })

})
