import React from "react";
import {
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioButton = 281 / 56;

const SkipModal = ({setUsers, currentUser, setSelectedType}) => {

  const onPassPress = () => {
    setUsers(prevUsers => {
      const filtredUsers = prevUsers.filter(user => user !== currentUser)
      let newUser = {...currentUser};
      let newUsers = [...filtredUsers, newUser];
      return newUsers;
    })
    setSelectedType(null);
  }

  return (
    <View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>You’re Skipping This Turn!</Text>
          <Text style={styles.text}>Take a short break… but not so fast!</Text>

          <TouchableOpacity onPress={onPassPress}>
            <Image
              source={require('@/assets/images/buttons/continue.png')}
              style={{width: screenWidth * 0.8, height: screenWidth * 0.8 / aspectRatioButton}}
            />
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default SkipModal;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 52,
    paddingTop: "10%",
    gap: 100,
  },
  text: {
    fontFamily: "Arial",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  title: {
    fontFamily: 'Carn',
    fontSize: 44,
    color: "white",
    textAlign: "center",
  }
});
