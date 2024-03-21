import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import router from './router'
import store from './store'
const persist = persistStore(store)

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persist} loading={null}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
