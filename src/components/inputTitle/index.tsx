import React from "react";

interface IProps {
  isFocus: boolean;
  label: string;
  onClick: () => void;
}

function InputTitle({ isFocus, label, onClick }: IProps) {
  return (
    <p
      className={"label"}
      style={{
        top: isFocus ? "-11px" : "17px",
        color: isFocus ? "#4daa9f" : "#969696",
        fontWeight: isFocus ? 600 : 400,
      }}
      onClick={onClick}
    >
      {label}
    </p>
  );
}

export default InputTitle;
