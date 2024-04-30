import Header from '../../components/Header'
import * as S from "./styled"
import Carousel from 'react-elastic-carousel';
import {FaGithub } from "react-icons/fa6";
import Mc from "../../assets/MC.png"
import SafeCare from "../../assets/safecare.png"
import ritmo from "../../assets/Ritmo.png"
import { DiReact,DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
export default function Projetos() {
  return (
    <>
    <Header/>
    <S.Container>
      <h2>Projetos</h2>
      <S.boxCarrosel>
      <Carousel>
           <div className='card'>
           <img src={Mc} alt="" />
           <p>Projeto Desenvolvido ReactJs</p>
           <S.Boxinfo>
             <button className='github'>Link no <FaGithub/></button>
             <DiReact/>
             <DiHtml5/>
             <DiCss3/>
             </S.Boxinfo>
           </div>
           <div>
           <img src={SafeCare} alt="" />
           <p>Projeto Desenvolvido com HTML CSS e JS</p>
            <S.Boxinfo>
             
             <button className='github'>Link no <FaGithub/></button>
             <DiHtml5/>
             <DiCss3/>
             <DiJavascript1/>
             </S.Boxinfo>
           </div>
           <div>
           <img src={ritmo} alt="" />
           <p> Desenvolvido com HTML CSS e JS</p>
           <S.Boxinfo>
           
             <button className='github'>Link no <FaGithub/></button>
             <DiHtml5/>
             <DiCss3/>
             <DiJavascript1/>
           </S.Boxinfo>
           </div>
      </Carousel>
      </S.boxCarrosel>
      </S.Container>
    </>
      
    
  )
}
