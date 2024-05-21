import styled from "styled-components/native";

export const Container = styled.View `
    background-color: #212121;

    padding: 30px;

    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const CardContainer = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: #d9d9d9;
`;

export const CardTitle = styled.Text`

    font-size: 24px;
    font-weight: 600;
    color: white;
`;

export const CardSubTitle = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

