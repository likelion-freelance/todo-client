import styled from "styled-components";
import { AiOutlineYoutube } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { truncateString } from "../utils/helper";
import { Link } from "react-router-dom";
import { useState } from "react";
import UpdateModal from "./Modal/UpdateModal";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 20rem);
  grid-auto-flow: column;
  gap: 3rem;
  height: 100%;
`;

const Box = styled.div`
  border: 2px solid #90c8ac;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
`;

const TextBox = styled.div`
  max-width: 25rem;
`;
const ActionBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-self: flex-start;
`;

const Title = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;
const Status = styled.span`
  background-color: #73a9ad;
  padding: 0.5rem 1rem;
  border-radius: 1.2rem;
  color: #fff;
  margin-bottom: 1.4rem;
`;

const UpdateButton = styled.button``;
const DeleteButton = styled.button``;

const Posts = ({ posts }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openUpdateModal() {
    setIsOpen(true);
  }
  return (
    <Wrapper>
      {posts.map((post) => {
        return (
          <Box key={post.id}>
            <TextBox>
              <Title>{post.name}</Title>
              <Status>{post.status}</Status>
              <p>{truncateString(post.description, 50)}</p>
            </TextBox>
            <ActionBox>
              <Link to="#">
                <AiOutlineYoutube color="#90C8AC" />
              </Link>
              <UpdateButton onClick={openUpdateModal}>
                <HiOutlinePencilAlt color="#90C8AC" />
              </UpdateButton>
              <DeleteButton>
                <AiOutlineDelete color="EB4747" />
              </DeleteButton>
            </ActionBox>
            <UpdateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} />
          </Box>
        );
      })}
    </Wrapper>
  );
};

export default Posts;
