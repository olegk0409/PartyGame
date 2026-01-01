import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';


const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioWin = 306 / 228;


const Settings = () => {
  const [isWebViewVisible, setIsWebViewVisible] = useState(false);
  const router = useRouter();


  if (isWebViewVisible) {
    return (
      <SafeAreaView style={{flex: 1, position: 'relative',}}>
        <TouchableOpacity onPress={() => setIsWebViewVisible(false)}
          style={{position: 'absolute', top: '5%', right: '6%', zIndex: 10, width: 60, height: 35,
          backgroundColor: '#1B1B1B', justifyContent: 'center', alignItems: 'center', borderRadius: 20}}
        >
          <Text style={{color: 'white'}}>Close</Text>
        </TouchableOpacity>

        <View style={{flex: 1, backgroundColor: 'white', paddingTop: '5%'}}>
          <WebView
          source={{ uri: 'https://github.com/olegk0409' }}
          style={{ flex: 1, }}
        />
        </View>
      </SafeAreaView>
    );
  }

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
              source={require('@/assets/images/modals/settings.png')}
              style={{width: screenWidth * 0.8, height: screenWidth * 0.8 / aspectRatioWin,}}
            >
              <View style={styles.innerContainer}>
                <TouchableOpacity onPress={() => setIsWebViewVisible(true)}>
                  <Text style={styles.text}>Privacy Policy</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setIsWebViewVisible(true)}>
                  <Text style={styles.text}>Terms of Use</Text>
                </TouchableOpacity>
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
    width: '100%',
    gap: 20,
    paddingTop: '36%',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: '10%',
    gap: 10,
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 28,
    color: 'white',
    textAlign: 'center',

  }
});

export default Settings;