import React from "react";
import { LogBox } from "react-native";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeDrawer } from "../scenes/home/home-drawer.component";
//import { AnkanOffersScreen } from "../scenes/ecommerce/ankan-offers.component";
//import { AnkanRewardScreen } from "../scenes/ecommerce/ankan-rewards.component";
//import { ProductDetails4Screen } from "../scenes/ecommerce/ankan-orders.components";
import { Profile1Screen } from "../scenes/social/profile-1.component";
//import { RewardScreen } from "../scenes/social/profile-7.component";
import { ProductDetails3Screen } from "../scenes/ecommerce/product-details-3.component";
//import { ProductList2Screen } from "../scenes/ecommerce/product-list.component2";
import { ShoppingCartScreen } from "../scenes/ecommerce/shopping-cart.component";
import { PaymentScreen } from "../scenes/ecommerce/payment.component";

const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

/*
 * When dev is true in .expo/settings.json (started via `start:dev`),
 * open Components tab as default.
 */
const initialTabRoute: string = __DEV__ ? "Layouts" : "Components";

const ROOT_ROUTES: string[] = ["Home", "Layouts", "Components", "Themes"];

const TabBarVisibilityOptions = ({ route }): BottomTabNavigationOptions => {
  const isNestedRoute: boolean = route.state?.index > 0;
  const isRootRoute: boolean = ROOT_ROUTES.includes(route.name);

  return { tabBarVisible: isRootRoute && !isNestedRoute };
};

const Stack = createStackNavigator();

const HomeTabsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode="none" initialRouteName="ProductList2">
    {/* <Stack.Screen name="ProductList2" component={ProductList2Screen} /> */}
    <Stack.Screen name="ProductDetails3" component={ProductDetails3Screen} />
    <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} />
    <Stack.Screen name="Payment" component={PaymentScreen} />
    <Stack.Screen name="Profile1" component={Profile1Screen} />
    {/* <Stack.Screen name="RewardPage" component={RewardScreen} /> */}
  </Stack.Navigator>
);

export const AnkanHome = (): React.ReactElement => (
  <>
    <Drawer.Navigator
      screenOptions={{ gestureEnabled: true }}
      drawerContent={(props) => <HomeDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeTabsNavigator} />
      {/* <Drawer.Screen name="Rewards" component={AnkanRewardScreen} />
      <Drawer.Screen name="Offers" component={AnkanOffersScreen} />
      <Drawer.Screen name="Orders" component={ProductDetails4Screen} /> */}
      {/* <Drawer.Screen name="Libraries" component={LibrariesScreen} />
    <Drawer.Screen name="Libraries" component={LibrariesScreen} /> */}
    </Drawer.Navigator>
  </>
);

LogBox.ignoreLogs(["Accessing the 'state'"]);
