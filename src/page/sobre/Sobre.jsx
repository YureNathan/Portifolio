import Header from '../../components/Header'
import * as S from "./styled"
import Foto from "../../assets/perfil.png"
export default function Sobre() {
  return (
   <>
   <S.Main>
   <Header/>
      <S.Container>
        <S.Boximg>
        <img src={Foto} alt="foto perfil" /> 
        </S.Boximg>
        <div>
        <h2>Sobre mim</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In adipisci omnis similique consequatur? Enim ratione vel dignissimos esse odit suscipit repellendus, repudiandae doloribus perspiciatis consequatur unde commodi maxime culpa inventore!</p>
        
        </div>
      </S.Container>
      <section>
      <div>
        <h2>Habilidades</h2>
        </div>
      </section>
    </S.Main>
   </>
  )
}
