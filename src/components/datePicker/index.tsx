import React, { useEffect, useState, useRef } from "react";
import { CalendarProvider, DatePicker } from "zaman";
import InputTitle from "../inputTitle";
import { IDatePickerType } from "../../types/types";
import { Form } from "antd";
import { requiredValidation } from "../../utils/validator";
import styles from "./index.module.scss";
import ReactDOM from "react-dom";
import CloseIcon from "../../icons/CloseIcon";

const PersianCalendar = ({
  form,
  label,
  name,
  onReset,
  required,
  isEditMode,
}: IDatePickerType) => {
  const [calendarValue, setCalendarValue] = useState<Date | undefined>(
    undefined
  );
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const modalRef = useRef<HTMLElement | null>(null);
  const calendarValueRef = useRef<Date | undefined>(calendarValue);

  useEffect(() => {
    setIsFocus(false);
    setCalendarValue(undefined);
    calendarValueRef.current = undefined;
  }, [onReset]);

  useEffect(() => {
    calendarValueRef.current = calendarValue;
  }, [calendarValue]);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        const addedNodes = mutation.addedNodes;
        const removedNodes = mutation.removedNodes;

        if (addedNodes.length > 0) {
          const header = document.querySelector(".css-1m8qzkt");
          const headerElement = header as HTMLElement;
          if (header && headerElement !== modalRef.current) {
            modalRef.current = headerElement;
            const newElement = document.createElement("div");
            newElement.classList.add(styles.closeModal);

            ReactDOM.render(
              <>
                <p className={styles.datePickerText}>
                  تاریخ مورد نظر را انتخاب کنید
                </p>
                <CloseIcon />
              </>,
              newElement
            );
            headerElement.insertBefore(newElement, headerElement.firstChild);
          }
        }

        if (removedNodes.length > 0) {
          const header = document.querySelector(".css-1m8qzkt");
          if (!header) {
            if (calendarValueRef.current) setIsFocus(true);
            else setIsFocus(false);
          }
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`formItemContainer datePicker ${styles.datePicker}`}
      onClick={() => {
        !isFocus && setIsFocus(true);
      }}
      onBlur={() => !calendarValue && setIsFocus(false)}
    >
      <InputTitle
        isFocus={isFocus}
        label={label}
        required={required}
        onClick={() => {
          if (!form.getFieldValue(name)) setIsFocus(true);

          const inputElement = document.querySelector(".datePicker input");
          if (inputElement instanceof HTMLInputElement) {
            inputElement.click();
          }
        }}
      />
      <Form.Item
        name={name}
        rules={[
          {
            required: !calendarValue && required,
            message: !calendarValue && requiredValidation(),
          },
        ]}
      >
        <CalendarProvider>
          <DatePicker
            className={`ant-picker ${name}`}
            onChange={(e) => {
              setCalendarValue(new Date(e.value));
              setIsFocus(true);
              const additionalElement = document.querySelector(
                ".datePicker .ant-form-item-additional"
              );
              if (additionalElement instanceof HTMLElement) {
                additionalElement.style.display = "none";
              }
            }}
          />
        </CalendarProvider>
      </Form.Item>
      {/* <span
        className={styles.clearDate}
        style={{ display: calendarValue ? "block" : "none" }}
        onClick={() => {
          setIsFocus(false);
          setCalendarValue(undefined);
          const inputElement = document.querySelector(".datePicker input");
          if (inputElement instanceof HTMLInputElement) {
            inputElement.value = "";
            inputElement.defaultValue = "";
            inputElement.setAttribute("value", undefined);
          }
        }}
      >
        <CloseIcon />
      </span> */}
    </div>
  );
};

export default PersianCalendar;
