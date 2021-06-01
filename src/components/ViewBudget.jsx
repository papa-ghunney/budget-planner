import React from "react";

const ViewBudget = ({ handleEditClick, budget }) => {
  return (
    <>
      <span>Budget: £{budget}</span>
      <button
        type="button"
        class="btn btn-primary btn-sm"
        onClick={handleEditClick}
      >
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
