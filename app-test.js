import { createSessionListener, setAndBroadcastSession } from './src/storage'

// initialize session listener
createSessionListener()

window.setAndBroadcastSession = setAndBroadcastSession
