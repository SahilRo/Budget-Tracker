import { useEffect } from 'react';
import axios from 'axios'; 

function GetBillData({ setBillData }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/getbilldata');
        setBillData(response.data);
      } catch (error) {
        console.error('Error fetching entries:', error.response.data);
      }
    }
    fetchData();
  }, [setBillData]);

  return null;  
}

export default GetBillData;
