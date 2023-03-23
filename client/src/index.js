import { BrowserRouter } from 'react-router-dom';
// import axios from 'axios';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';
import Loading from './components/Loading';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import worker from './mocks/worker';
import ScrollToTop from './components/ScrollToTop';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL;
// axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6IltVU0VSXSIsIm1lbWJlcklkIjo4LCJzdWIiOiJ0ZXN0TWVtYmVyQGVtYWlsLmNvbSIsImlhdCI6MTY3OTU1NzkzMSwiZXhwIjoxNjc5NTY1MTMxfQ.TwnnpV94nNNgA5gL4xigGU-2-Yz4XzPd4epqlyE8JFs`;
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// if (process.env.NODE_ENV === 'development') {
// //   worker.start();
// // }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary fallback={ErrorFallback}>
        <Suspense fallback={Loading}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
