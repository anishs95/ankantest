import { LogBox } from "react-native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { RegistarationScreen } from "../scenes/ankanAuth/registration/registration";
import { OTPScreen } from "../scenes/ankanAuth/otp/otp-screen";
import { OTPScreen2 } from "../scenes/ankanAuth/otp/otp-screen2";
import { LogOut } from "../scenes/ankanAuth/otp/log-out";
import { AnkanHome } from "./app.ankan.home";

const Stack = createStackNavigator();

export const WelcomeNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Registration" component={RegistarationScreen} />
    <Stack.Screen name="Otp" component={OTPScreen} />
    <Stack.Screen name="OtpVerified" component={OTPScreen2} />
    <Stack.Screen name="Home" component={AnkanHome} />
    <Stack.Screen name="Logout" component={LogOut} />
  </Stack.Navigator>
);

LogBox.ignoreLogs(["Accessing the 'state'"]);
