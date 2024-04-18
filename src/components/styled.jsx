import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Inter", sans-serif;
}
`;
export const Header = styled.header`
    background-color: #23272D;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 12vh;
  span {
    color: #fff;
    font-weight: bold;
    font-size: 25px;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 2px solid #fff;
    text-align:center;
    line-height: 60px;
    font-family: "Raleway", sans-serif;
    transition: 0.2s;
  }
  span:hover {
    color: #5FDBA2;
    border: solid 2px #5FDBA2;
    cursor: pointer;
  }
  ul {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  @media (max-width: 800px) {
    span{
        font-size: 20px;
        width: 15vw;
        height: 9vh;   
    }
    /* width: 100%; */
}
`;

export const BoxMenu = styled.nav`
  color: #fff;
  font-size: 18px;
  display: flex;
  /* width: 36vw; */
ul{
    /* border: solid 2px red; */
    width: 100%;
}
`;
export const Lista = styled.li`
    padding: 0px 20px;
a{
    color: white;
}
a:hover{
    color: #5FDBA2;
}
@media (max-width: 800px) {
    font-size: 14px;
    width: 13vw;
    /* border: 1px red solid; */
}
`