import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";

const Wrapper = styled.div`
  padding: 3rem;
  height: calc(100vh - 8rem);
  color: #333;

  & p {
    color: #555;
  }
`;

const InnerWrapper = styled.div`
  height: 100%;
`;

const PrimaryTitle = styled.h2`
  padding-block: 1rem;
  background-color: rgba(115, 169, 173, 0.3);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const OuterBox = styled.div`
  text-align: center;
`;

const Box = styled.div`
  padding: 3rem;
  border: 1px solid rgba(115, 169, 173, 0.3);
  border-top: none;
`;
const SecondaryTitle = styled.h3`
  font-size: 2.4rem;
  margin-bottom: 1rem;
`;
const SubsecondaryTitle = styled.p`
  margin-bottom: 2rem;
`;
const Button = styled.button.attrs({ type: "button" })`
  color: #fff;
  padding: 1.5rem 4rem;
  background-color: rgb(115, 169, 173);
  border-radius: 5px;
  transition: 0.3s all;

  &:hover {
    background-color: rgba(115, 169, 173, 0.8);
  }
`;

const AddButton = styled.button`
  font-size: 4rem;
  position: absolute;
  bottom: 4rem;
  right: 4rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #ccc;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.5rem;
`;

let posts = [
  {
    id: 0,
    name: "React",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At reprehenderit neque ab tempore repudiandae illum voluptatem. Asperiores, repellat vitae quos deleniti recusandae exercitationem neque nostrum in ad earum delectus molestias?",
    status: "TO_LEARN",
  },
  {
    id: 1,
    name: "Nodejs",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At reprehenderit neque ab tempore repudiandae illum voluptatem. Asperiores, repellat vitae quos deleniti recusandae exercitationem neque nostrum in ad earum delectus molestias?",
    status: "LEARNING",
  },
];

const Dashboard = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <Navbar />
      <main>
        <Wrapper>
          <InnerWrapper>
            {posts.length === 0 ? (
              <OuterBox>
                <PrimaryTitle>Hi Huy Nguyen</PrimaryTitle>
                <Box>
                  <SecondaryTitle>Welcome to LearnIt</SecondaryTitle>
                  <SubsecondaryTitle>
                    "Click the button below to track your first skill to learn
                  </SubsecondaryTitle>
                  <Button onClick={openModal}>Learn It!</Button>
                </Box>
              </OuterBox>
            ) : (
              <AddButton onClick={openModal}>+</AddButton>
            )}
            <Posts posts={posts} />
            <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
          </InnerWrapper>
        </Wrapper>
      </main>
    </div>
  );
};

export default Dashboard;
