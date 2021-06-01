import React from "react";
import { TiDelete } from "react-icons/ti";
import { useGlobalContext } from "../context/appContext";

const ExpenseItem = ({ id, cost, name }) => {
  const { dispatch } = useGlobalContext();
  const expense = { id, cost, name };

  const handleDeleteExpense = (expense) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: expense.id,
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge rounded-pill bg-primary mr-3">${cost}</span>
        <TiDelete
          size="1.5em"
          onClick={() => handleDeleteExpense(expense)}
        ></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
