import"./FormStyle.css"
import Modal from "./Modal";
function LoanForm() {
  return (
    <div className="flex" style={{flexDirection:"column"}}>
      <form className="flex" id="loan-form" style={{flexDirection:"column"}}>
        <h1>Reaquesting a Loan</h1>
        <hr />
        <label>Name:</label>
        <input />
        <label>Phone Number:</label>
        <input />
        <label>Age:</label>
        <input />
        <label style={{marginTop:"30px"}}> Are YOU an Employee ?</label>
        <input type="checkbox" />
        <label >Salary</label>
        <select >
          <option >Less Than 500$</option>
          <option >Between 500$ and 2000$</option>
          <option>Above 2000$</option>
        </select>
        <button id="submit-loan-btn">Submit</button>
      </form>
      <Modal />
    </div>
  );
}

export default LoanForm;