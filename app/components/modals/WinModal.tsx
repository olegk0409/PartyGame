import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { saveDashboardItems } from "@/utils/vars";
import User from "../User";
import { useRouter } from "expo-router";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");


const WinModal = ({users}) => {
  const router = useRouter();
  const winner = users.sort((user1, user2) => (user2.score || 0) - (user1.score || 0))[0];

  const onEndPress = () => {
    saveDashboardItems('users', []);
    router.replace('/home');
  }

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.bg}
        source={require("@/assets/images/BG.png")}
        resizeMode="cover"
      />

      <Image
        style={{position: 'absolute', top: '-27.5%', width: '100%', height: '100%' }}
        source={require("@/assets/images/victorylines.png")}
        resizeMode="contain"
      />

      <View style={styles.winContainer}>
          <Image
            source={require('@/assets/images/win.png')}
            style={{width: screenWidth, height: screenWidth}}
            resizeMode="contain"
          />

          <User
            title={winner.name}
            imgCode={winner.color}
            score={winner.score}
          />

          <TouchableOpacity onPress={onEndPress}>
            <Image
              source={require('@/assets/images/buttons/endgame-small.png')}
              style={{width: 140, height: 67, marginTop: '15%'}}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default WinModal;

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    zIndex: 99,
    left: 0,
    top: 0,
    width: screenWidth,
    height: screenHeight,
    alignItems: 'center',
    paddingTop: '15%'
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
  pauseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 60
  },
  winContainer: {
    alignItems: 'center',
    marginTop: '12%'
  }
});
