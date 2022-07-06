import { default as OriginModal } from "react-modal";
import styled from "styled-components";
import styles from "./Modal.module.css";

const Title = styled.h3`
  font-size: 2.7rem;
  margin-bottom: 2rem;
`;
const Form = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;
const Input = styled.input`
  border: 1px solid #ccc;
  padding: 1.5rem;
  border-radius: 1rem;
`;
const TextArea = styled.textarea``;

const Button = styled.button`
  padding: 1.5rem 4rem;
  border-radius: 1rem;
`;

const ButtonBox = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
  margin-top: 2rem;
`;

const CancelButton = styled(Button)`
  background-color: #ff8b8b;
`;
const AddButton = styled(Button)`
  background-color: #90c8ac;
`;

const Modal = ({ modalIsOpen, setIsOpen }) => {
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <OriginModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Post Modal"
      className={styles.Modal}
      overlayClassName={styles.Overlay}
      ariaHideApp={false}
    >
      <Title>What do you want to learn?</Title>
      <Form>
        <Input type="text" placeholder="Name" />
        <TextArea placeholder="Description..."></TextArea>
        <Input type="text" placeholder="Youtube Tutorial" />
        <ButtonBox>
          <CancelButton onClick={closeModal}>Cancel</CancelButton>
          <AddButton>Add</AddButton>
        </ButtonBox>
      </Form>
    </OriginModal>
  );
};

export default Modal;
