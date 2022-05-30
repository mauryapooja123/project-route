import React from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../Users/renderField";

//const required = (value) => (value ? undefined : "Required");

const SimpleForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      {console.log(handleSubmit, "ddddddddd")}
      <Field
        name="email"
        type="text"
        component={renderField}
        label="Email"
        //validate={[required]}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Password"
        //validate={[required]}
      />

      <div>
        {/* <button type="submit">Submit</button> */}
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "renderField", // a unique identifier for this form
})(SimpleForm);
