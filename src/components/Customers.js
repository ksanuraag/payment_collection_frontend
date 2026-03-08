import React, { useEffect, useState } from "react";
import API from "../api";

function Customers() {

  const [customers, setCustomers] = useState([]);

  const [error, setError] = useState("");

useEffect(() => {
  API.get("customer/")
    .then(res => {
      setCustomers(res.data.data);
    })
    .catch(err => {
      console.error(err);
      setError("Failed to load customers");
    });
}, []);

  return (
    <div>
      <h2>Customers</h2>
      {error && <p style={{color:"red"}}>{error}</p>}
      <div className="table-wrapper">
      <table border="1">
        <thead>
          <tr>
            <th>Account No</th>
            <th>Interest Rate</th>
            <th>Tenure</th>
            <th>EMI Due</th>
            <th>EMI Status</th>
            <th>Loan amount</th>
            <th>Paid amount</th>
          </tr>
        </thead>

        <tbody>
          {customers.length === 0 ? (
            <tr>
              <td colSpan="7">No customers found</td>
            </tr>
          ) : (
          customers.map(c => (
            <tr key={c.id}>
              <td>{c.account_no}</td>
              <td>{c.interest_rate}</td>
              <td>{c.tenure}</td>
              <td>{c.emi_due}</td>
              <td>{c.emi_status}</td>
              <td>{c.total_loan_amount}</td>
              <td>{c.total_paid_amount}</td>
            </tr>
          ))
        )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Customers;