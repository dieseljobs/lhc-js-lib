import expect from 'expect'
import {
  decode64,
  encode64,
  atob
} from '../../src'

describe('utils crypto', () => {

  it('should handle encoding and decoding base64 string', () => {
    const str = "Don't share my secret sauce"
    const encrypted = encode64( str )
    expect(decode64( encrypted )).toEqual( str )
  })

  it('should handle atob', () => {
    const b64 = "SGVsbG8sIFdvcmxkIQ=="
    const bin = atob(b64)
    expect( bin ).toEqual( "Hello, World!" )
  })

})
