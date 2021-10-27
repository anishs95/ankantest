import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { HomeNavigator } from "./home.navigator";
import { WelcomeNavigator } from "./app.ankan.auth";

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: "transparent",
  },
};

export const AppNavigator = (): React.ReactElement => (
  <NavigationContainer theme={navigatorTheme}>
    <WelcomeNavigator />
  </NavigationContainer>
);
