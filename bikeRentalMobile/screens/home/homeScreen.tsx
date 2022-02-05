import { Text } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import Lamp from "./lamp";
import Logo from "./logo";
// import { getLoggedInUser } from "../common/utils";
// import OptionsList from "./optionsList";

function HomePage(): JSX.Element {
  //   const isUserLoggedIn = getLoggedInUser();

  return (
    <HomeScreenContainer>
      <Banner>
        <Logo />
      </Banner>
      <LampContainer>
        <Lamp />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </LampContainer>
      <TimeContainer>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <MaterialIcons name="attach-money" size={84} color="black" />
      </TimeContainer>
    </HomeScreenContainer>
  );
}

export default HomePage;
const HomeScreenContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Banner = styled.View`
  width: 100%;
  height: 50%;
  min-height: 50%;
  background-color: #f7d08a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LampContainer = styled.View`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;
const TimeContainer = styled(LampContainer)``;
const StyledHomePage = styled.View`
  .homePage {
    &--menuBtn {
      position: fixed;
      left: 20px;
      top: 20px;
      background: var(--yellow);
      border-radius: 8px;
      padding: 15px;
      color: white;
      border: none;
      font-size: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &--banner {
    }
    &--energy,
    &--timeMoney {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      &__text {
        color: var(--dark-gray);
        width: 250px;
      }
    }
    &--timeMoney {
      &__text {
        width: 200px;
      }
    }
  }
`;
