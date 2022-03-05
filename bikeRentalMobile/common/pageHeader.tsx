import { AntDesign } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";

interface IProps {
  pageName: string;
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
}

function PageHeader({ pageName, navigation }: IProps): JSX.Element {
  return (
    <StyledPageHeader>
      <StyledBackArrow onPress={() => navigation.goBack()}>
        <AntDesign
          size={30}
          style={{ marginBottom: -3 }}
          name="arrowleft"
          color={Colors.light.red}
        />
      </StyledBackArrow>
      <Text>{pageName}</Text>
    </StyledPageHeader>
  );
}

export default PageHeader;
const StyledBackArrow = styled.Pressable`
  color: ${Colors.light.red};
  border: none;
  background: transparent;
  font-size: 20px;
`;

const StyledPageHeader = styled.View``;
