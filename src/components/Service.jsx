import styled from 'styled-components';
import How from '../assets/img/how.png';
import MiniCard from './MiniCard';
import Icon from '../assets/img/play.png';
import SmartphoneVideo from '../assets/videos/Smartphone.mp4';
import { useState } from 'react';

const Service = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <Container>
      <Left>
        <LeftImg open={open} src={How} alt="" className="left-img" />
        <Video open={open} autoPlay loop controls src={SmartphoneVideo} />
      </Left>
      <Right>
        <Wrapper>
          <h1 className="title">Simple process to start</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            nobis itaque eligendi ipsum modi aliquid, rem, tempora numquam et
            repellendus excepturi asperiores in provident dolorum aspernatur
            voluptate, accusamus pariatur nulla!
          </p>
          <CardContainer>
            <MiniCard />
            <MiniCard />
            <MiniCard />
          </CardContainer>
          <button className="btn" onClick={(e) => setOpen(true)}>
            <img className="icon-img" src={Icon} alt="" />
            How it works
          </button>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video open={open} autoPlay loop controls src={SmartphoneVideo} />
          <CloseButton onClick={(e) => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const LeftImg = styled.img`
  display: ${(props) => props.open && 'none'};
  height: 130%;
  transform: translate(50px, -70px);
`;

const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Video = styled.video`
  display: ${(props) => !props.open && 'none'};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    margin-top: 50px;
    padding: 20px;
  }

  .title {
  }
  .desc {
    font-size: 20px;
    margin-top: 20px;
    color: #555;
  }
  .btn {
    display: flex;
    align-items: center;
    width: 180px;
    border: none;
    border-radius: 10px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    padding: 15px;
    margin-top: 50px;
    cursor: pointer;
  }
  .icon-img {
    width: 20px;
    margin-right: 10px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30px;
`;

export default Service;
