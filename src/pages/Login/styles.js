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

  @media (min-width: 1440px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const BoxDescription = styled.div`
  width: 250px;

  label {
    text-align: start;
    padding-bottom: 10px;
    color: var(--grey-0);
    font-size: 10px;
  }
  span {
    padding-left: 5px;
    color: var(--grey-0);
    font-size: 10px;
    text-decoration: underline;
    text-decoration-color: var(--error);
  }
`;

export const BoxNewAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: var(--grey-1);
    font-size: 11px;
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
  form {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    text-align: start;
    align-items: center;
    text-align: start;
  }
  label {
    text-align: start;
    width: 250px;
    padding-bottom: 10px;
    color: var(--grey-0);
    font-size: 10px;
  }
  input {
    margin-bottom: 10px;
    width: 250px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: var(--grey-2);
    ::placeholder {
      color: var(--grey-1);
      font-size: 10px;
      padding-left: 10px;
    }
    :hover {
      border: 1px solid var(--grey-0);
    }
  }
  button {
    margin-top: 15px;
  }

  @media (min-width: 1440px) {
    width: 320px;
    height: 410px;
    h2 {
      font-size: 17px;
    }
    label {
      font-size: 12px;
      width: 268px;
    }
    input {
      width: 270px;
      height: 40px;
      ::placeholder {
        font-size: 11px;
      }
    }
    button {
      width: 270px;
      height: 40px;
    }
  }
`;
