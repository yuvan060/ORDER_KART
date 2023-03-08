import { useState, useEffect } from "react";
import "./styleForm.css";
function PostController() {
  const [orderName, setOrderName] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [address, setOrderAddress] = useState("");
  const [phoneNo, setOrderPhoneNo] = useState("");
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setCurrentUser(items);
    }
  }, []);
  console.log(currentUser);
  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      orderName,
      orderBy,
      address,
      phoneNo,
      custId: currentUser,
    };
    fetch("http://localhost:7000/Order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    }).then(
      (document.getElementById("error").innerHTML = "Order Placed Successfully")
    );
  };

  return (
    <>
      <form>
        <h2>Place Order</h2>
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
        <input type="button" onClick={handleSubmit} value="Submit"></input>
        <br></br>
        <p id="error"></p>
      </form>
    </>
  );
}

export default PostController;
