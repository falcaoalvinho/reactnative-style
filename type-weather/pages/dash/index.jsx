import { Container,MainContainer, HeaderContainer,Logo, Input, ImageWeather, LocalName, DateText} from './style';
import Background from '../../assets/images/Background.png';
import LogoWithBackground from '../../assets/images/LogoWithBackground.png';
import NightBackground from '../../assets/images/NightBackground.png';

export default function Dash() {
    return(
        <Container source={Background} resizeMode='cover'>
            <MainContainer>
                <HeaderContainer>
                    <Logo source={LogoWithBackground}></Logo>
                    <Input placeholder='Buscar Local' placeholderTextColor={'#7F7F98'}/>
                </HeaderContainer>
            <ImageWeather source={NightBackground}>
                <LocalName>Porto Alegre, RS</LocalName>
                <DateText>Segunda-Feira, 15 de Maio de 2024</DateText>
            </ImageWeather>
            </MainContainer>
        </Container>
    )
}