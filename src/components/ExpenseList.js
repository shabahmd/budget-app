import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";

import { AppContext } from "../AppContext";
const Expenses = () => {
    const { expenses } = useContext(AppContext)

    return (
        <ul>
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                );
            })}
        </ul>
    );
};

export default Expenses;
