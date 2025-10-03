import styled from "styled-components";

export const Container = styled.div`
  background-color: #f2ece4;
  min-height: calc(100vh - 60px);
  padding: 20px;

  .list-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 20px;
    width: 100%;
    margin-bottom: 30px;
  }

  .loading {
    display: flex;
    justify-content: center;
    min-height: 400px;
    align-items: center;
  }

  .infoDiv {
    padding: 20px;
    margin: 24px auto;
    max-width: 720px;
    border-radius: 10px;
    background-color: rgba(99, 99, 253, 0.06);
    border: 1px solid rgba(99, 99, 253, 0.12);
    color: #111217;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
    text-align: center;
  }
  .infoDiv .infoText {
    flex: 1 1 auto;
    display: block;
  }

  .infoDiv .infoText h3 {
    margin: 0 0 6px 0;
    font-size: 1.05rem;
    color: #121225;
  }

  .infoDiv .infoText p {
    margin: 0;
    color: #4b4b63;
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    .list-container {
      grid-template-columns: 1fr;
    }
  }
`;
