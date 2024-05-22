import React, { useEffect, useState } from "react";
import "../css files/app_dup.css";
import saveImage from "../images/saveim.png";
function CalIncome({ income, setIncome }) {
  const [localIncome, setLocalIncome] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    const savedIncome = localStorage.getItem("annualIncome");
    if (savedIncome) {
      setIncome({ amount: savedIncome });
    }
  }, [setIncome]);

  const handleIncomeChange = (e) => {
    setLocalIncome(e.target.value);
  };

  const handleSave = () => {
    if (!isSaved) {
      localStorage.setItem("annualIncome", localIncome);
      setIncome({ amount: localIncome });
      setLocalIncome("");
      setIsSaved(true);
    }
  };

  return (
    <>
      <div className="income1">
        <input
          type="number"
          name="amount"
          value={localIncome}
          onChange={handleIncomeChange}
          className="w-50"
        />
        <img
          src={saveImage}
          alt="Save"
          className={`save-icon mr ${isSaved ? 'disabled' : ''}`}
          onClick={handleSave}
        />
      </div>
      <div className="income">Monthly Income: {income.amount}</div>
    </>
  );
}

export default CalIncome;
