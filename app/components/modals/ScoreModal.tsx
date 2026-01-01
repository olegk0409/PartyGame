import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { BlurView } from "expo-blur";
import User from "../User";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioBoard = 328 / 453;
const aspectRatioButton = 281 / 56;


const ScoreModal = ({ setIsModalVisible, users }) => {

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.bg}
        source={require("@/assets/images/Preloader.png")}
        resizeMode="cover"
        blurRadius={5}
      />
      <BlurView style={styles.blur} intensity={50} tint="dark" />

      <ImageBackground style={styles.innerContainer} source={require('@/assets/images/modals/scoreboard.png')}>
          <ScrollView
            contentContainerStyle={{gap: 8}}
          >
            {users.length > 0 &&
              users.sort((user1, user2) => (user2.score || 0) - (user1.score || 0)).map((user, index) => (
                <User
                  title={user.name}
                  imgCode={user.color}
                  key={user.name + index}
                  score={user.score}
                />
              ))}
          </ScrollView>
      </ImageBackground>

      <TouchableOpacity onPress={() => setIsModalVisible(false)}>
        <Image
          source={require('@/assets/images/buttons/continue.png')}
          style={{width: screenWidth * 0.8, height: screenWidth * 0.8 / aspectRatioButton}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ScoreModal;

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    zIndex: 99,
    left: 0,
    top: 0,
    width: screenWidth,
    height: screenHeight,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  bg: {
    width: screenWidth,
    height: screenHeight,
    ...StyleSheet.absoluteFillObject,
  },
  blur: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
  innerContainer: {
    width: screenWidth * 0.8,
    height: screenWidth * 0.8 / aspectRatioBoard,
    gap: 16,
    alignItems: 'center',
    paddingTop: '20%',
    paddingBottom: '10%',
  },
});
