import React, { useState } from "react";
import ViewBudget from "./ViewBudget";
import EditBudget from "./EditBudget";
import { useGlobalContext } from "../context/appContext";
const Budget = () => {
  const { budget, dispatch } = useGlobalContext();
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };
  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
