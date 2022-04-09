import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import { RootProps } from "../types";

interface IProps {
  pageName: string;
  navigation: RootProps["navigation"];
}

function PageHeader({ pageName, navigation }: IProps): JSX.Element {
  return (
    <StyledPageHeader>
      <StyledBackArrow onPress={() => navigation.goBack()}>
        <AntDesign
          size={40}
          style={{ marginBottom: -3 }}
          name="arrowleft"
          color={Colors.light.red}
        />
      </StyledBackArrow>
      <StyledPageTitle>{pageName}</StyledPageTitle>
    </StyledPageHeader>
  );
}

export default PageHeader;
const StyledBackArrow = styled.Pressable`
  color: ${Colors.light.red};
`;

const StyledPageHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledPageTitle = styled.Text`
  font-size: 25px;
  margin-left: 15px;
`;
