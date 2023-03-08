import { useState } from "react";
import "./styleForm.css";
function UpdateController() {
  const [id, setId] = useState("");
  const [orderName, setOrderName] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [address, setOrderAddress] = useState("");
  const [phoneNo, setOrderPhoneNo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      orderName,
      orderBy,
      address,
      phoneNo,
    };
    if (id === "") {
      document.getElementById("error").innerHTML = "Enter the Order Id";
    } else {
      fetch("http://localhost:7000/Orders/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      })
        .then((document.getElementById("error").innerHTML = "Updated"))
        .catch(
          (document.getElementById("error").innerHTML = "Invalid Order Details")
        );
    }
  };

  return (
    <>
      <form>
        <h2>Update Your Order</h2>
        <input
          type="number"
          placeholder="Enter the order Id"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter the order name"
          value={orderName}
          onChange={(e) => {
            setOrderName(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter your name"
          value={orderBy}
          onChange={(e) => {
            setOrderBy(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter your Address"
          value={address}
          onChange={(e) => {
            setOrderAddress(e.target.value);
          }}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="Enter your phone no"
          value={phoneNo}
          onChange={(e) => {
            setOrderPhoneNo(e.target.value);
          }}
        ></input>
        <br></br>
        <input type="button" value="Get Details"></input>
        <input type="button" onClick={handleSubmit} value="Submit"></input>
        <br></br>
        <p id="error"></p>
      </form>
    </>
  );
}

export default UpdateController;
