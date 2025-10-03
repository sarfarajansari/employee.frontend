import styled from "styled-components";
import logo from "/logo.svg";
const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #e5f2f3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  padding: 0 60px;

  #action-area {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const Header = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo" style={{ height: "30px" }} />
      </div>
      <div id="action-area"></div>
    </Container>
  );
};

export default Header;
