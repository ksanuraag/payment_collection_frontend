import React, { useState } from "react";
import API from "../api";

function PaymentHistory() {

  const [accountNo, setAccountNo] = useState("");
  const [payments, setPayments] = useState([]);

  const getHistory = async () => {

    if (!accountNo) {
      alert("Please enter account number");
      return;
    }

    try {

      const res = await API.get(`/payments/${accountNo}/`);

      setPayments(res.data.data);

    } catch (err) {

      alert(err.response?.data?.error || "Customer not found");

    }
  };

  return (
    <div>

      <h2>Payment History</h2>

      <input
        placeholder="Account Number"
        value={accountNo}
        onChange={(e) => setAccountNo(e.target.value)}
      />

      <button onClick={getHistory}>
        Fetch
      </button>

      <ul>
        {payments.map(p => (
          <li key={p.id}>
              {p.payment_amount} - {p.status} - {p.payment_date}
          </li>
        ))}
      </ul>

    </div>
  );
}

export default PaymentHistory;