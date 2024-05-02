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
           <img src={Mc} alt="Imagem projeto" />
           <p>Projeto Desenvolvido ReactJs</p>
           <S.Boxinfo>
           <a href="https://github.com/YureNathan/mcdonalds" target='_blank' ><button className='github'>Link no <FaGithub/></button></a>
             <DiReact/>
             <DiHtml5/>
             <DiCss3/>
             </S.Boxinfo>
           </div>
           <div>
           <img src={SafeCare} alt="" />
           <p>Projeto Desenvolvido com HTML CSS e JS</p>
            <S.Boxinfo>
             
             <a href="https://github.com/YureNathan/desafioFinalVNW/tree/main"target='_blank'><button className='github'>Link no <FaGithub/></button></a>
             <DiHtml5/>
             <DiCss3/>
             <DiJavascript1/>
             </S.Boxinfo>
           </div>
           <div>
           <img src={ritmo} alt="" />
           <p> Desenvolvido com HTML CSS e JS</p>
           <S.Boxinfo>
           
           <a href="https://github.com/YureNathan/beat-desafio3VNW" target='_blank'><button className='github'>Link no <FaGithub/></button></a>
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
