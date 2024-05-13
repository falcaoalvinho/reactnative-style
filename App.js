import * as S from "./class-style/styled-external";
import {CreativeComponent} from "./class-component/native-component"

export default function App() {
    return (
      <><S.PageContainer>
        <S.PageTitle>INDMO</S.PageTitle>
        <S.PageSubTitle>Hello World</S.PageSubTitle>
      </S.PageContainer>
      
      <CreativeComponent></CreativeComponent></>
    );
  }

