import { Col, Form, message, Row } from "antd";
import { ITabProps } from "../../types/types";
import { fieldType } from "../../utils/validator";
import styles from "./index.module.scss";
import FormAction from "../formAction";
import { useState } from "react";

function DataTab({ name, fields, onSubmitTab }: ITabProps) {
  const [form] = Form.useForm();
  const [resetClicked, setResetClicked] = useState<boolean>(false);

  const handleSubmit = async (values: any) => {
    try {
      console.log({ values });
      message.success("اطلاعات با موفقیت ثبت شد.");
      onSubmitTab();
    } catch (error) {
      message.error("ثبت با خطا مواجه شد.");
    }
  };

  const handleError = async (errorInfo: any) => {
    try {
      console.error("Error info:", errorInfo);
      message.error("ثبت با خطا مواجه شد.");
    } catch (error) {
      message.error("خطای غیرمنتظره‌ای رخ داد.");
    }
  };

  return (
    <>
      <Form
        name={name}
        form={form}
        onFinish={async (values: any) => await handleSubmit(values)}
        onFinishFailed={handleError}
        autoComplete="off"
        layout="vertical"
        className={styles.form}
      >
        <Row gutter={[20, 24]} className={styles.formInputs}>
          {fields.map((item) => {
            return (
              <Col span={24} md={12} key={item.name}>
                {fieldType(item, form, resetClicked)}
              </Col>
            );
          })}
        </Row>
        <FormAction
          isEditMode={false}
          onReset={() => setResetClicked(!resetClicked)}
        />
      </Form>
    </>
  );
}

export default DataTab;
