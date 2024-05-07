import styled from 'styled-components';

export const PageContainer = styled.View`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aqua;
`;

export const PageTitle = styled.Text`
  margin-top: 50;
  color: #39FF70;
  font-family:"Roboto";
  font-weight: 700;
  font-size: 50
`;

export const PageSubTitle = styled.Text`
  color: #d9d9d9;
  font-family:"Roboto";
  font-weight: 700;
  font-size: 40
`;



export default function App() {
    return (
      <PageContainer>
        <PageTitle>INDMO</PageTitle>
        <PageSubTitle>Aula de 06/05/2024</PageSubTitle>
      </PageContainer>
    );
  }

