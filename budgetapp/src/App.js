import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "./Components/Form";
import TotalAmount from "./Components/TotalAmount";
import RetrieveData from "./Components/RetrieveData";
import Circle from "./Components/Circle";
import GetListItems from "./Components/GetListItems";
import "./css files/app_dup.css";
import CalIncome from "./Components/CalIncome";
import Notification from "./Components/Notification";
import Bills from "./Components/Bills";
import GetBillData from "./Components/GetBillData";
import GetBillListItem from "./Components/GetBillListItem";
function App() {
  const [Data, setData] = useState([]);
  const [income, setIncome] = useState({ amount: 0 });
  const [Total, setTotal] = useState(0);
  const [billData, setBillData] = useState([]);

  return (
    <>
      <div className="container1">
        <div className="App">
          <h1 className="head text-center">Track Your Budget</h1>
          <RetrieveData setData={setData} />
          <GetBillData setBillData={setBillData} />
          <Notification income={income} Total={Total} setIncome={setIncome} billData={billData}/>
          <div className="ab-1">
            <div className="row">
              <div className="col-md-6 left-column">
                <TotalAmount Data={Data} setTotal={setTotal} />
                <Circle Data={Data} Total={Total} />
                <CalIncome income={income} setIncome={setIncome} />
              </div>
              <div className="col-md-6 right-column">
                <Bills />
                <Form Data={Data} income={income} setIncome={setIncome} />
                <div className="flex1">
                <GetListItems className="gli" Data={Data} setData={setData} />
                </div>
                <div style={{ marginTop: '3%' }}>
    <GetBillListItem billData={billData} setBillData={setBillData} />
  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
