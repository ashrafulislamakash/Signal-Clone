import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Image, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth } from '../firebase';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);


  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error));
  };


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />

      <Image
        source={{
          uri:
            "https://scontent.fdac20-1.fna.fbcdn.net/v/t1.0-9/71645972_102473654506143_2089235889942167552_o.png?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=yxc10xynC0MAX9j4ABw&_nc_ht=scontent.fdac20-1.fna&oh=087eecdde3d7d1c4aacd6cbe666d145d&oe=603931F3",
        }}
        style={{ width: 200, height: 200 }}
      />

      <View style={styles.input}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          leftIcon={<Icon name="user" size={24} color="black" />}
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setpassword(text)}
          onSubmitEditing={signIn}
        />
      </View>

      <View style={styles.button}>
        <Button style={styles.button} onPress={signIn} title="Login" />
        <Button
          onPress={() => navigation.navigate("Register")}
          type="outline"
          title="Register"
        />
      </View>

      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },

  input: {
    width: 300,
    padding: 10,
  },

  button: {
    width: 300,
  },
});
