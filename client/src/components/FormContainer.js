import React from "react"
import AppNavBar from "./AppNavBar"
import FormComponent from "./FormComponent"

import { Provider } from "react-redux"
import store from "../store"
import PrevRounds from "./PrevRounds"
import AddGolfCourse from "./AddGolfCourse"


function FormContainer() {

    return (
        <div>
            <Provider store={store}>
                <AppNavBar />
                <FormComponent />
                <PrevRounds />

                <AddGolfCourse />
            </Provider>
        </div>

    )

}

export default FormContainer