import React from "react";
import { ReactComponent as Icon } from "../assets/images/powerpoint.svg";

interface IProps {
  onClick?: () => void;
}

function PowerpointIcon({ onClick }: IProps) {
  return <Icon width={60} height={60} fill="#b22222" onClick={onClick} />;
}

export default PowerpointIcon;
