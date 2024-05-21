import {Container, HeaderContainer, HeaderImg, Title, MainContainer, TextContainer, TitleSpan, SubTitle, Input} from './style.js';
import Background from '../../assets/images/Background.png';
import Icon from '../../assets/images/LogoNativeWeather.png'

export default function Search() {
    return(
        <Container source={Background} resizeMode='cover'>
            <HeaderContainer>
                <HeaderImg source={Icon}/>
                <Title>NativeWeather</Title>
            </HeaderContainer>

            <MainContainer>
                <TextContainer>
                    <Title>Boas vindas ao <TitleSpan>NativeWeather</TitleSpan></Title>
                    <SubTitle>Escolha um local para ver a previsão do tempo</SubTitle>
                </TextContainer>

            <Input placeholder='Buscar Local' placeholderTextColor={'#7F7F98'}></Input>
            </MainContainer>
        </Container>
    )
}