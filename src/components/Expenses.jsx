import React from "react";
import { useGlobalContext } from "../context/appContext";

const Expenses = () => {
  const { expenses, budget } = useGlobalContext();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? `alert-danger` : `alert-primary`;
  return (
    <div className={`alert ${alertType}`}>
      <span>Spent so far : ${totalExpenses}</span>
    </div>
  );
};

export default Expenses;
