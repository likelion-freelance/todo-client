import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #73a9ad;
`;
const Container = styled.nav`
  max-width: 120rem;
  padding-inline: 1.5rem;
  margin: auto;
`;

const InnerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 1.5rem;
  height: 8rem;
`;
const LeftNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;
const RightNav = styled(LeftNav)``;

const NavItem = styled(Link)`
  transition: 0.2s all;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SignoutButton = styled.button.attrs({ type: "button" })`
  background-color: #ff4949;
  padding: 1rem 2rem;
  border-radius: 8px;

  transition: 0.3s all;

  &:hover {
    background-color: rgba(255, 73, 73, 0.8);
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <InnerNav>
          <LeftNav>
            <NavItem to="/">Dashboard</NavItem>
            <NavItem to="/about">About</NavItem>
          </LeftNav>

          <RightNav>
            <p>Welcome to Huy Nguyen</p>
            <SignoutButton>Sign out</SignoutButton>
          </RightNav>
        </InnerNav>
      </Container>
    </Nav>
  );
};

export default Navbar;
