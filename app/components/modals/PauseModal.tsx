import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";


const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioButton = 281 / 56;


const PauseModal = ({ setIsModalVisible, setIsWin}) => {

  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.bg}
        source={require("@/assets/images/BG.png")}
        resizeMode="cover"
      />

      <Image
        source={require('@/assets/images/buttons/pause-big.png')}
        style={{width: 174, height: 51}}
      />

      <TouchableOpacity onPress={() => setIsWin(true)}>
        <Image
          source={require('@/assets/images/buttons/endgame.png')}
          style={{width: 198, height: 67}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsModalVisible(false)}>
        <Image
          source={require('@/assets/images/buttons/continue.png')}
          style={{width: screenWidth * 0.8, height: screenWidth * 0.8 / aspectRatioButton}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PauseModal;

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
    gap: 60
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
});
