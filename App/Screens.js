import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "./context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  }
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Home = () => (
  <ScreenContainer>
    <Text>Master List Screen</Text>
    <Button title="React Native by Example" onPress={() => alert("todo!")} />
    <Button title="React Native School" onPress={() => alert("todo!")} />
    <Button title="Drawer" onPress={() => alert("todo!")} />
  </ScreenContainer>
);

export const Details = () => (
  <ScreenContainer>
    <Text>Details Screen</Text>
  </ScreenContainer>
);

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => alert("todo!")} />
    <Button title="React Native School" onPress={() => alert("todo!")} />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => alert("todo!")} />
      <Button title="Sign Out" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => alert("todo!")} />
      <Button title="Create Account" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => alert("todo!")} />
    </ScreenContainer>
  );
};
