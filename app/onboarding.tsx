import React from 'react';
import { View, StyleSheet, ImageBackground, Text, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


const Onboarding = () => {
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
            <Text style={styles.title}>Welcome to the party game!</Text>
            <Text style={styles.text}>Spin the colorful wheel to get a fun task, question, bonus, or team battle. Play with friends, complete hilarious challenges, and earn points. Are you ready to laugh, compete, and win?</Text>
            <TouchableOpacity onPress={() => router.push('/home')}>
              <Image
                source={require('@/assets/images/buttons/start.png')}
                style={{width: 208, height: 65}}
              />
            </TouchableOpacity>
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
  title: {
    fontFamily: 'Carn',
    fontSize: 29,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  }
});

export default Onboarding;