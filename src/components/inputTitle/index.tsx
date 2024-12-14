interface IProps {
  isFocus: boolean;
  label: string;
  required: boolean;
  onClick: () => void;
}

function InputTitle({ isFocus, label, required, onClick }: IProps) {
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
      <span className="requirement">{required ? "(اجباری)" : ""}</span>
    </p>
  );
}

export default InputTitle;
