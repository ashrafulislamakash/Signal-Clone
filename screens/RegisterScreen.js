import React, { useState, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Image, Input, Text } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "aaaaa",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.update({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://scontent.fdac20-1.fna.fbcdn.net/v/t1.0-9/71645972_102473654506143_2089235889942167552_o.png?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=yxc10xynC0MAX9j4ABw&_nc_ht=scontent.fdac20-1.fna&oh=087eecdde3d7d1c4aacd6cbe666d145d&oe=603931F3",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h4 style={{ marginBottom: 50, color: "red" }}>
        Create a DamsonBook account
      </Text>

      <View style={styles.input}>
        <Input
          leftIcon={<Icon name="user" size={24} color="black" />}
          placeholder=" Full Name"
          autoFocus
          value={name}
          type="text"
          onChangeText={(text) => setName(text)}
        />

        <Input
          leftIcon={<Icon name="user" size={24} color="black" />}
          placeholder="Email"
          autoFocus
          value={email}
          type="text"
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          leftIcon={<Icon name="user" size={24} color="black" />}
          placeholder=" Password"
          autoFocus
          secureTextEntry
          value={password}
          type="password"
          onChangeText={(text) => setPassword(text)}
        />

        <Input
          leftIcon={<Icon name="lock" size={24} color="black" />}
          placeholder="Profile Pic URL (optional)"
          secureTextEntry
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <View style={styles.button}>
        <Button raised onPress={register} title="Register" />
      </View>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    width: 350,
    padding: 10,
  },
  button: {
    width: 300,
    marginTop: 10,
  },
});
