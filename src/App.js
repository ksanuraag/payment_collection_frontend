import React from "react";
import Customers from "./components/Customers";
import PaymentForm from "./components/PaymentForm";
import PaymentHistory from "./components/PaymentHistory";
import "./style.css";

function App() {

  return (
    <div>

      <h1>Loan Payment Collection App</h1>

      <Customers />

      <hr />

      <PaymentForm />

      <hr />

      <PaymentHistory />

    </div>
  );
}

export default App;