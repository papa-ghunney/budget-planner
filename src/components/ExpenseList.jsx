import React from "react";
import ExpenseItem from "./ExpenseItem";
import { useGlobalContext } from "../context/appContext";
const ExpenseList = () => {
  const { expenses } = useGlobalContext();
  // const expenses = [
  //   { id: 1, name: "Shopping", cost: 20 },
  //   { id: 2, name: "Holiday", cost: 300 },
  //   { id: 3, name: "Transportation", cost: 70 },
  //   { id: 4, name: "Fuel", cost: 40 },
  // ];

  return (
    <>
      <ul>
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} />
        ))}
      </ul>
    </>
  );
};

export default ExpenseList;
