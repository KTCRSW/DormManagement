import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin/Admin';
import Empty from './Empty';
import Expenses from './Admin/Expenses';

function MainApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Expenses" element={<Expenses />} />
        <Route path="" element={<App />} />
        <Route path="*" element={<Empty />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<MainApp />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
