import { Link } from "react-router-dom";
import * as S from "./styled"
// import { useState } from "react";

export default function Header() {
  // const [menu, setMenu] = useState(false); 

  return (
    <S.Header>
      <span>&lt;YN</span>
        {/* <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>
        {menu && ( */}
              <S.BoxMenu>
                <ul>
                    <S.Lista><Link to="/">Inicio</Link></S.Lista>
                    <S.Lista><Link to="/sobre">Sobre </Link></S.Lista>
                    <S.Lista><Link to="/projetos">Projetos</Link></S.Lista>
                </ul>
              </S.BoxMenu>
        {/* )}   */}
    </S.Header>
  )
}
