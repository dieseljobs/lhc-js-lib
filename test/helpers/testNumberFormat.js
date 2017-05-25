import expect from 'expect'
import { humanNumber, currency } from '../../src'

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

  })

})
