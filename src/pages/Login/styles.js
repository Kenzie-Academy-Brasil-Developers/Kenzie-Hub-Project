import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    color: var(--primary);
    font-size: 20px;
    margin-bottom: 12px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: var(--grey-3);
  width: 290px;
  height: 370px;
  h2 {
    color: var(--grey-0);
    margin-top: 25px;
    font-weight: 700;
    font-size: 14px;
  }
`;
