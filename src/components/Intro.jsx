import styled from 'styled-components';
import Woman from '../assets/img/woman.png';
import AnimatedShapes from './AnimatedShapes';

const Intro = () => {
  return (
    <Container>
      <div className="left">
        <h1 className="title">Adventures in creative age</h1>
        <p className="desc">
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </p>
        <div className="info">
          <button className="btn-start">START A PROJECT</button>
          <div className="contact">
            <span className="phone-no">Call Us (012) 345 - 6789</span>
            <span className="contact-text">For any question or concern</span>
          </div>
        </div>
      </div>
      <div className="right">
        <img class="right-img" src={Woman} alt="" />
        <AnimatedShapes />
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }

  .left {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    width: 40%;

    @media only screen and (max-width: 480px) {
      display: none;
    }
  }

  .title {
    width: 60%;
    font-size: 60px;

    @media only screen and (max-width: 480px) {
      width: 100%;
      font-size: 50px;
    }
  }
  .desc {
    width: 60%;
    font-size: 20px;
    margin-top: 10px;

    @media only screen and (max-width: 480px) {
      width: 100%;
    }
  }

  .info {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 50px;

    @media only screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
  .btn-start {
    padding: 15px;
    background-color: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    border: none;
    letter-spacing: 2px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
      margin-bottom: 20px;
    }
  }
  .contact {
    display: flex;
    flex-direction: column;
  }
  .phone-no {
    color: #f0667d;
    font-weight: bold;
  }
  .contact-text {
    color: gray;
    margin-top: 5px;
  }
  .right-img {
    width: 100%;
  }
`;

export default Intro;
