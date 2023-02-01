import React from 'react'
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

                    <Formik initialValues={initialValues}
                            validationSchema={SignUp}
                            onSubmit={(values, {setSubmitting}) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400)
                            }}>

                        <Form className={styles.formControl}>
                            <section className={styles.formContent}>
                                <h1>Create an Account</h1>
                                <p>Please fill the data below to create your account</p>
                            </section>
                            <div className={styles.dataInput}>
                                <label htmlFor="firstName">First Name</label>
                                <Field className={styles.dataField} name="firstName" placeholder="Junaid"/>
                                <ErrorMessage component="p" className={styles.errorMessage} name="firstName" />
                            </div>

                            <div className={styles.dataInput}>
                                <label htmlFor="lastName">Last Name</label>
                                <Field className={styles.dataField} name="lastName"  placeholder="Ahmad"/>
                                <ErrorMessage component="p" name="lastName" className={styles.errorMessage}/>
                            </div>

                            <div className={styles.dataInput}>
                                <label htmlFor="email">Email</label>
                                <Field className={styles.dataField} name="email"  placeholder="junaid@gmail.com"/>
                                <ErrorMessage component="p" name="email" className={styles.errorMessage}/>
                            </div>


                            <div className={styles.dataInput}>
                                <label htmlFor="password">Password</label>
                                <Field className={styles.dataField} type="password" name="password"/>
                                <ErrorMessage component="p" name="password" className={styles.errorMessage}/>
                            </div>

                            <div className={styles.dataInput}>
                                <label htmlFor="password">Confirm Password</label>
                                <Field className={styles.dataField} type="password" name="confirmPassword"/>
                                <ErrorMessage component="p" name="confirmPassword" className={styles.errorMessage}/>
                            </div>
                            <div className={styles.account}>
                                <p className={styles.accountContent}>Already hava a account? <a href="#"
                                                                                                className={styles.accountContent}>Sign
                                    in </a></p>
                                <button className={styles.register} type="submit">Registered</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>

        </>
    )
}

export default FormikForm
