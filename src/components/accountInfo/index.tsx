import React from "react";
import PasswordInput from "../passwordInput";
import TextInput from "../textInput";

function AccountInfoTab() {
  return (
    <>
      <TextInput label="نام کاربری" name="userName" />
      <PasswordInput label="رمز عبور" name="password" />
      <PasswordInput label="تکرار رمز عبور" name="passwordRepeat" />
    </>
  );
}

export default AccountInfoTab;
