import styled from "styled-components";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <Container onClick={props.onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Text>Thank you for signing up!</Text>
        <div className="modal-footer">
          <CloseBtn onClick={props.onClose}>Close</CloseBtn>
        </div>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Content = styled.div`
  width: 500px;
  height: 200px;
  background-color: var(--main-bg-color);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const Text = styled.p`
  font-size: 24px;
  text-align: center;
`;

const CloseBtn = styled.button`
  background-color: var(--text-color-primary);
  color: var(--white);
  padding: 8px 18px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }
`;
