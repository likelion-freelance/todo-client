import {
  Wrapper,
  InnerWrapper,
  Title,
  Subtitle,
  Form,
  Input,
  Button,
  P,
  SignupLink,
} from "../components/shared/components/Signin";

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
