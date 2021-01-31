import React, { useLayoutEffect } from "react";
import { StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import { auth, db } from "../firebase";

const Home = ({ navigation }) => {

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("login");
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Damsonbook",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { backgroundColor: "#fff" },
      headerTintColor: "black",

      headerLeft: () => (
        <view style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
          </TouchableOpacity>
        </view>
      ),

      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            width: 80,
            marginRight: 20,
          }} >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="back" />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color="back" />
          </TouchableOpacity>
        </View >
      ),

    });
  }, [navigation]);

  return (

    <SafeAreaView>
      {/* <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Damsonbook', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      /> */}
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
});
