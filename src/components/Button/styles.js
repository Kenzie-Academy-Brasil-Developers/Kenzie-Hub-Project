import styled, { css } from "styled-components";

const Colors = (props) => {
  return props === "--primary"
    ? "#FF577F"
    : props === "--grey-1"
    ? "#868E96"
    : props === "--primary-negative" && "#59323F";
};

export const StyledButton = styled.button`
  background-color: ${(props) => Colors(props.colorSchema)};
  width: 250px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 13px;
  color: var(--grey-0);

  ${(props) =>
    props.colorSchema === "--primary" &&
    css`
      &:hover {
        background: #ff427f;
      }
    `};

  ${(props) =>
    props.colorSchema === "--grey-1" &&
    css`
      &:hover {
        background: #343b41;
      }
    `};

  ${(props) =>
    props.colorSchema === "--primary-negative" &&
    css`
      &:hover {
        background: #868e96;
      }
    `};
`;
