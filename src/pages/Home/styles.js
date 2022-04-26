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
`;

export const BoxNav = styled.nav`
  display: flex;
  max-width: 295px;
`;

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 85px;
  border-bottom: 2px solid var(--grey-3);
`;
export const BoxUser = styled.div`
  display: flex;
  max-width: 295px;
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
    width: 20px;
  }
  h2 {
    color: var(--grey-0);
    font-size: 15px;
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
`;
