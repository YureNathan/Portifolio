import Header from '../../components/Header'
import * as S from "./styled"
import Foto from "../../assets/perfil.png"
import Carousel from 'react-elastic-carousel';
import html from "../../assets//html.svg"
import css from "../../assets//css.svg"
import react from "../../assets/react.svg"
import javascript from "../../assets/javascript.svg"
import styledcomponents from "../../assets/styledcomponents.svg"
import git from "../../assets//git.svg"

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
      <S.Boxtext>
        <h2>Habilidades</h2>
        <S.boxCarrosel>
          <Carousel enableAutoPlay autoPlaySpeed={1500}>
           <div>
           <img src={html} alt="" />
            <p>Html</p>
           </div>
           <div>
           <img src={css} alt="" />
            <p>Css</p>
           </div>
           <div>
           <img src={javascript} alt="" />
            <p>JavaScript</p>
           </div>
           <div>
           <img src={react} alt="" />
            <p>ReactJs</p>
           </div>
           <div>
           <img src={styledcomponents} alt="" />
            <p>Styled components</p>
           </div>
           <div>
           <img src={git} alt="" />
            <p>git</p>
           </div>
          </Carousel>
        </S.boxCarrosel>
        </S.Boxtext>
      </section>
    </S.Main>
   </>
  )
}
