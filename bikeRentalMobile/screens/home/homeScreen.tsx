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
