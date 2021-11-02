import React, { useEffect } from "react";
import FormContainer from "./components/FormContainer";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <FormContainer />
    </Provider>
  );
}

export default App;
