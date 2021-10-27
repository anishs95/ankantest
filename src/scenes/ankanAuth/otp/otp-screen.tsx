import React from "react";
import ContentView from "../../../layouts/ankanAuth/otp/sign-up-1";

export const OTPScreen = ({ navigation, state }): React.ReactElement => {
  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  return <ContentView navigation={navigation} />;
};
