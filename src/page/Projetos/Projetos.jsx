import Header from '../../components/Header'
import * as S from "./styled"
import Carousel from 'react-elastic-carousel';

import Mc from "../../assets/MC.png"
import SafeCare from "../../assets/safecare.png"
import ritmo from "../../assets/Ritmo.png"

export default function Projetos() {
  return (
    <>
    <Header/>
    <S.Container>
      <h2>Projetos</h2>
      <S.boxCarrosel>
      <Carousel enableAutoPlay autoPlaySpeed={2000}>
           <div>
           <img src={Mc} alt="" />
            <p>Html</p>
            <button>github</button>
           </div>
           <div>
           <img src={SafeCare} alt="" />
            <p>Html</p>
            <button>github</button>
           </div>
           <div>
           <img src={ritmo} alt="" />
            <p>Html</p>
            <button>github</button>
           </div>
      </Carousel>
      </S.boxCarrosel>
      </S.Container>
    </>
      
    
  )
}
