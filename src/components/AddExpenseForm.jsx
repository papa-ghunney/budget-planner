import React, { useState } from "react";
import { useGlobalContext } from "../context/appContext";
import { v4 as uuidv4 } from "uuid";
const AddExpenseForm = () => {
  const { dispatch } = useGlobalContext();

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-sm">
            <label htmlFor="cost">Cost</label>
            <input
              id="cost"
              type="text"
              className="form-control"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn mt-3 btn-primary">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddExpenseForm;
