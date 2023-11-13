import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import UserContext from '../Components/UserContext';


const ReimbursementAction = () => {
  const [requests, setRequests] = useState([]);
  const {userId}=useContext(UserContext);

  const handleStatusChange = (requestId, selectedStatus) => {
    const requestBody = {
      managerId: userId,
      type: selectedStatus,
    };
    axios.put(`http://localhost:9000/api/reimbursementrequests/${requestId}/action`, requestBody)
      .then((response) => {
        console.log('Status updated:', response.data);
      })
      .catch((error) => {
        console.error('Error updating status:', error);
      });
  };

  useEffect(() => {
    axios.get('http://localhost:9000/api/reimbursementrequests')
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
              <td>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {request.status}
                  </button>
                  <div className="dropdown-menu">
                    <button
                      className="dropdown-item"
                      onClick={() => handleStatusChange(request.id, 'approved')}
                    >
                      Approved
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleStatusChange(request.id, 'denied')}
                    >
                      Denied
                    </button>
                    <button
                      className="dropdown-item"
                      onClick={() => handleStatusChange(request.id, 'managerReview')}
                    >
                      Manager Review
                    </button>
                  </div>
                </div>
              </td>
              <td>{request.employeeId}</td>
              <td>{request.managerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReimbursementAction;
