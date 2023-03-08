import { useState } from "react";
import "./styleForm.css";
function DeleteComponent() {
  const [id, setId] = useState("");
  const handleClick = () => {
    if (id === "") {
      document.getElementById("error").innerHTML = "Enter the Order Id";
    } else {
      fetch("http://localhost:7000/Order/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  };
  return (
    <form>
      <h2>Delete Order</h2>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <input type="button" onClick={handleClick} value="Delete"></input>
      <br></br>
      <p id="error"></p>
    </form>
  );
}

export default DeleteComponent;
