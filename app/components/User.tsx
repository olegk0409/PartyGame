import { usersBar } from '@/utils/vars';
import React from 'react'
import { TouchableOpacity, Text, Dimensions, ImageBackground, StyleSheet } from 'react-native'

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioBar = 208 / 42;

const User = ({title, imgCode, score = null}) => {
  

  return (
    <TouchableOpacity>
      <ImageBackground
        source={usersBar[imgCode]}
        style={styles.bg}
      >
        <Text style={styles.text}>{title}</Text>
        {score && (<Text style={styles.text}>{score || 0}</Text>)}
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default User;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    fontSize: 22,
    color: 'white',
  },
  bg: {
    width: screenWidth * 0.7, 
    height: screenWidth * 0.7 / aspectRatioBar,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '20%',
    paddingRight: '10%'
  }
})
