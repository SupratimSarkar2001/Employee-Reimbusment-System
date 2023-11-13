import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from '../Components/UserContext';
const YourReimbusmentRequest = () => {
  const [requests, setRequests] = useState([]);
  const {userId}=useContext(UserContext)

  useEffect(() => {
    // Fetch reimbursement requests from the API
    axios.get(`http://localhost:9000/api/reimbursementrequests/employee/${userId}`)
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error('Error fetching requests:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Reimbursement Requests</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Employee ID</th>
            <th>Manager ID</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request, index) => (
            <tr key={index}>
              <td>{request.item}</td>
              <td>{request.amount}</td>
              <td>{request.date}</td>
              <td>{request.status}</td>
              <td>{request.employeeId}</td>
              <td>{request.managerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourReimbusmentRequest;
