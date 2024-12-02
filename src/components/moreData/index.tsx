import TextInput from "../textInput";
import { Col, Row } from "antd";
import { ITabProps } from "../../types/types";

function MoreDataTab({ form }: ITabProps) {
  return (
    <Row gutter={[20, 24]}>
      <Col span={12}>
        <TextInput label="نام" name="firstName" form={form} required={false} />
      </Col>
      <Col span={12}>
        <TextInput
          label="نام خانوادگی"
          name="lastName"
          form={form}
          required={false}
        />
      </Col>
    </Row>
  );
}

export default MoreDataTab;
