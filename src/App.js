import React, { useState } from "react";
import './App.css';

function ContributeEther() {
  const [etherAmount, setEtherAmount] = useState("");

  function showAlert(message) {
    const alert = document.getElementById("alert");
    alert.innerHTML = `<span class="closebtn" onclick='this.parentElement.style.display="none";'>&times;</span>${message}`;
    alert.style.display = "block";
  }

  function validateForm(event) {
    event.preventDefault();
    if (etherAmount < 0.5) {
      showAlert("Error: Contribution must be at least 0.5 ether");
    } else {
      // submit the form
    }
  }

  return (
    <div>
      <form onSubmit={validateForm}>
        <h1>Enter Amount(ETH)</h1>
        <label htmlFor="etherAmount"></label>
        <input
          type="number"
          id="etherAmount"
          name="etherAmount"
          step="0.0000001"
          placeholder="Enter amount to contribute"
          required
          className="no-spinner"
          value={etherAmount}
          onChange={(e) => setEtherAmount(e.target.value)}
        />
        <div id="alert" className="alert" style={{ display: "none" }}>
          <span
            className="closebtn"
            onClick={(e) =>
              (e.target.parentElement.style.display = "none")
            }
          >
            &times;
          </span>
          <p id="error"></p>
        </div>
        <div style={{ textAlign: "right" }}>
          <input type="button" value="Cancel" onClick={() => window.history.back()} />
          <input type="submit" value="Contribute" />
        </div>
      </form>
    </div>
  );
}

export default ContributeEther;
