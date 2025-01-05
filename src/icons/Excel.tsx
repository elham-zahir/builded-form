import React from "react";
import { ReactComponent as Icon } from "../assets/images/excel.svg";

interface IProps {
  onClick?: () => void;
}

function ExcelIcon({ onClick }: IProps) {
  return <Icon width={60} height={60} fill="#3db182" onClick={onClick} />;
}

export default ExcelIcon;
