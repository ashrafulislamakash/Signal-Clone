import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { db } from "../firebase";

const CustomListItem = ({ id, chatName, enterChat }) => {
  const [chatMessages, setChatMessages] = useState([])

  useEffect(() => {
    const unsubscribe = db
      .collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setChatMessages(snapshot.docs.map((doc) => doc.data()))
      );

    return unsubscribe;
  });


  return (
    <ListItem key={'id'}
      onPress={() => enterChat(id, chatName)}
      key={id}
      bottomDivider >
      <Avatar
        rounded
        source={{
          uri:
            chatMessages?.[0]?.photoURL ||
            "data:image/jpeg;base64,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",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {chatMessages?.[0]?.displayName}:{chatMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem >
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
