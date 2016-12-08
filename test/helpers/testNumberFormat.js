import expect from 'expect'
import * as numberFormat from '../../src/helpers/number-format'

describe('Helpers', () => {

  describe('Number Format', () => {

    it('should return humanNumber', () => {
      let num = 1000000
      let formattedNum = numberFormat.humanNumber(num)
      expect(formattedNum).toEqual("1,000,000")
    })

  })

})
