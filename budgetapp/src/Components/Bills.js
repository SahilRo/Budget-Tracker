import { React, useState } from "react";
import axios from "axios";
import saveImage from "../images/saveim.png";
function Bills() {
  var [bill, setBill] = useState("");
  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  async function postbill(event) {
    console.log("Bill Name:", bill);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/billss/billlist",
        { bill: bill }
      );
      console.log(response.data.message);
      setBill({
        bill: "",
      });
      window.location.reload();
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  }

  return (
    <>
      <div className="main1 mt-2">
        <div className="container d-flex justify-content-center align-items-center vh-80">
          <form className="w-50 ms-3">
            <div className="mb-3 d-flex align-items-center ">
              <label for="billname" class="form-label me-2">
                Bill:
              </label>
              <input
                type="text"
                name="billname"
                value={bill}
                onChange={handleBillChange}
                className="form-control"
              />
              <img
                src={saveImage}
                alt="Save"
                className="save-icon mr"
                onClick={postbill}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Bills;
