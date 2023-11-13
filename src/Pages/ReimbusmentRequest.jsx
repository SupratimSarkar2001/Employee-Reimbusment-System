import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const initialValues = {
  item: '',
  amount: '',
  date: '',
  employeeId: '',
  managerId: '',
};

const validationSchema = Yup.object().shape({
  item: Yup.string().required('Item is required'),
  amount: Yup.number()
    .positive('Amount must be a positive number')
    .required('Amount is required'),
  date: Yup.date().required('Date is required'),
  employeeId: Yup.string().required('Employee ID is required'),
  managerId: Yup.string().required('Manager ID is required'),
});

const ReimbursementRequest = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      // Send a POST request to the specified endpoint with form data
      const response = await axios.post('http://localhost:9000/api/reimbursementrequests', values);
      console.log('Form Data:', values);
      console.log('Server Response:', response.data);
      resetForm();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Reimbursement System</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="item">Item</label>
              <Field
                type="text"
                id="item"
                name="item"
                className="form-control"
              />
              <ErrorMessage name="item" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <Field
                type="number"
                id="amount"
                name="amount"
                className="form-control"
              />
              <ErrorMessage name="amount" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <Field
                type="date"
                id="date"
                name="date"
                className="form-control"
              />
              <ErrorMessage name="date" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="employeeId">Employee ID</label>
              <Field
                type="text"
                id="employeeId"
                name="employeeId"
                className="form-control"
              />
              <ErrorMessage name="employeeId" component="div" className="text-danger" />
            </div>

            <div className="form-group">
              <label htmlFor="managerId">Manager ID</label>
              <Field
                type="text"
                id="managerId"
                name="managerId"
                className="form-control"
              />
              <ErrorMessage name="managerId" component="div" className="text-danger" />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ReimbursementRequest;

