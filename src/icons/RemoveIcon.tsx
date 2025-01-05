import React from "react";
import { ReactComponent as Icon } from "../assets/images/trash.svg";

interface IProps {
  width?: number;
  height?: number;
}

function TrashIcon({ width = 12, height = 16 }: IProps) {
  return <Icon width={width} height={height} fill="white" />;
}

export default TrashIcon;
