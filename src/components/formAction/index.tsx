import React from "react";
import styles from "./index.module.scss";
import { Button, Col, Form, Row } from "antd";

interface IProps {
  isEditMode: boolean;
  onReset: () => void;
}

function FormAction({ isEditMode, onReset }: IProps) {
  return (
    <Row
      gutter={[20, 24]}
      className={`${styles.buttonsContainer} ActionButtonsContainer`}
    >
      <Col xs={24} sm={24} md={12}>
        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
          >
            {isEditMode ? " ویرایش" : " ثبت"} اطلاعات
          </Button>
        </Form.Item>
      </Col>
      <Col xs={24} sm={24} md={12}>
        <Form.Item label={null}>
          <Button
            type="primary"
            htmlType="reset"
            className={styles.resetButton}
            onClick={onReset}
          >
            حذف اطلاعات
          </Button>
        </Form.Item>
      </Col>
    </Row>
  );
}

export default FormAction;
