import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import handleDelete from "./DeleteItem";
import "../css files/app_dup.css";

function GetBillListItem({ billData, setBillData }) {
  var [list, getList] = useState(false);
  function handleGetList() {
    if (list) {
      getList(false);
    } else {
      getList(true);
    }
  }
  console.log("billData:", billData);
  return (
    <>
      <button type="button" className="fancy-button" onClick={handleGetList}>
      {!list && <p>Get Bills</p>}
        {list && <p>Hide Bills</p>}
      </button>
      {list && (
        <div className="container mt-2">
          <ul className="list-group">
            {billData.map((entry) => (
              <li key={entry._id} className="list-group-item">
                <div className="del">
                  <div className="d1">
                    {entry.bill}
                  </div>
                  <button
                    alt="Delete"
                    className="b22"
                    onClick={() => {
                      handleDelete(entry, billData, setBillData);
                    }}
                  >Mark as Paid </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default GetBillListItem;
