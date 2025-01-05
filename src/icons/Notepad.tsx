import React from "react";
import { ReactComponent as Icon } from "../assets/images/notepad.svg";

interface IProps {
  onClick?: () => void;
}

function NotepadIcon({ onClick }: IProps) {
  return <Icon width={60} height={60} fill="#addbe6" onClick={onClick} />;
}

export default NotepadIcon;
