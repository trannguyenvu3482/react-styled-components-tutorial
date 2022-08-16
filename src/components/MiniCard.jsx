import React from 'react';
import styled from 'styled-components';
import Search from '../assets/img/search.png';

const MiniCard = () => {
  return (
    <Container>
      <img src={Search} alt="" className="card-img" />
      <span className="card-text">
        Lorem, ipsum dolor sit amet consectetur.
      </span>
    </Container>
  );
};

const Container = styled.div`
  width: 175px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0 0 17px -11px rgba(0, 0, 0, 0.58);

  @media only screen and (max-width: 480px) {
    width: 100px;
  }

  .card-img {
    width: 20px;
  }

  .card-text {
    margin-top: 10px;
    text-align: center;

    @media only screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export default MiniCard;
