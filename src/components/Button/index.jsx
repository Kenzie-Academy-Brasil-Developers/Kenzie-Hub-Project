import { StyledButton } from "./styles";

const Button = ({ children, colorSchema, ...rest }) => {
  return (
    <StyledButton colorSchema={colorSchema} {...rest}>
      {children}
    </StyledButton>
  );
};
export default Button;
