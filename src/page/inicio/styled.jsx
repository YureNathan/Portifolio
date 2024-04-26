import styled from "styled-components";

export const Main = styled.main`

@media (max-width: 500px){
    /* flex-direction: column; */
}
`
export const Container = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
     min-height: calc(100vh - 12vh);
    background-color: #202833;
    color: #fff;
  h1 {
    font-size: 32px;
  }
.name {
  color: #5FDBA2;
}

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }
  button {
    font-size: 20px;
    text-transform: capitalize;
    padding: 10px 20px;
    background-color: #202833;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 50px;
    transition: background-color 0.2s ease;
    width: 11vw;
    height: 7vh;
    letter-spacing: 1px; 
  }
  button:hover {
    background-color: #5FDBA2;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }

  .redes-sociais {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }
  .redes-sociais svg{
    border: solid 1px white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding:10px;
    text-align: center;
    font-size: 1.7rem;
    transition: 0.3s;
    color: #fff;
  }
  .redes-sociais svg:hover {
    color: #5FDBA2;
    border: 1px solid;
    transform: scale(1.1);
  }
    div {
    width: 40%;
  }
  .container-text {
    display: flex;
    flex-direction: column;
    gap: 15px;
    letter-spacing: 2px;
    padding: 0 15px;
    height: 40vh;
  }
  .code {
    width: 35vw;
    height: 60vh;
  }
`