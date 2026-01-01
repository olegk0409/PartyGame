import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, StatusBar, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { useRouter, useFocusEffect } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserAdder from './components/UserAdder';
import { loadDashboardItems } from '@/utils/vars';
import User from './components/User';
import NoTitleError from './components/NoTitleError';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioContainer = 248 / 341;
const aspectRatioBar = 208 / 42;


const AvatarPicker = () => {
  const [users, setUsers] = useState([]);
  const [isAdderVisible, setIsAdderVisible] = useState(false);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      loadDashboardItems('users', setUsers);
    }, [])
  );

  useEffect(() => {
    if (isAlertVisible) {
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000)
    }
  }, [isAlertVisible])

  const onStartPress = () => {
    if (users.length < 1) {
      setIsAlertVisible(true);
    } else {
      router.replace('/spinScreen')
    }
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
          source={require('../assets/images/Preloader.png')}
          style={styles.background} 
        >
          <View style={styles.container}>
            <TouchableOpacity style={{position: 'absolute', top: '5%', right: '5%'}} onPress={() => router.back()}>
              <Image
                source={require('@/assets/images/buttons/close.png')}
                style={{width: 43, height: 43}}
              />
            </TouchableOpacity>
            <ImageBackground
              source={require('@/assets/images/modals/entername.png')}
              style={{width: screenWidth * 0.8, height: screenWidth * 0.8 / aspectRatioContainer}}
            >
              <View style={styles.innerContainer}>
                {!isAdderVisible ? (
                  <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContainer}>
                    {users.length > 0 && users.map((user, index) => (
                      <User title={user.name} imgCode={user.color} key={user.name + index}/>
                    ))}

                    <TouchableOpacity onPress={() => setIsAdderVisible(true)}>
                      <Image
                        source={require('@/assets/images/bars/playeradder.png')}
                        style={{width: screenWidth * 0.7, height: screenWidth * 0.7 / aspectRatioBar}}
                      />
                    </TouchableOpacity>
                  </ScrollView>
                ) : (
                  <UserAdder setUsers={setUsers} setIsAdderVisible={setIsAdderVisible}/>
                )}
              </View>
            </ImageBackground>

            <TouchableOpacity style={[isAdderVisible && { opacity: 0, pointerEvents: 'none'}]} onPress={onStartPress}>
              <Image
                source={require('@/assets/images/buttons/startgame.png')}
                style={{width: 146, height: 42}}
              />
            </TouchableOpacity>

            {isAlertVisible && (
              <NoTitleError title={'Add at least 1 player'} />
            )}
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
    gap: 20,
    backgroundColor: 'rgba(0,0,0, 0.5)',
  },
  innerContainer: {
    flex: 1,
    gap: 16,
    alignItems: 'center',
    paddingTop: '25%',
    paddingBottom: '10%',
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContainer: {
    gap: 8
  }
});

export default AvatarPicker;