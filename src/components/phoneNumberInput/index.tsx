import { Form, Input, Select } from "antd";
import React, { useRef, useState } from "react";
import { requiredValidation } from "../../utils/validator";
import { IOptionType, ITextProps } from "../../types/types";
import InputTitle from "../inputTitle";
import AdIcon from "../../icons/AdIcon";
import AfIcon from "../../icons/AfIcon";
import AgIcon from "../../icons/AgIcon";
import AiIcon from "../../icons/AiIcon";
import AlIcon from "../../icons/AlIcon";
import AmIcon from "../../icons/AmIcon";
import AoIcon from "../../icons/AoIcon";
import AqIcon from "../../icons/AqIcon";
import ArIcon from "../../icons/ArIcon";
import AsIcon from "../../icons/AsIcon";
import AtIcon from "../../icons/AtIcon";
import AuIcon from "../../icons/AuIcon";
import AwIcon from "../../icons/AwIcon";
import AxIcon from "../../icons/AxIcon";
import AzIcon from "../../icons/AzIcon";
import BbIcon from "../../icons/BbIcon";
import BdIcon from "../../icons/BdIcon";
import BeIcon from "../../icons/BeIcon";
import BhIcon from "../../icons/BhIcon";
import BjIcon from "../../icons/BjIcon";
import BsIcon from "../../icons/BsIcon";
import ByIcon from "../../icons/ByIcon";
import BzIcon from "../../icons/BzIcon";
import CaIcon from "../../icons/CaIcon";
import IrIcon from "../../icons/IrIcon";
import CnIcon from "../../icons/CnIcon";
import DownIcon from "../../icons/DownIcon";
import CloseIcon from "../../icons/CloseIcon";

const { Option } = Select;

const countries: IOptionType[] = [
  {
    name: (
      <>
        <AdIcon />+ 1
      </>
    ),
    value: "+1",
  },
  {
    name: (
      <>
        <AfIcon />
        +7
      </>
    ),
    value: "+7",
  },
  {
    name: (
      <>
        <AgIcon /> +20
      </>
    ),
    value: "+20",
  },
  {
    name: (
      <>
        <AiIcon /> +27
      </>
    ),
    value: "+27",
  },
  {
    name: (
      <>
        <AlIcon /> + 31
      </>
    ),
    value: "+31",
  },
  {
    name: (
      <>
        <AmIcon /> + 32
      </>
    ),
    value: "+32",
  },
  {
    name: (
      <>
        <AoIcon /> + 33
      </>
    ),
    value: "+33",
  },
  {
    name: (
      <>
        <AqIcon /> + 34
      </>
    ),
    value: "+34",
  },
  {
    name: (
      <>
        <ArIcon /> + 39
      </>
    ),
    value: "+39",
  },
  {
    name: (
      <>
        <AsIcon /> + 41
      </>
    ),
    value: "+41",
  },
  {
    name: (
      <>
        <AtIcon />+ 44
      </>
    ),
    value: "+44",
  },
  {
    name: (
      <>
        <AuIcon />+ 46
      </>
    ),
    value: "+46",
  },
  {
    name: (
      <>
        <AwIcon />
        +49
      </>
    ),
    value: "+49",
  },
  {
    name: (
      <>
        <AxIcon />
        +52
      </>
    ),
    value: "+52",
  },
  {
    name: (
      <>
        <AzIcon />
        +55
      </>
    ),
    value: "+55",
  },
  {
    name: (
      <>
        <BbIcon />
        +60
      </>
    ),
    value: "+60",
  },
  {
    name: (
      <>
        <BdIcon />
        +61
      </>
    ),
    value: "+61",
  },
  {
    name: (
      <>
        <BeIcon />
        +66
      </>
    ),
    value: "+66",
  },
  {
    name: (
      <>
        <BhIcon />
        +81
      </>
    ),
    value: "+81",
  },
  {
    name: (
      <>
        <BjIcon />
        +82
      </>
    ),
    value: "+82",
  },
  {
    name: (
      <>
        <BsIcon />
        +90
      </>
    ),
    value: "+90",
  },
  {
    name: (
      <>
        <ByIcon />
        +91
      </>
    ),
    value: "+91",
  },
  {
    name: (
      <>
        <BzIcon />
        +92
      </>
    ),
    value: "+92",
  },
  {
    name: (
      <>
        <CaIcon />
        +93
      </>
    ),
    value: "+93",
  },
  {
    name: (
      <>
        <CnIcon />
        +94
      </>
    ),
    value: "+94",
  },
  {
    name: (
      <>
        <IrIcon />
        +98
      </>
    ),
    value: "+98",
  },
];

function PhoneNumberInput({ name, label, form, required }: ITextProps) {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  const onSearch = (value: string) => {};

  const selectBefore = (
    <Select
      showSearch
      defaultValue="+98"
      style={{ width: 60 }}
      onSearch={onSearch}
      suffixIcon={<DownIcon />}
      allowClear={{ clearIcon: <CloseIcon /> }}
    >
      {countries.map((item: IOptionType, index: number) => {
        return (
          <Option value={item.value} key={index}>
            {item.name}
          </Option>
        );
      })}
    </Select>
  );

  return (
    <div className={"formItemContainer"}>
      <InputTitle
        isFocus={isFocus}
        label={label}
        required={required}
        onClick={() => {
          if (!form.getFieldValue(name) && inputRef.current) {
            inputRef.current.focus();
            setIsFocus(true);
          }
        }}
      />
      <Form.Item
        name={name}
        rules={[
          {
            required: required,
            message: requiredValidation(),
          },
          {
            pattern: /^9\d{9}$/,
            message:
              "لطفاً یک شماره تلفن معتبر وارد کنید (باید با 9 شروع شود و 10 رقم باشد).",
          },
        ]}
      >
        <Input
          ref={inputRef}
          type="number"
          addonAfter={selectBefore}
          onClick={() => setIsFocus(true)}
          onBlur={() => {
            if (!form.getFieldValue(name)) {
              setIsFocus(false);
            }
          }}
        />
      </Form.Item>
    </div>
  );
}

export default PhoneNumberInput;
