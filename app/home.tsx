import React from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioWin = 293 / 85;


const Home = () => {
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
          source={require('../assets/images/Preloader.png')}
          style={styles.background} 
        >
          <View style={styles.container}>
            <TouchableOpacity onPress={() => router.push('/avatarPicker')}>
              <Image
                source={require('@/assets/images/buttons/start.png')}
                style={{width: screenWidth, height: screenWidth / aspectRatioWin}}
              />
            </TouchableOpacity>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => router.push('/howToPlay')}>
                <Image
                  source={require('@/assets/images/buttons/howtoplay.png')}
                  style={{width: 164, height: 48}}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/settings')}>
                <Image
                  source={require('@/assets/images/buttons/settings.png')}
                  style={{width: 164, height: 48}}
                />
              </TouchableOpacity>
            </View>
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
  buttonsContainer: {
    gap: 16,
    position: 'absolute',
    bottom: '20%'
  }
});

export default Home;