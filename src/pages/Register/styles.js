import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  h1 {
    color: var(--primary);
    font-size: 15px;
    margin-bottom: 12px;
  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const BoxNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  width: 290px;
  button {
    width: 70px;
    height: 25px;
    font-size: 12px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
    width: 340px;
    margin-bottom: 10px;
    button {
      height: 32px;
      margin-top: 3px;
      width: 80px;
    }
  }
`;

export const BoxSelect = styled.div`
  display: flex;
  flex-direction: column;

  select {
    margin-bottom: 10px;
    width: 250px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: var(--grey-2);
    font-size: 12px;
    color: var(--grey-1);
    padding-left: 8px;
  }

  @media (min-width: 1440px) {
    select {
      width: 270px;
    }
  }
`;

export const BoxDescription = styled.div`
  width: 250px;
  text-align: start;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: var(--grey-3);
  width: 290px;
  height: 414px;
  margin-bottom: 50px;
  overflow: auto;

  h2 {
    color: var(--grey-0);
    margin-top: 15px;
    font-weight: 700;
    font-size: 14px;
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    text-align: start;
    align-items: center;
    text-align: start;
  }
  input {
    margin-bottom: 10px;
    width: 250px;
    border-radius: 5px;
    border: none;
    height: 30px;
    background-color: var(--grey-2);
    color: var(--grey-0);
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
    width: 340px;
    height: 530px;
    h2 {
      font-size: 17px;
    }
    label {
      font-size: 14px;
      width: 268px;
    }
    input {
      width: 270px;
      height: 40px;
      ::placeholder {
        font-size: 12px;
      }
    }
    select {
      height: 40px;
      font-size: 12px;
    }
    button {
      width: 270px;
      height: 40px;
    }
  }
`;
