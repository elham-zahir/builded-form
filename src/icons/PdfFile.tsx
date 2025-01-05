import React from "react";
import { ReactComponent as Icon } from "../assets/images/pdf.svg";

interface IProps {
  onClick?: () => void;
}

function PdfIcon({ onClick }: IProps) {
  return <Icon width={60} height={60} fill="#d21f3c" onClick={onClick} />;
}

export default PdfIcon;
