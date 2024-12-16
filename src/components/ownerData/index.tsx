import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";
import { fieldType } from "../../utils/validator";

function OwnerDataTab({ form, fields }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      {fields.map((item) => {
        return <Col span={12}>{fieldType(item, form)}</Col>;
      })}
      {/* <Col span={12}>
        <TextInput label="نام" name="firstName" form={form} required={true} />
      </Col>

      <Col span={12}>
        <TextInput
          label="نام خانوادگی"
          name="lastName"
          form={form}
          required={true}
        />
      </Col> */}

      {/* <Col span={12}>
        <PhoneNumberInput
          label="شماره تلفن"
          name="phoneNumber"
          form={form}
          required={true}
        />
      </Col> */}

      {/* <Col span={12}>
        <EmailInput label="ایمیل" name="email" form={form} required={false} />
      </Col> */}

      {/* <Col span={12}>
        <NationalCodeInput
          name="nationalCode"
          label="کد ملی"
          form={form}
          required={false}
        />
      </Col> */}

      {/* <Col span={12}>
        <AgeInput name="age" label="سن" form={form} required={false} />
      </Col> */}

      {/* <Col span={12}>
        <SelectionInput
          options={[
            { value: "male", name: "مذکر" },
            { value: "female", name: "مونث" },
          ]}
          name="gender"
          label="جنسیت"
          form={form}
          required={true}
        />
      </Col> */}
    </Row>
  );
}

export default OwnerDataTab;
