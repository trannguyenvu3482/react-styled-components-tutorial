import styled from 'styled-components';
import Map from '../assets/img/map.png';
import Phone from '../assets/img/phone.png';
import Send from '../assets/img/send.png';

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> Let's Get In Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your name" />
              <Input placeholder="Your email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your message..." />
              <Button>SEND</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressItem>
            <Icon src={Map} />
            <Text>123 Park Avenue St., New York, USA</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Phone} />
            <Text>+ 1 234 567 890</Text>
            <Text>+ 1 234 567 890</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@duztran.com</Text>
            <Text>sales@duztran.com</Text>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 90%;
  background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png');
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  margin: 50px;
  margin-top: 0;

  @media only screen and (max-width: 480px) {
    margin: 20px;
  }
`;

const Form = styled.form`
  height: 250px;
  display: flex;
  /* justify-content: center; */
  margin-left: 50px;

  @media only screen and (max-width: 480px) {
    margin-left: 0;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    padding: 8px;
  }
`;

const TextArea = styled.textarea`
  width: 200px;
  height: 155px;
  padding: 20px;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  border: none;
  background-color: darkblue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  border-radius: 10px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    padding: 5px;
    font-size: 14px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 30px;
  }
`;

const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 480px) {
    width: 15px;
  }
`;

const Text = styled.span`
  font-size: 20px;
  margin-right: 50px;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export default Contact;
