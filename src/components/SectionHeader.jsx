import styled from "styled-components";
import { BsArrowRightShort } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { sectionTitle } from "../assets/styles/styles";
import { Link } from "react-router-dom";

export default function SectionHeader({
  title,
  banner,
  action,
  controls,
  path,
  forwardClick,
  backwardClick,
}) {
  var hour = 12;
  var minute = 41;
  var sec = 8;

  window.onload = function () {
    setInterval(function () {
      document.getElementById(
        "timer"
      ).innerHTML = `${hour}hr : ${minute}min : ${sec}s`;

      sec--;

      if (sec === 0) {
        minute--;
        sec = 60;

        if (minute === 0) {
          hour--;
          minute = 60;

          if (hour === 0) {
            hour = 12;
          }
        }
      }
    }, 1000);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {banner && (
        <Banner>
          <FiClock />

          <BannerDesc>{banner.desc}</BannerDesc>
          <BannerInfo>
            <span id="timer">{`${hour}hr : ${minute}min : ${sec}s`}</span>
          </BannerInfo>
        </Banner>
      )}
      <ControlsSection>
        {action && (
          <Link to={path}>
            <ActionContainer>
              <ActionBtn>{action}</ActionBtn>
              <ArrowStyled />
            </ActionContainer>
          </Link>
        )}
        {controls && (
          <Controls>
            <ControlBtn left onClick={backwardClick}>
              <LeftBtn />
            </ControlBtn>
            <ControlBtn right onClick={forwardClick}>
              <RightBtn />
            </ControlBtn>
          </Controls>
        )}
      </ControlsSection>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 420px) {
    position: relative;
  }
`;

const Title = styled.h3`
  ${sectionTitle}
  margin-right: 80px;

  @media (max-width: 420px) {
    margin-right: 30px;
  }
`;

const Banner = styled.div`
  background-color: var(--primary-color);
  font-weight: 400;
  font-size: 16px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: auto;
  border-radius: 4px;

  @media (max-width: 420px) {
    position: absolute;
    top: 50px;
  }
`;

const BannerDesc = styled.p``;

const BannerInfo = styled.p``;

const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--text-color-secondary);

  &:hover {
    > * {
      color: var(--text-color-primary);
    }
  }
`;
const ActionBtn = styled.button`
  background-color: inherit;
  font-weight: 600;
  font-size: 16px;
  text-align: right;
  transition: 0.2s ease-in-out;

  @media (max-width: 420px) {
    font-size: 11px;
  }
`;

const ArrowStyled = styled(BsArrowRightShort)`
  transition: 0.2s ease-in-out;
  cursor: pointer;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ControlBtn = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding-left: ${(props) => (props.left ? "6px" : "")};
  background-color: var(--secondary-color);
  color: var(--dark-gray);
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: var(--primary-color);
  }

  @media (max-width: 420px) {
    width: 28px;
    height: 28px;
    font-size: 16px;
  }
`;

const LeftBtn = styled(MdArrowBackIos)``;

const RightBtn = styled(MdArrowForwardIos)``;
