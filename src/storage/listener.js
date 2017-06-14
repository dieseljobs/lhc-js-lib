export const createSessionListener = () => {
  /**
   * Transfer sessionStorage key-values from one tab to another
   *
   * @param  {event} event
   * @return {void}
   */
  const sessionStorageTransfer = ( event ) => {
    console.log('event>>>', event)
    if ( !event ) { event = window.event } // ie suq
    if ( !event.newValue ) return          // do nothing if no value to work with
    if ( event.key === 'getSessionStorage') {
      // another tab asked for the sessionStorage -> send it
      localStorage.setItem( 'sessionStorage', JSON.stringify( sessionStorage ) )
      // the other tab should now have it, so we're done with it.
      localStorage.removeItem( 'sessionStorage' ) // <- could do short timeout as well.
    } else if ( event.key === 'sessionStorage' && !sessionStorage.length ) {
      // another tab sent data <- get it
      const data = JSON.parse( event.newValue )
      for ( const key in data ) {
        sessionStorage.setItem( key, data[key] )
      }
    } else if ( event.key === 'broadcastSessionStorage' ) {
      // set a new session item from broadcast event
      const broadcastMessage = JSON.parse( event.newValue )
      sessionStorage.setItem( broadcastMessage.key, JSON.stringify( broadcastMessage.value ) )
    } else if ( event.key === 'broadcastSessionStorageRemoval' ) {
      // remove a session item from broacast event
      sessionStorage.removeItem( event.newValue )
    }
  }

  /**
   * Listen for changes to localStorage
   */
  if ( window.addEventListener ) {
    window.addEventListener( 'storage', sessionStorageTransfer, false )
  } else {
    window.attachEvent( 'onstorage', sessionStorageTransfer )
  }

  /**
   * Ask other tabs for session storage (this is ONLY to trigger event)
   * Initializes on new tab with empty storage
   */
  if ( !sessionStorage.length ) {
    localStorage.setItem( 'getSessionStorage', 'init' )
    localStorage.removeItem( 'getSessionStorage' )
  }

}
