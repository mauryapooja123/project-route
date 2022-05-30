import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Profile() {
  const res = useSelector((state) => state.register.register);
  console.log(res, "iiii97u89");
  return (
    <div>
      {/* <p> View Profile</p>
      <p>{res[0].name}</p> */}
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>View Profile</Card.Title>

          <Card.Text>
            <p style={{ color: "green" }}>
              {" "}
              name:
              <span style={{ color: "black" }}>{res.name}</span>
            </p>
            <p style={{ color: "green" }}>
              number :<span style={{ color: "black" }}>{res.number}</span>
            </p>
            <p style={{ color: "green" }}>
              {" "}
              email :<span style={{ color: "black" }}>{res.email}</span>
            </p>
            <p style={{ color: "green" }}>
              {" "}
              password:
              <span style={{ color: "black" }}>{res.password}</span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
