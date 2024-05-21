import styled from "styled-components/native";

 export const Container = styled.ImageBackground`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

export const HeaderContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    width: auto;
    gap: 10px;
    margin-top: 48px;
    `;

export const HeaderImg = styled.Image`
    width: 36px;
    height: 25px;
    `;

export const Title = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;
    `;

export const MainContainer = styled.View`
    margin-top: 192px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    gap: 32px;
`;

export const TextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleSpan = styled.Text`
    color: #8FB2F5;
    font-size: 20px;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    color: #BFBFD4;
    font-size: #BFBFD4;
    font-size: 14px;
`;

export const Input = styled.TextInput`
    border-radius: 8px;
    padding: 20px 17px;
    background-color: #1E1E29;
    font-size: 16px;
`;
