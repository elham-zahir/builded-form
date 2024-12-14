import React, { useState } from "react";
import { ConfigProvider, Form } from "antd";
import styles from "./styles/index.module.scss";
import "./styles/global.scss";
import TabsContainer from "./components/tabs";
import TextInput from "./components/textInput";
import SelectionInput from "./components/gender";
import { initialFields, inputTypes } from "./types/initials";
import CheckboxButtons from "./components/checkboxButton";
import NumberInput from "./components/ageInput";
import SubmitButton from "./components/submitButton";
import { IFieldType } from "./types/types";
import CreatedField from "./components/createdField";

function App() {
  const [form] = Form.useForm();
  const [fields, setFields] = useState();

  const handleSubmit = (values: IFieldType) => {
    console.log("Form values:", values);
  };

  const handleError = (values: any) => {
    console.log({ values });
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
          initialValues={initialFields[0]}
          onFinish={handleSubmit}
          onFinishFailed={handleError}
          autoComplete="off"
          layout="vertical"
          className={styles.formCreatorContainer}
        >
          <TextInput label="نام" name="label" form={form} required={true} />
          <SelectionInput
            form={form}
            label="نوع"
            name="inputType"
            required
            options={inputTypes}
          />
          <CheckboxButtons
            label=""
            name="require"
            options={[{ name: "فیلد اجباری است", value: true }]}
            required={false}
          />
          <NumberInput
            form={form}
            label="حداقل تعداد کاراکتر"
            name="min"
            required={false}
            min={0}
          />
          <NumberInput
            form={form}
            label="حداکثر تعداد کاراکتر"
            name="max"
            required={false}
            min={0}
          />
          <TextInput form={form} label="الگو" name="patten" required={false} />
          <SubmitButton />
        </Form>
        <div className={styles.fieldsContainer}>
          {initialFields.map((item, index) => {
            return (
              <CreatedField
                name={item.label}
                key={index}
                onEdit={() => {}}
                onRemove={() => {}}
              />
            );
          })}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
