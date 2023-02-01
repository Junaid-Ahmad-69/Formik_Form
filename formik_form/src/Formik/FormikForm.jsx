import React from 'react'
import {useFormik} from 'formik'
import {Formik, Field, Form, ErrorMessage} from 'formik'
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

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.wrapperContainer}>
                    <div className={styles.imgContainer}>
                        <img src={bannerImage} alt={bannerImage}/>
                    </div>


                    <Formik initialValues={initialValues} validationSchema={SignUp}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}>
                        {formik => {
                            return (
                                <form className={styles.formControl} onSubmit={formik.handleSubmit}>
                                    <section className={styles.formContent}>
                                        <h1>Create an Account</h1>
                                        <p>Please fill the data below to create your account</p>
                                    </section>

                                    <div className={styles.dataInput}>
                                        <label htmlFor="firstName">First Name</label>
                                        <input id="firstName" type="text" {...formik.getFieldProps("firstName")}/>
                                        {formik.touched.firstName && formik.errors.firstName ?
                                            <span className={styles.error}>{formik.errors.firstName}</span> : null}
                                    </div>

                                    <div className={styles.dataInput}>
                                        <label htmlFor="lastName">Last Name</label>
                                        <input id="lastName" type="text" {...formik.getFieldProps("lastName")}/>
                                        {formik.touched.lastName && formik.errors.lastName ?
                                            <span className={styles.error}>{formik.errors.lastName}</span> : null}

                                    </div>

                                    <div className={styles.dataInput}>
                                        <label htmlFor="email">Email</label>
                                        <input id="email" type="email" {...formik.getFieldProps("email")}/>
                                        {formik.touched.email && formik.errors.email ?
                                            <span className={styles.error}>{formik.errors.email}</span> : null}

                                    </div>

                                    <div className={styles.dataInput}>
                                        <label htmlFor="password">Password</label>
                                        <input id="password" type="password" {...formik.getFieldProps("password")} />
                                        {formik.touched.password && formik.errors.password ?
                                            <span className={styles.error}>{formik.errors.password}</span> : null}
                                    </div>

                                    <div className={styles.dataInput}>
                                        <label htmlFor="password">Confirm Password</label>
                                        <input id="confirmPassword"
                                               type="password" {...formik.getFieldProps("confirmPassword")}/>
                                        {formik.touched.confirmPassword && formik.errors.confirmPassword ?
                                            <span
                                                className={styles.error}>{formik.errors.confirmPassword}</span> : null}
                                    </div>
                                    <div className={styles.account}>
                                        <p className={styles.accountContent}>Already hava a account? <a href="#"
                                                                                                        className={styles.accountContent}>Sign
                                            in </a></p>
                                        <button className={styles.register} type="submit">Registered</button>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default FormikForm
