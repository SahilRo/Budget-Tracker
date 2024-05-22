import React from 'react';
import { useEffect } from 'react';
import '../css files/app_dup.css'
function TotalAmount({ Data, setTotal }) {
    useEffect(() => {
        const sum = Data.reduce((acc, e) => acc + parseFloat(e.cost), 0);
        setTotal(sum);
    }, [Data, setTotal]);
    const sum = Data.reduce((acc, e) => acc + e.cost, 0);
    return (
        <>
            <div className='total'>
                <strong>Total Expenses: ${sum}</strong>
            </div>
        </>
    );
}

export default TotalAmount;
