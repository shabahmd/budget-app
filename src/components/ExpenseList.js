import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
    const expenses = [
        { id: 5413102, name: "Shopping", cost: 50 },
        { id: 2354312, name: "Holiday", cost: 530 },
        { id: 2176312, name: "Transportation", cost: 460 },
        { id: 2323412, name: "Fuel", cost: 300 },
        { id: 2334412, name: "Child Care", cost: 950 },
    ];

    return (
        <ul className='list-group'>
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id} // Don't forget to add a key prop when mapping over components
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
