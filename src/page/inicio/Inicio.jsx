import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import Header from '../../components/Header'
import * as S from "./styled"
import Code from "../../assets/coding.svg"
import curriculo from "../../assets/curriculo.pdf"
export default function Inicio() {
  return (
    <S.Main>
      <Header />
      <S.Container>
        <div className="container-text">
          <h1>Olá! sou  <span className="name">Yure Nathan</span></h1>
          <p>Desenvolvedor Front-End em formação, em busca de novos desafios compartilhando meu conhecimento e projetos!</p>
          <a href={curriculo} target="_blank"><button >Baixar CV/&gt;</button></a>
          <ul className='redes-sociais'>
            <li>
              <a href="https://www.linkedin.com/in/yurenathan/" title='Ir para o linkedIn' target='_blank'><FaLinkedin /></a>
            </li>
            <li>
              <a href="https://github.com/YureNathan" title='Ir para o Github' target='_blank'><FaGithub /></a>
            </li>
            <li>
              <a href="mailto:yurenathan303@gmail.com" title='Ir para o E-mail' target='_blank'><FaEnvelope /></a>
            </li>
          </ul>
        </div>
        <div>
          <img className='code' src={Code} alt="Ilustração programando em um notebook" />
        </div>
      </S.Container>
    </S.Main>
  )
}
