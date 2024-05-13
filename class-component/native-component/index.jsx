import React from "react"
import * as S from "./styles.js"
import * as C from "react-native";

export const CreativeComponent  = () => {
    return (
        <S.Container>
            <S.FlatList>
                <S.View>
                    <S.TitleText>Title</S.TitleText>
                    <S.Text>Description</S.Text>
                </S.View>
            </S.FlatList>
        </S.Container>
    )
}