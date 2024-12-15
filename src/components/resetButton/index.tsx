import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Form } from "antd";

interface IProps {
  onClick: () => void;
}

function ResetButton({ onClick }: IProps) {
  return (
    <Col span={12}>
      <Form.Item label={null}>
        <Button
          type="primary"
          htmlType="reset"
          className={styles.resetButton}
          onClick={onClick}
        >
          حذف اطلاعات
        </Button>
      </Form.Item>
    </Col>
  );
}

export default ResetButton;
