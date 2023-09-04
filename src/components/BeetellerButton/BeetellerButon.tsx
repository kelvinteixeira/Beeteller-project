import { ReactNode } from "react";
import { Button, styled } from "@mui/material";

type BeetellerButtonProps = {
  title: string | undefined;
  size: "small" | "medium" | "large" | undefined;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
};

export const BeetellerButton = (props: BeetellerButtonProps) => {
  return (
    <StyledButton
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      size={props.size}
    >
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  text-transform: none;
  background-color: #f1cd6d;
  color: #000000;
  font-weight: 600;
  border-radius: .5rem;

  &:hover {
    background-color: #ebb932 !important;
  }
`;
