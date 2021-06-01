import React from "react";
import { useGlobalContext } from "../context/appContext";
const Remaining = () => {
  const { expenses, budget } = useGlobalContext();

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? `alert-danger` : `alert-success`;
  return (
    <div className={`alert ${alertType}`}>
      <span>Remainder: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
