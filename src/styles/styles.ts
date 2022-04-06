import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
`;

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(#121212, #212b46);

  .title {
    font-size: 80px;
    color: #ffff;
    animation: flipTitle 2s;
  }

  @keyframes flipTitle {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  .containerInput {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 15px;
    margin: 34px 0;

    display: flex;

    border-radius: 8px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);

    input {
      background-color: transparent;
      border: 0;
      font-size: 20px;
      color: #fff;
      outline: none;
      margin-right: 8px;

      &::placeholder {
        color: #f1f1f1;
      }
    }

    .buttonSearch {
      background-color: transparent;
      border: 0;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      transition: transform 0.5s;

      &:hover {
        transform: scale(1.2);
      }
    }
  }

  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    background-color: #fff;
    width: 500px;
    border-radius: 8px;

    h2 {
      margin: 16px 0;
      font-size: 39px;
    }

    span {
      margin-bottom: 16px;
      font-weight: bold;
    }


  }
  
  @media (max-width: 620px) {
      .title {
        font-size: 60px;
      }

      .main {
        width: 80%;
        min-height: 250px;

        h2 {
          font-size: 28px;
        }
      }
    }
`;
