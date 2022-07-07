import { useState } from "react";
import Modal from "../components/Modal/Modal";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
import {
  Wrapper,
  InnerWrapper,
  PrimaryTitle,
  OuterBox,
  Box,
  SecondaryTitle,
  SubsecondaryTitle,
  Button,
  AddButton,
} from "../components/shared/components/Dashboard";

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
