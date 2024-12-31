// import React, { useState } from "react";
// import PersianCalendar from "react-persian-calendar";

// const PersianCalendarComponent = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       <h2>تقویم شمسی</h2>
//       <PersianCalendar onChange={handleDateChange} />
//       {selectedDate && (
//         <div>
//           <p>تاریخ انتخابی: {selectedDate}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PersianCalendarComponent;

import React, { useRef, useState } from "react";
import { CalendarProvider, DatePicker } from "zaman";
import InputTitle from "../inputTitle";
import { IDatePickerType } from "../../types/types";
import { Form } from "antd";
import { requiredValidation } from "../../utils/validator";

const PersianCalendar = ({
  form,
  label,
  name,
  onReset,
  required,
  isEditMode,
}: IDatePickerType) => {
  const [calendarValue, setCalendarValue] = useState(undefined);
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const inputRef = useRef<any>(null);

  return (
    // <div>
    //   <CalendarProvider>
    //     <DatePicker
    //       defaultValue={calendarValue}
    //       onChange={(e) => setCalendarValue(new Date(e.value))}
    //     />
    //   </CalendarProvider>
    // </div>
    <div
      className={"formItemContainer , datePicker"}
      onClick={() => !isFocus && setIsFocus(true)}
      onBlur={() => !calendarValue && setIsFocus(false)}
    >
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
        rules={[{ required: required, message: requiredValidation() }]}
      >
        <CalendarProvider>
          <DatePicker
            defaultValue={calendarValue}
            onChange={(e) => {
              setCalendarValue(new Date(e.value));
              setIsFocus(true);
            }}
          />
        </CalendarProvider>
      </Form.Item>
    </div>
  );
};

export default PersianCalendar;
