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
     img {
        max-width: 450px;
        border-radius: 50%;
     }
`
