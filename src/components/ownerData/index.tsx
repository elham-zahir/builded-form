import React from "react";
import styles from "./index.module.scss";
import TextInput from "../textInput";
import PhoneNumberInput from "../phoneNumberInput";
import NationalCodeInput from "../nationalCodeInput";
import AgeInput from "../ageInput";
import GenderSelection from "../gender";
import EmailInput from "../emailInput";
import { Col, FormInstance, Row } from "antd";

interface IProps {
  form: FormInstance;
}

function OwnerDataTab({ form }: IProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput label="نام" name="firstName" form={form} />
      </Col>

      <Col span={12}>
        <TextInput label="نام خانوادگی" name="lastName" form={form} />
      </Col>

      <Col span={12}>
        <PhoneNumberInput label="شماره تلفن" name="phoneNumber" form={form} />
      </Col>

      <Col span={12}>
        <EmailInput label="ایمیل" name="email" form={form} />
      </Col>

      <Col span={12}>
        <NationalCodeInput name="nationalCode" label="کد ملی" form={form} />
      </Col>

      <Col span={12}>
        <AgeInput name="age" label="سن" form={form} />
      </Col>

      <Col span={12}>
        <GenderSelection name="gender" label="جنسیت" form={form} />
      </Col>
    </Row>
  );
}

export default OwnerDataTab;
