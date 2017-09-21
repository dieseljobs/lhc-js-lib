import expect from 'expect'
import {
  decode64,
  encode64
} from '../../src'

describe('utils crypto', () => {

  it('should handle encoding and decoding base64 string', () => {
    const str = "Don't share my secret sauce"
    const encrypted = encode64( str )
    expect(decode64( encrypted )).toEqual( str )
  })

})
