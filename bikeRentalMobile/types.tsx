/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import pathConstants from "./services/pathConstants";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  [pathConstants.BIKES]: { id: string; edit: boolean } | undefined;
  [pathConstants.RESERVATIONS]: { id: string } | undefined;
  [pathConstants.USER]: undefined;
  [pathConstants.USERS]: { id: string; edit: boolean } | undefined;
  [pathConstants.LOGIN]: undefined;
  [pathConstants.SIGNUP]: undefined;
  [pathConstants.BIKES_BY_DATES]: undefined;
  [pathConstants.RATING]: undefined;
  [pathConstants.PROFILE]: undefined;
  [pathConstants.NEW_BIKE]: undefined;
  [pathConstants.NEW_USER]: undefined;
};
export type RootProps = NativeStackScreenProps<RootStackParamList, "Root">;

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  HomeScreen: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
