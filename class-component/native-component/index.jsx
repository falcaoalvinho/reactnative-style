import * as S from "./styles.js"

function CreativeCard(proprieties) {
    <S.CardContainer>
        <S.CardTitle>{proprieties.title}</S.CardTitle>
        <S.CardSubTitle>{proprieties.description}</S.CardSubTitle>
    </S.CardContainer>
}

export default function CreativeComponent() {
    return (
        <S.Container>
            <CreativeCard title="Titulo 1" description="Descrição 1"/>
            <CreativeCard title="Titulo 2" description="Descrição 2"/>
            <CreativeCard title="Titulo 3" description="Descrição 3"/>
            <CreativeCard title="Titulo 4" description="Descrição 4"/>
            <CreativeCard title="Titulo 5" description="Descrição 5"/>
        </S.Container>
    )
}