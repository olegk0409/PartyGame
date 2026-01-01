import { FaceTypes, saveDashboardItems } from '@/utils/vars';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Image, StyleSheet, TextInput, Dimensions } from 'react-native';
import NoTitleError from './NoTitleError';

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioButton = 208 / 42;

const UserAdder = ({setUsers, setIsAdderVisible}) => {
  const [text, setText] = useState('');
  const [selectedFace, setSelectedFace] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  

  const onFacePress = (face: FaceTypes) => {
    setSelectedFace(face);
  }

  const onOkPress = () => {
    if (text && selectedFace) {
      setUsers(prevUsers => {
        let newUsers = [...prevUsers, {color: selectedFace, name: text}];
        saveDashboardItems('users', newUsers);
        return newUsers;
      });
    setIsAdderVisible(false);
    }
    setIsAlertVisible(true);
    return;
  }

  useEffect(() => {
    if (isAlertVisible) {
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 2000)
    }
  }, [isAlertVisible])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => onFacePress(FaceTypes.purple)} style={[styles.faceButton, selectedFace === FaceTypes.purple && styles.selectedFace]}>
          <Image
            source={require('@/assets/images/faces/face-purple.png')}
            style={styles.faceImage}
            
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onFacePress(FaceTypes.yellow)} style={[styles.faceButton, selectedFace === FaceTypes.yellow && styles.selectedFace]}>
          <Image
            source={require('@/assets/images/faces/face-yellow.png')}
            style={styles.faceImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onFacePress(FaceTypes.green)} style={[styles.faceButton, selectedFace === FaceTypes.green && styles.selectedFace]}>
          <Image
            source={require('@/assets/images/faces/face-green.png')}
            style={styles.faceImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onFacePress(FaceTypes.red)} style={[styles.faceButton, selectedFace === FaceTypes.red && styles.selectedFace]}>
          <Image
            source={require('@/assets/images/faces/face-red.png')}
            style={styles.faceImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onFacePress(FaceTypes.blue)} style={[styles.faceButton, selectedFace === FaceTypes.blue && styles.selectedFace]}>
          <Image
            source={require('@/assets/images/faces/face-blue.png')}
            style={styles.faceImage}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onFacePress(FaceTypes.orange)} style={[styles.faceButton, selectedFace === FaceTypes.orange && styles.selectedFace]}>
          <Image
            source={require('@/assets/images/faces/face-orange.png')}
            style={styles.faceImage}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder='Enter name'
        style={styles.input}
        placeholderTextColor={'#D9D9D9'}
        value={text}
        onChangeText={(value) => setText(value)}
        maxLength={18}
      />

      <TouchableOpacity onPress={onOkPress}>
        <Image
          source={require('@/assets/images/buttons/ok.png')}
          style={{width: screenWidth * 0.7, height: screenWidth * 0.7 / aspectRatioButton}}
        />
      </TouchableOpacity>

      {isAlertVisible && (
        <NoTitleError title={'Chose avatar and enter name'} />
      )}
    </View>
  )
}

export default UserAdder;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    gap: '15%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  faceImage: {
    width: 46, 
    height: 46, 
    transform: [{translateX: -1}, {translateY: -1}],
    
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#D9D9D9',
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 16,
  },
  selectedFace: {
    borderWidth: 2,
    borderColor: '#FF2C2C',
    borderRadius: 100,
  },
  faceButton: {
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'transparent',
  }
})
