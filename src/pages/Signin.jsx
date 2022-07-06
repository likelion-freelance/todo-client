import { Link } from "react-router-dom";
import styled from "styled-components";
import bg from "../images/bg.avif";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${bg});
  background-size: cover;
  box-shadow: inset 0 0 0 200rem rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerWrapper = styled.div`
  text-align: center;
  min-width: 50rem;
  padding: 5rem;
`;
const Title = styled.h2`
  margin-bottom: 10px;
`;
const Subtitle = styled.p`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 3rem;
`;
const Input = styled.input`
  padding: 1.6rem 2.4rem;
  border-radius: 5px;
`;
const Button = styled.button.attrs({ type: "submit" })`
  background-color: #73a9ad;
  padding-block: 1.6rem;
  border-radius: 5px;
  transition: 0.2s all;

  &:hover {
    background-color: rgba(115, 169, 173, 0.8);
  }
`;

const P = styled.p``;

const SignupLink = styled(Link)`
  background-color: #73a9ad;
  padding: 1rem 2rem;
  border-radius: 4px;
  margin-left: 1rem;
  transition: 0.2s all;

  &:hover {
    background-color: rgba(115, 169, 173, 0.8);
  }
`;

const Signin = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>LearnIt</Title>
        <Subtitle>Keep track of what you're learning</Subtitle>

        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
        </Form>

        <P>
          Don't have an account?
          <SignupLink to="/signup">Register</SignupLink>
        </P>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Signin;
