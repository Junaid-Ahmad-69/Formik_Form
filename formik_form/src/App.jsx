import React from 'react'
import FormikForm from "./Formik/FormikForm.jsx";
import style from "./App.module.css"

export default () => {
    return (
        <div className={style.wrapperContent}>
            <main className={style.container}>
                <div className={style.mainContainer}>
                <FormikForm/>
                </div>
            </main>
        </div>
    )
}
