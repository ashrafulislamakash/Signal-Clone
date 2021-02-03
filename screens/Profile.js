import React from "react";
import { View, Image, Text } from "react-native";

const Profile = () => {
    return (
        // Try setting `flexDirection` to `column`.
        <View style={{ backgroundColor: "red", flex: 1 }}>
            <View
                style={{ height: 350, backgroundColor: "#4C0099", paddingBotoom: 0 }}
            >
                <View style={{ flexDirection: "row", marginHorizontal: 137 }}>
                    <Image
                        style={{
                            borderRadius: 150,
                            backgroundColor: "#ccc",
                            position: "absolute",
                            alignItems: "center",
                            width: 150,
                            height: 150,
                            marginTop: 70
                        }}
                    // source={require('./icon/profile.png')}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 20,
                        marginTop: 255,
                        marginHorizontal: 130,
                        color: "white"
                    }}
                >
                    Angga Maulana
          </Text>
                <Text style={{ fontSize: 20, color: "white", marginHorizontal: 40 }}>
                    Web Developer & Mobile Developer
          </Text>
            </View>
            <View style={{ height: 350, backgroundColor: "white" }}>
                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: 15,
                        marginVertical: 20
                    }}
                >
                    <View
                        style={{
                            height: 100,
                            backgroundColor: "#E0E0E0",
                            flex: 1,
                            marginRight: 7,
                            alignItems: "center",
                            borderRadius: 20
                        }}
                    >
                        <Image
                            style={{ width: 40, height: 40, marginVertical: 11 }}
                        // source={require('./icon/programing.png')}
                        />
                        <Text style={{ color: "black", fontSize: 15 }}>Programing</Text>
                    </View>
                    <View
                        style={{
                            height: 100,
                            backgroundColor: "#E0E0E0",
                            flex: 1,
                            marginLeft: 7,
                            alignItems: "center",
                            borderRadius: 20
                        }}
                    >
                        <Image
                            style={{ width: 40, height: 40, marginVertical: 11 }}
                        //  source={require('./icon/designing.png')}
                        />
                        <Text style={{ color: "black", fontSize: 15 }}>Design Ui</Text>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: 15,
                        marginVertical: 20
                    }}
                >
                    <View
                        style={{
                            height: 100,
                            backgroundColor: "#E0E0E0",
                            flex: 1,
                            marginRight: 7,
                            alignItems: "center",
                            borderRadius: 20
                        }}
                    >
                        <Image
                            style={{ width: 40, height: 40, marginVertical: 11 }}
                        // source={require("./icon/publicspeaking.png")}
                        />
                        <Text style={{ color: "black", fontSize: 15 }}>
                            Public Speaking
              </Text>
                    </View>
                    <View
                        style={{
                            height: 100,
                            backgroundColor: "#E0E0E0",
                            flex: 1,
                            marginLeft: 7,
                            alignItems: "center",
                            borderRadius: 20
                        }}
                    >
                        <Image
                            style={{ width: 40, height: 40, marginVertical: 11 }}
                        // source={require("./icon/teknisi.png")}
                        />
                        <Text style={{ color: "black", fontSize: 15 }}>IT Ethusiast</Text>
                    </View>
                </View>
            </View>
        </View>
    );

}

export default Profile;
