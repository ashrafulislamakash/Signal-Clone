import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import Home from "./screens/Home";
const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2D6BED" },
  headerTitleStyle: { color: "white" },
  headerTintColor: "white",
};

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home" 
        screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
