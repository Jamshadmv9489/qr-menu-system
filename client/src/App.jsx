import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    axios.get("/")
      .then((res) => {
        console.log("API Response:", res.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-red-500">
        qr menu system
      </h1>
    </div>
  )
}

export default App