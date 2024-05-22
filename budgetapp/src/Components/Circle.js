import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import '../css files/circle.css'
function Circle({ Data, Total }) {
  const percentageData = Data.map(entry => ({
    title: entry.item,
    value: parseFloat(((entry.cost / Total) * 100).toFixed(1)), 
    color: `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }));


  return (
    <div className="container">
      <div className="c-container">
        <PieChart
          data={percentageData}
          lineWidth={50}
          animate={true}
          label={({ dataEntry }) => `${dataEntry.value}%`} 
          labelStyle={{
            fontSize: "0.4em",
            fontFamily: "Arial, sans-serif"
          }}
          labelPosition={70}
          radius={45}
        />
      </div>
    </div>
  );
}

export default Circle;
