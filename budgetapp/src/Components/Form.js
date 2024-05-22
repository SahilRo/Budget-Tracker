import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../css files/app_dup.css";

function Form({ Data, income, setIncome }) {
  const [entry, setEntry] = useState({
    item: "",
    cost: "",
  });

  const handleEntryChange = (e) => {
    const { name, value } = e.target;
    setEntry((prevEntry) => ({
      ...prevEntry,
      [name]: value,
    }));
  };

  async function handleSubmit(event) {
    console.log("Itemsss:", entry.item);
    console.log("Costsss:", entry.cost);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/list",
        entry
      );
      console.log(response.data.message);
      setEntry({
        item: "",
        cost: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="main1 mt-2">
      <div className="container d-flex justify-content-center align-items-center vh-60">
        <form className="w-50" onSubmit={handleSubmit}>
          <div class="mb-3 d-flex align-items-center">
            <label for="item" class="form-label me-2">
              Item:
            </label>
            <input
              type="text"
              id="item"
              name="item"
              value={entry.item}
              onChange={handleEntryChange}
              class="form-control"
            />
          </div>
          <div class="mb-3 d-flex align-items-center">
            <label for="cost" class="form-label me-2">
              Cost:
            </label>
            <input
              type="number"
              id="cost"
              name="cost"
              value={entry.cost}
              onChange={handleEntryChange}
              class="form-control"
            />
          </div>
          <button type="submit" className="a3 fancy-button ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
