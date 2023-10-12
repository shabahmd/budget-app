import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

    // Calculate the total cost from the expenses array
    const totalCost = expenses.reduce((total, expense) => total + expense.cost, 0);

    return (
        <div className='alert alert-primary p-4'>
            <span>Spent so far: ${totalCost}</span>
        </div>
    );
};

export default ExpenseTotal;
