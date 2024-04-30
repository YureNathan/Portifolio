import Header from '../../components/Header'
import * as S from "./styled"
import Carousel from 'react-elastic-carousel';
import {FaGithub } from "react-icons/fa6";
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
      <Carousel>
           <div>
           <img src={Mc} alt="" />
            <p>Projeto feito com reacJS</p>
            <button className='github'>Link no <FaGithub/></button>
           </div>
           <div>
           <img src={SafeCare} alt="" />
            <p>Projeto Desenvolvido com HTML CSS e JS</p>
             <button className='github'>Link no <FaGithub/></button>
           </div>
           <div>
           <img src={ritmo} alt="" />
            <p> Desenvolvido com HTML CSS e JS</p>
             <button className='github'>Link no <FaGithub/></button>
           </div>
      </Carousel>
      </S.boxCarrosel>
      </S.Container>
    </>
      
    
  )
}
