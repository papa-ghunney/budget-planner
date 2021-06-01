import "./App.css";
import AddExpenseForm from "./components/AddExpenseForm";
import Budget from "./components/Budget";
import ExpenseList from "./components/ExpenseList";
import Expenses from "./components/Expenses";
import Remaining from "./components/Remaining";

function App() {
  return (
    <div className="container">
      <h2 className="mt-3">My Budget Planner</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <Expenses />
        </div>
      </div>
      <div className="mt-3">Expenses</div>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="col-sm">
        <AddExpenseForm />
      </div>
    </div>
  );
}

export default App;
