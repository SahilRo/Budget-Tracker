import axios from 'axios';

async function handleDelete(entry, Data, setData) {
  try {
    if (entry.bill) {
      await axios.delete("http://localhost:5000/api/del", {
        data: { bill: entry.bill },
      });
      const updatedData = Data.filter((e) => e.bill !== entry.bill);
      setData(updatedData);
    }else{
        await axios.delete("http://localhost:5000/api/del", {
          data: { item: entry },
        });
        const updatedData = Data.filter((e) => e.item !== entry);
        setData(updatedData);
    }
  }catch (error) {
    console.error("Error deleting entry:", error);
  }
}

export default handleDelete;










