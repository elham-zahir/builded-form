import { IOptionType, IRadioProps } from "../../types/types";
import { Checkbox, Form } from "antd";
import { requiredValidation } from "../../utils/validator";

function CheckboxButtons({ name, label, options, required }: IRadioProps) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required: required,
          message: requiredValidation(),
        },
      ]}
    >
      <Checkbox.Group>
        {options.map((item: IOptionType, index: number) => {
          return (
            <Checkbox value={item.value} key={index}>
              {item.name}
            </Checkbox>
          );
        })}
      </Checkbox.Group>
    </Form.Item>
  );
}

export default CheckboxButtons;
