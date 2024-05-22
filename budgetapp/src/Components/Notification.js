import { useEffect } from "react";

function Notification({income, Total,  setIncome, billData }) {
    useEffect(() => {
        const savedIncome = localStorage.getItem("annualIncome");
        if (savedIncome) {
          setIncome({ amount: parseFloat(savedIncome) });
        }
      }, [setIncome]);
  return <>{Total > income.amount && <h2 className="notification">OVER-BUDGET!!</h2>}
   {billData.length > 0 && <h2 className="notification">Hey, Bills Pending!!</h2>}
  </>;
}
export default Notification;
