import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { GestureResponderEvent, Pressable, Text } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { loginUser } from "../../actions/userActions";
import PageHeader from "../../common/pageHeader";
import { StyledPressable, StyledForm } from "../../common/styled";
import UserInfo from "../../common/userInfo";
import { ROUTES } from "../../common/utils";
import Colors from "../../constants/Colors";
import { defaultPadding } from "../../constants/Layout";
import { RootStackScreenProps } from "../../types";

function Login({ navigation }: RootStackScreenProps<"Login">): JSX.Element {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);
  const [userNotFound, setUserNotFound] = useState(false);
  const dispatch = useDispatch();
  function handleLogin(event: GestureResponderEvent): void {
    event.preventDefault();
    dispatch(loginUser({ email, password }, navigation, setUserNotFound));
  }

  return (
    <StyledLogin>
      <PageHeader pageName="Login" navigation={navigation} />
      <StyledForm>
        <UserInfo
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin
        />
        <StyledPressable onPress={(event) => handleLogin(event)}>
          <Text>Login</Text>
          <MaterialIcons size={30} name="login" color="white" />
        </StyledPressable>
      </StyledForm>

      {userNotFound ? <Text>USER NOT FOUND</Text> : null}
      <Pressable to={ROUTES.SIGNUP}>
        <Text>Need to create an account? Sign up here!</Text>
      </Pressable>
    </StyledLogin>
  );
}

export default Login;
const StyledLogin = styled.View`
  padding: ${defaultPadding}px;
  display: flex;
  flex-direction: column;
  .login {
    &--signupLink {
      align-self: center;
      text-decoration: none;
      color: ${Colors.light["dark-blue"]};
      margin-top: 50px;
    }
    &--userNotFound {
      color: ${Colors.light.red};
      margin-top: 40px;
      align-self: center;
    }
  }
`;
