import { Text, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useState, useEffect } from "react";
import Lamp from "./lamp";
import Logo from "./logo";
import OptionsList from "./optionsList";
import { getLoggedInUser } from "../../services/loggedInServices";

function HomePage(): JSX.Element {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getLoggedInUser().then((response) => {
      setUser(response ? JSON.parse(response?.result) : response);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("home user", user);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreenContainer>
        <Banner>
          <Logo />
        </Banner>
        {user ? null : (
          <>
            <LampContainer>
              <Lamp />
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </LampContainer>
            <TimeContainer>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
              <MaterialIcons name="attach-money" size={84} color="black" />
            </TimeContainer>
          </>
        )}
        <OptionsList />
      </HomeScreenContainer>
    </SafeAreaView>
  );
}

export default HomePage;

const HomeScreenContainer = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: "center",
  },
}))`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  width: 100%;
  height: 100%;
  background-color: white;
`;

const Banner = styled.View`
  width: 100%;
  height: 400px;
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
