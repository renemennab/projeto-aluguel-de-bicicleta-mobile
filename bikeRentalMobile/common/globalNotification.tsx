import React, { useEffect, useState } from "react";
import styled from "styled-components/native";

interface IProps {
  message: string;
  type: GlobalNotificationType;
}
function GlobalNotification({ message, type }: IProps): JSX.Element {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) setShow(true);
    const timer1 = setTimeout(() => setShow(false), 2 * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, [message, type]);

  return (
    <StyledGlobalNotification show={show} type={type}>
      {show ? message : ""}
      <StyledClosePressable show={show} onPress={() => setShow(false)}>
        X
      </StyledClosePressable>
    </StyledGlobalNotification>
  );
}

export default GlobalNotification;
interface ContainerProps {
  type: string;
  show: boolean;
}

const StyledGlobalNotification = styled.View<ContainerProps>`
  background: ${(props) => (props.type === "error" ? "#d85055" : "#78b440")};
  width: 80%;
  padding: 20px 55px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: ceter;
  text-transform: capitalize;
  position: absolute;
  z-index: 1000;
  top: 20px;
  left: 50%;
  transform: ${(props) =>
    props.show ? "translateX(-50%)" : "translate(-50%, -100vh)"};
  transition: 0.5s all ease-in-out;
  border-radius: 5px;
  min-height: 60px;

  &.hide {
    button {
      display: none;
    }
  }
`;

interface PressableProps {
  show: boolean;
}
const StyledClosePressable = styled.Pressable<PressableProps>`
  background: transparent;
  border: none;
  font-size: 20px;
  font-weight: 400;
  color: white;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: ${(props) => (props.show ? "block" : "none")};
`;
