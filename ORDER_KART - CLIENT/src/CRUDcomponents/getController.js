import { useState, useEffect } from "react";
import "./styleComponent.css";
function GetOrder() {
  const [result, setObject] = useState([]);
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("currentUser"));
    if (items) {
      setCurrentUser(items);
    }
  }, []);
  console.log(currentUser);
  useEffect(() => {
    fetch("http://localhost:7000/Orders", {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((response) => response.json())
      .then((result) => setObject(result))
      .then((res) => console.log(result));
  });
  return (
    <>
      <h1>List Of Orders</h1>
      <table className="">
        <thead>
          <th>Order Id</th>
          <th>Order Name</th>
          <th>Order By</th>
        </thead>
        {result.map((res) =>
          res.custId.custId === currentUser.custId ? (
            <tr key={res.orderId}>
              <td>{res.orderId}</td> <td>{res.orderName}</td>{" "}
              <td>{res.orderBy}</td> {}{" "}
            </tr>
          ) : (
            ""
          )
        )}
      </table>
    </>
  );
}

export default GetOrder;
