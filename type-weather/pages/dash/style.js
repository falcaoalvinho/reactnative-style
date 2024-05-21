import styled from "styled-components/native";

 export const Container = styled.ImageBackground`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    `;

export const MainContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 359px;
    height: 396px;
    background-color: #16161F;
    border-radius: 12px;
    gap: 12px;
`;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    width: auto;
    gap: 9px;
    margin-top: 20px;
    `;

export const Logo = styled.Image`
    width: 56px;
    height: 56px;
`

export const Input = styled.TextInput`
    width: 271px;
    height: 56px;
    border-radius: 8px;
    padding: 20px 17px;
    background-color: #1E1E29;
    font-size: 16px;
`;

export const ImageWeather = styled.ImageBackground`
    display: flex;
    width: 335px;
    height: 304px;
    padding: 20px;
`;

export const LocalName = styled.Text`
    color: #FAFAFA;
    font-weight: bold;
    font-size: 16px;
`;

export const DateText = styled.Text`
    font-size: 12px;
    color: #FAFAFA;
`;