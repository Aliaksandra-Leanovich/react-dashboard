import styled from "@emotion/styled";

export const WrapperSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100vh;
  position: relative;
`;

export const ContainerSC = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
`;

export const BoxSC = styled.div`
  width: 100%;
`;

export const MainGridSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  margin-bottom: 20px;
`;

export const ChartSC = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  row-gap: 20px;
  background-color: white;
  padding: 20px;
`;
