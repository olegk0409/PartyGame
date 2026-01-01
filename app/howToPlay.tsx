import React from 'react';
import { View, StyleSheet, ImageBackground, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioWin = 306 / 548;


const HowToPlay = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeContainer}>
    <KeyboardAvoidingView
      style={styles.keyboardContainer}
      behavior={'padding'}
      keyboardVerticalOffset={0} 
    >
      <StatusBar
        hidden={true}
        backgroundColor="#000"
        barStyle="light-content"
      />

        <ImageBackground 
          source={require('../assets/images/BG.png')}
          style={styles.background} 
        >
          <View style={styles.container}>
            <TouchableOpacity style={{position: 'absolute', top: '5%', left: '5%'}} onPress={() => router.back()}>
              <Image
                source={require('@/assets/images/buttons/back.png')}
                style={{width: 43, height: 43}}
              />
            </TouchableOpacity>
            <ImageBackground
              source={require('@/assets/images/modals/howtoplay.png')}
              style={{width: screenWidth * 0.8, height: screenWidth * 0.8 / aspectRatioWin}}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.text}>Spin the Wheel{'\n'}Tap the SPIN button to launch the wheel and land on a surprise category</Text>
                <Text style={styles.text}>Complete the Challenge{'\n'}The wheel will decide your fate:</Text>
                <Text style={styles.text}>🎭 Do a fun or silly task{'\n'}❓ Answer a creative or personal question{'\n'}🔄 Skip your turn{'\n'}💥 Enter a battle!</Text>
                <Text style={styles.text}>Play with Friends{'\n'}Take turns, earn points, and share laughs. Perfect for parties, sleepovers!</Text>
                <Text style={styles.text}>Win the Game{'\n'}After the final round, the team or player with the most points wins!</Text>
              </View>
            </ImageBackground>
          </View>

        </ImageBackground>

    </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  keyboardContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 52,
    width: '100%',
    gap: 20
  },
  innerContainer: {
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',

  }
});

export default HowToPlay;