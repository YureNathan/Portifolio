import styled from "styled-components";

export const Container = styled.section`
   background-color: #202833;
   border: solid 2px red;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    /* border: solid red 2px;  */
     height: 80vh;
     /* padding: 70px 0 70px; */
    
   h2 {
    font-size: 35px;
    color: #84fab0;
    padding: 60px 0;
    font-weight: 500;
    /* margin-bottom: 35px; */
   }

@media (max-width: 500px){
    /* flex-direction: column; */
}
`

export const boxCarrosel = styled.div `
     
        width: 70vw;
        display: flex;
        justify-content: center;
    p {
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
        margin-top: 2px;
    }

    img{
        width: 35vw;
        max-height: 440px;
        border: 2px red solid;
    }
`