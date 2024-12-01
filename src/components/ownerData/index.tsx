import React from "react";
import styles from "./index.module.scss";
import TextInput from "../textInput";
import PhoneNumberInput from "../phoneNumberInput";
import NationalCodeInput from "../nationalCodeInput";
import AgeInput from "../ageInput";
import GenderSelection from "../gender";
import EmailInput from "../emailInput";
import { Col, Row } from "antd";

function OwnerDataTab() {
  return (
    <Row gutter={[16, 24]}>
      <Col span={12}>
        <TextInput label="نام" name="firstName" />
      </Col>

      <Col span={12}>
        <TextInput label="نام خانوادگی" name="lastName" />
      </Col>

      <Col span={12}>
        <PhoneNumberInput label="شماره تلفن" name="phoneNumber" />
      </Col>

      <Col span={12}>
        <EmailInput label="ایمیل" name="email" />
      </Col>

      <Col span={12}>
        <NationalCodeInput name="nationalCode" label="کد ملی" />
      </Col>

      <Col span={12}>
        <AgeInput name="age" label="سن" />
      </Col>

      <Col span={12}>
        <GenderSelection name="gender" label="جنسیت" />
      </Col>
    </Row>
  );
}

export default OwnerDataTab;
