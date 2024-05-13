import { Platform } from 'react-native';
import styled from 'styled-components';

export const PageContainer = styled.View`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Platform.OS === "ios" ? "#212121" : "#d9d9d9"};
`;

export const PageTitle = styled.Text`
        margin-top: 50;
        color: #39FF70;
        font-family:"Roboto";
        font-weight: 700;
        font-size: 50px
`;

export const PageSubTitle = styled.Text`
    color: #d9d9d9;
    font-family:"Roboto";
    font-weight: 700;
    font-size: 40px
`;


