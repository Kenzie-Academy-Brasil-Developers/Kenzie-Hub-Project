import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ContainerNav = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 45px;
  border-bottom: 2px solid var(--grey-3);
  @media (min-width: 1440px) {
    height: 75px;
  }
`;

export const BoxNav = styled.nav`
  display: flex;
  align-items: center;
  width: 295px;
  justify-content: space-between;
  button {
    width: 60px;
    height: 25px;
  }
  h1 {
    color: var(--primary);
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    width: 700px;
    h1 {
      font-size: 27px;
    }
    button {
      width: 65px;
      height: 30px;
    }
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 85px;
  border-bottom: 2px solid var(--grey-3);
  @media (min-width: 1440px) {
    height: 95px;
  }
`;
export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 295px;
  margin: 7px 0px 0px 0px;
  h2 {
    color: var(--grey-0);
    font-size: 20px;
  }
  p {
    color: var(--grey-1);
    font-size: 15px;
    margin-top: 13px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 700px;
    h2 {
      font-size: 25px;
    }
    p {
      font-size: 18px;
      margin-bottom: 6px;
    }
  }
`;

export const ContainerTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;
export const BoxTechDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 295px;
  padding-top: 15px;
  button {
    width: 25px;
    height: 25px;
    font-size: 13px;
  }
  h2 {
    color: var(--grey-0);
    font-size: 15px;
  }
  @media (min-width: 1440px) {
    width: 700px;
    h2 {
      font-size: 19px;
    }
    button {
      width: 35px;
      height: 30px;
      font-size: 25px;
    }
  }
`;
export const BoxTech = styled.div`
  display: flex;
  flex-direction: column;
  width: 295px;
  height: 330px;
  overflow: auto;
  background-color: var(--grey-3);
  border-radius: 5px;
  margin-top: 15px;

  @media (min-width: 1440px) {
    width: 700px;
    margin-top: 20px;
  }
`;
