/**
 * Sets key-value pair to sessionStorage and "broadcasts/triggers" event in
 * other open tabs to do the same
 *
 * @param {string} key
 * @param {mixed} value
 */
export const setAndBroadcastSession = ( key, value ) => {
  // set in storage @ current tab
  sessionStorage.setItem( key, JSON.stringify( value ) )
  // broadcast to other open tabs
  const broadcastMessage = {
    key,
    value
  }
  localStorage.setItem( 'broadcastSessionStorage', JSON.stringify( broadcastMessage ) )
  localStorage.removeItem( 'broadcastSessionStorage' )
}

export const removeAndBroadcastSession = ( key ) => {
  // remove from current tab
  sessionStorage.removeItem( key )
  // broadcast to remove from other open tabs
  localStorage.setItem( 'broadcastSessionStorageRemoval', key )
  localStorage.removeItem( 'broadcastSessionStorageRemoval' )
}
