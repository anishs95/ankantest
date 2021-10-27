import React from "react";
import ContentView from "../../../layouts/ankanAuth/welcome/sign-in-4";

export const WelcomeScreen = ({ navigation, state }): React.ReactElement => {
  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  return <ContentView navigation={navigation} />;
};
