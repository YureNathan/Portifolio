import styled from "styled-components";

export const Main = styled.main`
    background-color: #202833; 
@media (max-width: 500px){
    /* flex-direction: column; */
}
`
export const Container = styled.section`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border: solid red 2px; */
     min-height: calc(100vh - 12vh);
     div {
        width: 40%;
     }
   
`
export const Boximg = styled.div`
    max-width: 450px;
    border-radius: 50%;
      img {
       width: 100%;
       border-radius:52%;
       background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
     }
`