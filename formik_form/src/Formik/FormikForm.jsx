import React from 'react'
import {useFormik} from 'formik'
import {SignUp} from "../Schema"
import styles from "./FormikForm.module.css"
import bannerImage from "../assets/sign.jpg"

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const FormikForm = () => {

    const {values, errors, handleBlur, handleChange, handleSubmit, touched} = useFormik({
        initialValues: initialValues,
        validationSchema: SignUp,
        onSubmit: (values) => (e) => {
            e.preventDefault();
        }
    })

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperContainer}>
                    <div className={styles.imgContainer}>
                        <img src={bannerImage} alt={bannerImage}/>
                    </div>
                    <form className={styles.formControl} onSubmit={handleSubmit}>
                        <section className={styles.formContent}>
                            <h1>Create an Account</h1>
                            <p>Please fill the data below to create your account</p>
                        </section>
                        <div className={styles.dataInput}>
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" name="firstName" type="text" onChange={handleChange}
                                   value={values.firstName} onBlur={handleBlur}/>
                            {touched.firstName && errors.firstName ?
                                <span className={styles.error}>{errors.firstName}</span> : null}
                        </div>

                        <div className={styles.dataInput}>
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" name="lastName" type="text" onChange={handleChange}
                                   value={values.lastName} onBlur={handleBlur}/>
                            {touched.lastName && errors.lastName ?
                                <span className={styles.error}>{errors.lastName}</span> : null}

                        </div>

                        <div className={styles.dataInput}>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" onChange={handleChange}
                                   value={values.email} onBlur={handleBlur}/>
                            {touched.email && errors.email ?
                                <span className={styles.error}>{errors.email}</span> : null}

                        </div>


                        <div className={styles.dataInput}>
                            <label htmlFor="password">Password</label>
                            <input id="password" name="password" type="password" onChange={handleChange}
                                   value={values.password} onBlur={handleBlur}/>
                            {touched.password && errors.password ?
                                <span className={styles.error}>{errors.password}</span> : null}
                        </div>

                        <div className={styles.dataInput}>
                            <label htmlFor="password">Confirm Password</label>
                            <input id="confirmPassword" name="confirmPassword" type="password" onChange={handleChange}
                                   value={values.confirmPassword} onBlur={handleBlur}/>
                            {touched.confirmPassword && errors.confirmPassword ?
                                <span className={styles.error}>{errors.confirmPassword}</span> : null}
                        </div>
                        <div className={styles.account}>
                            <p className={styles.accountContent}>Already hava a account? <a href="#" className={styles.accountContent}>Sign in </a></p>
                            <button className={styles.register} type="submit">Registered</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default FormikForm
