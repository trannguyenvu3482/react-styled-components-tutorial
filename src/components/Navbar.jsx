import styled from 'styled-components';

const Navbar = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="left">
          <h1 className="logo">Agency</h1>

          <ul className="menu">
            <li className="menu-item">Home</li>
            <li className="menu-item">Features</li>
            <li className="menu-item">Services</li>
            <li className="menu-item">Pricing</li>
            <li className="menu-item">Contact</li>
          </ul>
        </div>
        <button className="btn">JOIN TODAY</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }

  .left {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    font-weight: bold;
    text-decoration: underline crimson;
    margin-right: 20px;
  }

  .menu {
    display: flex;
    list-style: none;

    @media only screen and (max-width: 480px) {
      display: none;
    }
  }
  .menu-item {
    margin-right: 30px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
  }

  .btn {
    border: 2px solid white;
    padding: 10px 15px;
    background-color: crimson;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default Navbar;
