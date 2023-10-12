import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './AppContext.jsx';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
  return (
    <AppProvider>
      <div className='container'>
        <h1 className='mt-3'>My Budget Planner</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <RemainingBudget />
          </div>
          <div className='col-sm'>
            <ExpenseTotal />
          </div>
        </div>
