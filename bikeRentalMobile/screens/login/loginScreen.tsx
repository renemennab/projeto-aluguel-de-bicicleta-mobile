import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { loginUser } from "../../actions/userActions";
import PageHeader from "../../common/pageHeader";
import {
  SubmitPressableText,
  StyledForm,
  SubmitPressable,
} from "../../common/styled";
import UserInfo from "../../common/userInfo";
import Colors from "../../constants/Colors";
import { defaultPadding } from "../../constants/Layout";
import pathConstants from "../../services/pathConstants";
import { RootProps } from "../../types";

function Login({ navigation }: RootProps): JSX.Element {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState(`12345678`);
  const [userNotFound, setUserNotFound] = useState(false);
  const dispatch = useDispatch();
  function handleLogin(): void {
    dispatch(loginUser({ email, password }, navigation, setUserNotFound));
  }

  return (
    <StyledLogin behavior="padding">
      <PageHeader pageName="Login" navigation={navigation} />
      <StyledForm>
        <UserInfo
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          isLogin
        />
        <SubmitPressable style={{ marginTop: 50 }} onPress={handleLogin}>
          <SubmitPressableText>Login</SubmitPressableText>
          <MaterialIcons size={30} name="login" color="white" />
        </SubmitPressable>
      </StyledForm>

      {userNotFound ? (
        <StyledUserNotFound>USER NOT FOUND</StyledUserNotFound>
      ) : null}
      <StyledSignupLink
        style={{ color: Colors.light["dark-blue"], fontSize: 15 }}
        onPress={() => navigation.navigate(pathConstants.SIGNUP)}
      >
        Need to create an account? Sign up here!
      </StyledSignupLink>
    </StyledLogin>
  );
}

export default Login;
const StyledSignupLink = styled.Text`
  align-self: center;
  text-decoration: none;
  color: ${Colors.light["dark-blue"]};
  margin-top: 10px;
`;
const StyledUserNotFound = styled.Text`
  color: ${Colors.light.red};
  margin-top: 40px;
  align-self: center;
`;
const StyledLogin = styled.KeyboardAvoidingView`
  padding: ${defaultPadding}px;
  display: flex;
  flex-direction: column;
`;
