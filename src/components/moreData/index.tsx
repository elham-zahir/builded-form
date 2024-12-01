import React from "react";
import TextInput from "../textInput";

function MoreDataTab() {
  return (
    <>
      <TextInput label="نام" name="firstName" />
      <TextInput label="نام خانوادگی" name="lastName" />
    </>
  );
}

export default MoreDataTab;
