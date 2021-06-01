import React, { useState } from "react";

const EditBudget = ({ handleSaveClick, budget }) => {
  const [value, setValue] = useState(budget);
  return (
    <>
      <input
        required="required"
        type="number"
        class="form-control form-control-sm mr-3"
        id="name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="button"
        class="btn btn-primary btn-sm"
        onClick={() => handleSaveClick(value)}
      >
        Save
      </button>
    </>
  );
};

export default EditBudget;
