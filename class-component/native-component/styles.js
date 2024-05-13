import styled from "styled-components/native";
import { ImageBackground } from "react-native";

export const Container = styled.ImageBackground`
    background-color: #212121;
    
    width: 100%;
    padding: 30px;

    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const View = styled.View`
`

export const TitleText = styled.Text`
    font-family: sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: white;

`
export const Text = styled.Text`
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #d9d9d9;
`

export const FlatList = styled(FlatList)`
    gap: 20px;
`

