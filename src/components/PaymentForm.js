import React, { useState } from "react";
import API from "../api";

function PaymentForm() {

  const [accountNo, setAccountNo] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!accountNo || !amount) {
      setMessage("Please enter account number and amount");
      setMessageType("error");
      return;
    }

    if (amount <= 0) {
      setMessage("Amount must be greater than 0");
      setMessageType("error");
      return;
    }

    try {

      await API.post("payments/", {
        account_no: accountNo,
        amount: amount
      });

      setMessage("Payment successful");
      setMessageType("success");

      setAccountNo("");
      setAmount("");

    } catch (err) {

      setMessage(err.response?.data?.error || "Payment failed. Try again.");
      setMessageType("error");

    }

  };

  return (
    <div>

      <h2>Make Payment</h2>

      

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Account Number"
          value={accountNo}
          required
          onChange={(e) => setAccountNo(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          required
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">
          Pay EMI
        </button>
        {message && (
        <p className={messageType === "success" ? "success-msg" : "error-msg"}>
          {message}
        </p>
      )}

      </form>

    </div>
  );
}

export default PaymentForm;