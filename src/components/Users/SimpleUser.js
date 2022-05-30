import React from "react";
import SimpleForm from "../Pages/SimpleForm";

export default function SimpleUser() {
  return (
    <>
      <SimpleForm onSubmit={(data) => alert(JSON.stringify(data))} />
    </>
  );
}
