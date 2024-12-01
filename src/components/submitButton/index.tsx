import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Form, Row } from "antd";

function SubmitButton() {
  return (
    <Row className={styles.submitButtonContainer} gutter={[16, 24]}>
      <Col span={12} className={styles.submitButtonCol}>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            ثبت اطلاعات
          </Button>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default SubmitButton;
