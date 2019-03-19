import React from 'react'
import { Provider } from 'react-redux'

import { store } from './src/redux/configureStore'

import Welcome from './src/screens/Welcome'

export default () => (
  <Provider store={store}>
    <Welcome />
  </Provider>
)
