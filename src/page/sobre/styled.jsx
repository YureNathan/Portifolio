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
    /* border: solid red 2px;  */
     min-height: calc(80vh - 12vh);
     div {
        width: 40%;
     }
   h2 {
    font-size: 32px;
    color: #84fab0;
    margin-bottom: 35px;
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
export const boxCarrosel = styled.div `
        width: 65vw;
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
        width: 10vw;
    }
    .rec .rec-arrow-right, .rec .rec-arrow-left{
    background-color:#5FDBA2;
}
    .rec .rec-dot {
        background-color: #fff; 
    }

`
export const Boxtext = styled.div`
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    h2 {
        color: #5FDBA2;
        text-align: center;
        font-size: 32px;
        margin-bottom: 30px;
    }
`