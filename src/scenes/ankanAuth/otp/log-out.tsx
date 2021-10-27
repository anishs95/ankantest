import React from "react";
import ContentView from "../../../layouts/ankanAuth/otp/log-out";

export const LogOut = ({ navigation, state }): React.ReactElement => {
  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  return <ContentView navigation={navigation} />;
};
