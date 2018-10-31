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

  it('should handle deep nested from php', () => {
    const b64 = "eyJ1c3IiOnsic2V0dGluZ3MiOnsic2lnbmF0dXJlIjoiPHA+RXJpYyBKb2huc29uPC9wPjxwPmVyaWNAdWVndWlkZS5jb208L3A+PHA+cGhvbmUgIzwvcD4ifX19"
    const bin = atob(b64)
  })

  it('should handle jwt', () => {
    const b641 = "eyJpc3MiOiJodHRwOi8vdXNlZGVxdWlwbWVudGd1aWRlLmxvY2FsaG9zdDo4MDgwL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTQxMDAzMTU0LCJleHAiOjE1NDEwMDY3NTQsIm5iZiI6MTU0MTAwMzE1NCwianRpIjoib05KQWg4emxSMUNEVHlDeiIsInN1YiI6NCwiYXVkIjoieDhSV29OZ05uYXpwNFNvU0Y4a0J4QmFiYkRTME5sOTlyWFNtU0kwRSIsInVzciI6eyJpZCI6NCwibGV2ZWwiOjgsImVtYWlsIjoiYWFyb25AdWVndWlkZS5jb20iLCJjcmVhdGVkX2F0IjoiMjAxNy0wMy0yOSAxNzoxMDozNyIsInZlcmlmaWVkIjoieWVzIiwiZm5hbWUiOiJBYXJvbiIsImxuYW1lIjoiS2Fjem1hcmVrIiwibG9jYXRpb25fbGFiZWwiOiJCdWVub3MgQWlyZXMsIEFyZ2VudGluYSIsImxvY2F0aW9uX2xhdCI6Ii0zNC42MDM2ODQiLCJsb2NhdGlvbl9sb24iOiItNTguMzgxNTU5IiwibG9jYXRpb25fY291bnRyeSI6IlVTIiwic2V0dGluZ3MiOnsiY3VycmVuY3kiOm51bGwsInVuaXRzIjpudWxsLCJsYW5ndWFnZSI6bnVsbCwic2lnbmF0dXJlIjoiPHA+dGVzdCBzaWduYXR1cmU8L3A+In0sImNvbXBhbnkiOiJVc2VkIEVxdWlwbWVudCBHdWlkZSJ9LCJzcG9vZiI6ZmFsc2UsImxvYyI6eyJsYWJlbCI6IkJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hIiwibGF0IjoiLTM0LjYwMzY4NCIsImxvbiI6Ii01OC4zODE1NTkiLCJjb3VudHJ5IjoiVVMiLCJ1bml0cyI6Im1pIiwiZGVjaW1hbFNlcGFyYXRvciI6ZmFsc2V9LCJjdXIiOnsiY29kZSI6IlVTRCIsImZhY3RvciI6IjEuMDAwMDAiLCJzeW1ib2wiOiIkIn0sInJlbSI6dHJ1ZX0="
    const b642 = "eyJpc3MiOiJodHRwOi8vdXNlZGVxdWlwbWVudGd1aWRlLmxvY2FsaG9zdDo4MDgwL2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNTQxMDAzMTU0LCJleHAiOjE1NDEwMDY3NTQsIm5iZiI6MTU0MTAwMzE1NCwianRpIjoib05KQWg4emxSMUNEVHlDeiIsInN1YiI6NCwiYXVkIjoieDhSV29OZ05uYXpwNFNvU0Y4a0J4QmFiYkRTME5sOTlyWFNtU0kwRSIsInVzciI6eyJpZCI6NCwibGV2ZWwiOjgsImVtYWlsIjoiYWFyb25AdWVndWlkZS5jb20iLCJjcmVhdGVkX2F0IjoiMjAxNy0wMy0yOSAxNzoxMDozNyIsInZlcmlmaWVkIjoieWVzIiwiZm5hbWUiOiJBYXJvbiIsImxuYW1lIjoiS2Fjem1hcmVrIiwibG9jYXRpb25fbGFiZWwiOiJCdWVub3MgQWlyZXMsIEFyZ2VudGluYSIsImxvY2F0aW9uX2xhdCI6Ii0zNC42MDM2ODQiLCJsb2NhdGlvbl9sb24iOiItNTguMzgxNTU5IiwibG9jYXRpb25fY291bnRyeSI6IlVTIiwic2V0dGluZ3MiOnsiY3VycmVuY3kiOm51bGwsInVuaXRzIjpudWxsLCJsYW5ndWFnZSI6bnVsbCwic2lnbmF0dXJlIjoiPHA-dGVzdCBzaWduYXR1cmU8L3A-In0sImNvbXBhbnkiOiJVc2VkIEVxdWlwbWVudCBHdWlkZSJ9LCJzcG9vZiI6ZmFsc2UsImxvYyI6eyJsYWJlbCI6IkJ1ZW5vcyBBaXJlcywgQXJnZW50aW5hIiwibGF0IjoiLTM0LjYwMzY4NCIsImxvbiI6Ii01OC4zODE1NTkiLCJjb3VudHJ5IjoiVVMiLCJ1bml0cyI6Im1pIiwiZGVjaW1hbFNlcGFyYXRvciI6ZmFsc2V9LCJjdXIiOnsiY29kZSI6IlVTRCIsImZhY3RvciI6IjEuMDAwMDAiLCJzeW1ib2wiOiIkIn0sInJlbSI6dHJ1ZX0"
    
    expect(b641.replace(/=+$/, '').replace( /-/g, '+' ).replace( /_/g, '/' ))
      .toEqual(b642.replace(/=+$/, '').replace( /-/g, '+' ).replace( /_/g, '/' ))
    const bin1 = atob(b641)
    const bin2 = atob(b642)

    expect(bin1).toEqual(bin2)
  })
})
