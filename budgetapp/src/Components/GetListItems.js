import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import handleDelete from "./DeleteItem";
import deleteIcon from "../images/del.jpg";
import "../css files/app_dup.css";

function GetListItems({ Data, setData }) {
  var [list, getList] = useState(false);
  function handleGetList() {
    if (list) {
      getList(false);
    } else {
      getList(true);
    }
  }
  return (
    <>
      <button type="button" className="fancy-button" onClick={handleGetList}>
        {!list && <p>Get Items</p>}
        {list && <p>Hide Items</p>}
      </button>
      {list && (
        <div className="container mt-2">
          <h2 className="form-label">Items Bought</h2>
          <ul className="list-group">
            {Data.map((entry) => (
              <li key={entry._id} className="list-group-item">
                <div className="del">
                  <div className="d1">
                    {entry.item} - ${entry.cost}
                  </div>
                  <img
                    src={deleteIcon}
                    alt="Delete"
                    className="delete-icon"
                    onClick={() => {
                      handleDelete(entry.item, Data, setData);
                    }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
export default GetListItems;
