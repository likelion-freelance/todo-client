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
} from "../components/shared/components/Signup";

const Signup = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Title>LearnIt</Title>
        <Subtitle>Keep track of what you're learning</Subtitle>

        <Form>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Reset Password" />
          <Button>Register</Button>
        </Form>

        <P>
          Have an account already?
          <SignupLink to="/signin">Login</SignupLink>
        </P>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Signup;
