import { useEffect } from 'react';
import axios from 'axios'; 

function RetrieveData({ setData }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/api/getdata');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching entries:', error);
      }
    }
    fetchData();
  }, [setData]);

  return null;  
}

export default RetrieveData;
