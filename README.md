# Loan Payment Collection App (Frontend)

A simple React-based frontend application for managing loan customers, collecting EMI payments, and viewing payment history.

This application communicates with a backend API to display customer details, process payments, and track payment records.

---

## Features

* View all loan customers
* Display EMI details
* Make EMI payments
* View payment history for a specific account
* Error handling and validation
* Responsive UI for desktop and mobile

---

## Tech Stack

* React.js
* JavaScript (ES6)
* Axios (API requests)
* CSS (Responsive UI)

---

## Project Structure

```
payment_collection_frontend
│
├── public
│
├── src
│   ├── components
│   │   ├── Customers.js
│   │   ├── PaymentForm.js
│   │   └── PaymentHistory.js
│   │
│   ├── api.js
│   ├── App.js
│   ├── style.css
│   └── index.js
│
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```
git clone https://github.com/ksanuraag/payment_collection_frontend.git
```

Move to the project folder:

```
cd payment_collection_frontend
```

Install dependencies:

```
npm install
```

Start the development server:

```
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## API Integration

The frontend communicates with backend APIs for:

* Fetching customers
* Processing EMI payments
* Fetching payment history

The API configuration is handled in:

```
src/api.js
```

---

## Screens

### Customers

Displays all loan customers and EMI details.

### Make Payment

Allows users to submit EMI payments using account number.

### Payment History

Fetches and displays payment records for a specific account.

---

## Future Improvements

* Authentication & login
* Customer search
* Dashboard analytics
* Payment status indicators
* Toast notifications
* Deployment

---

## Author

Anuraag K S

GitHub: https://github.com/ksanuraag
