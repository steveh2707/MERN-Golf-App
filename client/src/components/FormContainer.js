import React from "react"
import AppNavBar from "./AppNavBar"
import FormComponent from "./FormComponent"

import { Provider } from "react-redux"
import store from "../store"
import PrevRounds from "./PrevRounds"



function FormContainer() {

    return (
        <div>
            <Provider store={store}>
                <AppNavBar />
                <FormComponent />
                <PrevRounds />
            </Provider>
        </div>

    )

}

export default FormContainer