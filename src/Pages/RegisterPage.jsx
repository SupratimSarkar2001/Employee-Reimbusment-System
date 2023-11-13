import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const RegisterPage = () => {
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        department: "",
        title: "",
        employeeLevel: "",
        managerId: "",
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        password: Yup.string().min(4, "Password must be at least 4 characters").required("Password is required"),
        department: Yup.string().required("Department is required"),
        title: Yup.string().required("Title is required"),
        employeeLevel: Yup.number().required("Employee Level is required"),
        managerId: Yup.number().required("Manager ID is required"),
    });

    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (values, { setSubmitting }) => {
        axios
            .post("http://localhost:9000/api/employees", values)
            .then((response) => {
                console.log("Registration successful", response.data);
                setIsSuccess(true);
            })
            .catch((error) => {
                console.error("Registration failed", error);
                // Handle registration failure (e.g., show an error message).
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div className="container mt-5">
            <h2>Registration Form</h2>
            {isSuccess ? (
                <div className="alert alert-success">
                    Registration successful! {/* You can customize this message */}
                </div>
            ) : (
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field type="text" name="firstName" className="form-control" />
                                <ErrorMessage name="firstName" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <Field type="text" name="lastName" className="form-control" />
                                <ErrorMessage name="lastName" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" className="form-control" />
                                <ErrorMessage name="email" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password" className="form-control" />
                                <ErrorMessage name="password" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                <Field type="text" name="department" className="form-control" />
                                <ErrorMessage name="department" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <Field type="text" name="title" className="form-control" />
                                <ErrorMessage name="title" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="employeeLevel">Employee Level</label>
                                <Field type="number" name="employeeLevel" className="form-control" />
                                <ErrorMessage name="employeeLevel" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="managerId">Manager ID</label>
                                <Field type="number" name="managerId" className="form-control" />
                                <ErrorMessage name="managerId" component="div" className="text-danger" />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    Register
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </div>
    );
};

export default RegisterPage;
