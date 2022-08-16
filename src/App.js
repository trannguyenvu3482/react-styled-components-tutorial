import styled, { css } from 'styled-components';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';

function App() {
  const smallScreen = window.screen.width <= 480 ? true : false;

  return (
    <>
      <Container className="App">
        <Navbar />
        <Intro />

        <div className="into-shape"></div>
      </Container>
      <Container>
        <Feature />
        <div className="feature-shape"></div>
      </Container>
      <Container>
        <Service />
        {!smallScreen && <div className="service-shape"></div>}
      </Container>
      <Container>
        <Price />
        <div className="price-shape"></div>
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;

  .into-shape {
    ${Shape}
    clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
    background-color: crimson;
  }

  .feature-shape {
    ${Shape}
    clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
    background-color: pink;
  }

  .service-shape {
    ${Shape}
    clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
    background-color: #f88497;
  }

  .price-shape {
    ${Shape}
    clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
    background-color: crimson;
  }
`;

export default App;
