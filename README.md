# Finsight

FinSight is a real-time financial data API that aggregates stock prices, forex rates, and market indices. It offers customizable alerts for significant market changes and predictive analytics powered by TensorFlow. Built on PostgreSQL and utilizing Alpha Vantage, Finsight empowers traders and businesses to make informed investment decisions.

## Key Features

- [ ] **Real-Time Data**: Access up-to-the-minute financial data from Alpha Vantage.
- [ ] **Custom Alerts**: Set personalized alerts based on specific conditions like price thresholds and percentage changes.
- [ ] **Predictive Analytics**: Utilize TensorFlow in a Flask microservice for predictive modeling to enhance investment strategies.
- [ ] **PostgreSQL Database**: Securely store user data and alert configurations.

## Database Design

![db-design drawio](https://github.com/user-attachments/assets/797c0050-ca5a-4ec4-867c-60776d058bf8)

## Tech Stack

### Backend

1. [express.js](https://expressjs.com/): Fpr building the RESTful API.
2. [PostgreSQL](https://www.postgresql.org/): For storing user data and alert configurations.
3. [Alpha Vantage](https://www.alphavantage.co/): For real-time financial data.
4. [TensorFlow](https://www.tensorflow.org/): For predictive analytics.
5. [Flask](https://flask.palletsprojects.com/): For the TensorFlow microservice.
6. [Jest](https://jestjs.io/): For testing the backend.

### Frontend

1. [React](https://reactjs.org/): For building the user interface.
2. [shadcn/ui](https://ui.shadcn.com/): For the UI components.
3. [Clerk](https://docs.clerk.dev/): For user authentication.
4. [Tailwind CSS](https://tailwindcss.com/): For styling the UI.
5. [vite](https://vitejs.dev/): For the frontend build tool.
6. [vitest](https://vitest.dev/): For testing the frontend.
