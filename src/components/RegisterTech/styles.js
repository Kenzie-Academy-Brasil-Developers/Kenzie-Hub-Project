import styled from "styled-components";

const toggleModal = (props) => {
  return !props ? "none" : "flex";
};

export const Toggle = styled.div`
  display: ${(props) => toggleModal(props.toggleNewTech)};
  background-color: var(--transparent);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 24%;
  margin: 0% auto;
  padding: 0px 20px 13px 20px;
  max-width: 10ppx;
  width: 295px;
  height: 255px;
  background-color: var(--grey-3);
  border-radius: 4px;
`;

export const ContentModal = styled.div`
  width: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BoxDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 295px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 10px;
  background-color: var(--grey-2);
  border-radius: 4px 4px 0px 0px;
  height: 40px;

  h2 {
    color: var(--grey-0);
    font-size: 12px;
  }
  button {
    width: 20px;
    height: 15px;
    background-color: var(--transparent);
    color: var(--grey-1);
  }
`;

export const BoxForm = styled.div`
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
    margin-top: 25px;
  }
`;

export const BoxLabel = styled.div`
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
    :hover {
      border: 1px solid var(--grey-0);
    }
  }
`;
