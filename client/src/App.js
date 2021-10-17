import React from "react"
import FormContainer from "./components/FormContainer"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <FormContainer />
    </Provider>
  )
}


export default App;
