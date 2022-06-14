import { useContext, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);

  const handleClick = async () => {
    const tempArr = [];
    axios.get("http://localhost:3003/stuff").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        tempArr.push(res.data[i]);
      }
      setUser(tempArr);
    });
  };
  console.log(user[0]);
  return (
    <div className="App">
      <p>{user.first_name}</p>
      <Button onClick={handleClick} variant="outlined" color="primary">
        Hello
      </Button>
    </div>
  );
}

export default App;
