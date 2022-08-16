import styled from 'styled-components';
import App from '../assets/img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Feature = () => {
  return (
    <Container>
      <Left>
        <img src={App} alt="" className="feature-img" />
      </Left>
      <Right>
        <span className="title">
          <b>good</b> design <br />
          <b>good</b> business
        </span>
        <span className="subtitle">
          We know that good design means good business.
        </span>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque
          tempora harum nostrum sit dolorum tempore ullam consequuntur
          reiciendis eveniet.
        </p>
        <button className="right-btn">Learn More</button>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    display: none;
  }

  .feature-img {
    width: 90%;
    margin-left: -100px;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }

  .title {
    font-size: 70px;

    @media only screen and (max-width: 480px) {
      font-size: 50px;
    }
  }
  .subtitle {
    font-size: 25px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
  }
  .desc {
    font-size: 20px;
    color: #777;
    margin-top: 30px;
  }
  .right-btn {
    width: 150px;
    border: none;
    padding: 15px 20px;
    margin-top: 20px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
  }
`;

export default Feature;
