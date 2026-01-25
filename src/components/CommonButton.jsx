// CommonButton.jsx
import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// ✅ Forward width and height props
const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "width" && prop !== "height",
})(({ width, height }) => ({
  width: width || "200px",
  height: height || "50px",
  borderRadius: "8px",
  fontWeight: "bold",
  textTransform: "none",
}));

const CommonButtons = ({ label, width, height, onClick, ...rest }) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick} {...rest}>
      {label}
    </StyledButton>
  );
};

export default CommonButtons;
