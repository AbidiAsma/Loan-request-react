import"./FormStyle.css"
// import Modal from "./Modal";
import { useState } from "react";


function LoanForm() {
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  }); 
  function handleSabmit(event){
    event.preventDefault();
    alert("salem")
  }
  const btnIsDisabled =
    (loanInputs.name == "") ||
    (loanInputs.phoneNumber == "") ||
    (loanInputs.age == "");
    

  return (
    <div className="flex" style={{ flexDirection: "column" }}>
      <form className="flex" id="loan-form" style={{ flexDirection: "column" }}>
        <h1>Reaquesting a Loan</h1>
        <hr />
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, name: event.target.value })
          }
        />
        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, phoneNumber: event.target.value })
          }
        />
        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, age: event.target.value })
          }
        />
        <label style={{ marginTop: "30px" }}> Are YOU an Employee ?</label>
        <input
          type="checkbox"
          checked={loanInputs.isEmployee}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, isEmployee: event.target.checked })
          }
        />
        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) =>
            setLoanInputs({ ...loanInputs, salaryRange: event.target.value })
          }
        >
          <option>Less Than 500$</option>
          <option>Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        <button
          className={btnIsDisabled ? "disabled" : ""}
          id="submit-loan-btn"
          onClick={handleSabmit}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>
      {/* <Modal /> */}
    </div>
  );
}

export default LoanForm;