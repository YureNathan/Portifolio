import styled from "styled-components";

export const Container = styled.section`
  background-color: #202833;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;

  h2 {
    font-size: 35px;
    color: #84fab0;
    padding: 50px 0;
    font-weight: 500;

  }

  @media (max-width: 500px) {
    /* flex-direction: column; */
  }
`;

export const boxCarrosel = styled.div`
  width: 90vw;
  height: 80vh;
  display: flex;
  justify-content: center;

  p {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 2px;
    
  }

  img {
    width: 40vw;
    height: 450px;
  }

  .github {
    width: 160px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    margin: 20px;
    height: 55px;
    text-align: center;
    border: none;
    background-size: 300% 100%;
    border-radius: 50px;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .github:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .github:focus {
    outline: none;
  }
  .github {
    background-image: linear-gradient(
      to right,
      #009245,
      #9cec74,
      #00a8c5,
      #d9e021
    );
    box-shadow:  currentColor 4px 15px 0 rgba(83, 176, 57, 0.75);
  }

  .rec .rec-arrow-right,
  .rec .rec-arrow-left {
    background-color: #5fdba2;
  }
  .rec .rec-dot {
    background-color: #fff;
  }
`;

export const Boxinfo = styled.div `
  display: flex; 
  justify-content: space-around;
  align-items: center;
  svg {
    width: 30px;
    height: 30px; 
    text-align: center;
    font-size: 1.7rem;
  }  
`