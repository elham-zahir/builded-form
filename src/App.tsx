import React, { useState } from "react";
import { Checkbox, Col, ConfigProvider, Form, message, Row } from "antd";
import styles from "./styles/index.module.scss";
import "./styles/global.scss";
import TextInput from "./components/textInput";
import SelectionInput from "./components/selectionInput";
import { initialFields, inputTypes } from "./types/initials";
import NumberInput from "./components/numberInput";
import SubmitButton from "./components/submitButton";
import { IFieldType } from "./types/types";
import CreatedField from "./components/createdField";
import ResetButton from "./components/resetButton";

function App() {
  const [form] = Form.useForm();
  const [fields, setFields] = useState<IFieldType[]>(initialFields);
  const [isEditClicked, setIsEditClicked] = useState<boolean>(false);
  const [editField, setEditField] = useState<IFieldType>(undefined);

  const handleSubmit = (values: any) => {
    const type = inputTypes.filter((Item) => Item.value === values.type);

    if (editField) {
      const editedField: IFieldType = {
        id: editField.id,
        label: values.label,
        required: values?.required || false,
        max: values.max,
        min: values.min,
        options: [{ name: "", value: "" }],
        pattern: values?.pattern ? new RegExp(values.pattern) : undefined,
        type: type[0],
        name: editField.name,
      };

      const updatedFields = fields.map((field) =>
        field.id === editField.id ? editedField : field
      );

      setFields(updatedFields);
    } else {
      const newField: IFieldType = {
        id: fields[fields.length - 1].id + 1,
        label: values.label,
        required: values?.required || false,
        max: values.max,
        min: values.min,
        options: [{ name: "", value: "" }],
        pattern: values?.pattern ? new RegExp(values.pattern) : undefined,
        type: type[0],
        name: type[0].value.toString(),
      };
      setFields([...fields, newField]);
    }

    setEditField(undefined);
    message.success("با موفقیت اضافه شد.");
    form.resetFields();
    setIsEditClicked(!isEditClicked);
  };

  const handleError = (values: any) => {
    message.error("ثبت با خطا مواجه شد.");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4daa9f",
        },
      }}
    >
      <div className={styles.container}>
        {/* <Form
        name="userData"
        form={form}
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={handleError}
        autoComplete="off"
        layout="vertical"
        className={styles.container}
      >
        <div className={styles.tabs}>
          <TabsContainer form={form} />
        </div>
      </Form> */}
        {/* <div className={styles.tabs}>
          <TabsContainer form={form} />
        </div> */}

        <Form
          name="formCreator"
          form={form}
          onFinish={handleSubmit}
          onFinishFailed={handleError}
          autoComplete="off"
          layout="vertical"
          className={styles.formCreatorContainer}
        >
          <TextInput
            label="عنوان فیلد"
            name="label"
            form={form}
            required={true}
            isEditMode={isEditClicked}
          />
          <SelectionInput
            label="نوع فیلد"
            name="type"
            form={form}
            required
            options={inputTypes}
            isEditMode={isEditClicked}
          />
          <Row gutter={[16, 24]}>
            <Col span={12}>
              <NumberInput
                form={form}
                label="حداقل کاراکتر"
                name="min"
                required={false}
                min={0}
                isEditMode={isEditClicked}
              />
            </Col>
            <Col span={12}>
              <NumberInput
                form={form}
                label="حداکثر کاراکتر"
                name="max"
                required={false}
                min={0}
                isEditMode={isEditClicked}
              />
            </Col>
          </Row>
          <TextInput
            form={form}
            label="الگوی فیلد"
            name="pattern"
            required={false}
            isEditMode={isEditClicked}
          />
          <TextInput
            form={form}
            label="پیغام خطای الگو"
            name="pattenErrorMessage"
            required={false}
            isEditMode={isEditClicked}
          />
          <Form.Item name="required" valuePropName="checked" label={null}>
            <Checkbox value={true}>پر کردن فیلد الزامی است.</Checkbox>
          </Form.Item>
          <Row className={styles.submitButtonContainer} gutter={[16, 24]}>
            <SubmitButton isEditMode={editField && editField?.id && true} />
            <ResetButton
              onClick={() => {
                setIsEditClicked(!isEditClicked);
                setEditField(undefined);
              }}
            />
          </Row>
        </Form>
        <div className={styles.fieldsContainer}>
          {fields.map((item, index: number) => {
            return (
              <CreatedField
                name={item.label}
                key={index}
                index={index}
                onEdit={(key: number) => {
                  setEditField(fields[key]);
                  form.setFieldsValue(fields[key]);
                  form.setFieldValue("type", fields[key].type.value);
                  setIsEditClicked(!isEditClicked);
                }}
                onRemove={(key: number) => {
                  const updatedFields = fields.filter((_, i) => i !== key);
                  setFields(updatedFields);
                  if (key === editField.id) {
                    setEditField(undefined);
                    form.resetFields();
                    setIsEditClicked(!isEditClicked);
                  }
                }}
              />
            );
          })}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
