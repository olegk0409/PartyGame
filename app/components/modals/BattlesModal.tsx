import { getRandomItemFromArray, saveDashboardItems } from "@/utils/vars";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

const battles = [
  "Who can do the best animal impression?",
  "Who can hold a funny face the longest without blinking?",
  "Who tells the better bad joke — even if no one laughs?",
  "Rock-paper-scissors — best of three!",
  "Who can do the silliest dance for 10 seconds?",
  "Who makes the loudest fake sneeze?",
  "Who can name more fruits in 15 seconds?",
  "Who can act like a robot more convincingly?",
  "Staring contest – first to blink loses!",
  "Who does a better evil laugh?",
  "Who can touch more objects in the room in 10 seconds?",
  "Tongue twister battle – say “red lorry, yellow lorry” 3x fast!",
  "Who can hop on one foot longer?",
  "Who can make the weirdest sound using only their mouth?",
  "Who can recite the alphabet backward faster?",
  "Who can mime brushing their teeth more dramatically?",
  "Who can name more countries in 15 seconds?",
  "Impersonation battle – mimic someone in the room!",
  "Who can hold a plank (or freeze in a pose) the longest?",
  "Who can build a taller stack of random objects in 30 seconds?",
  "Who can say “I’m a potato” in the most dramatic way?",
  "Silent dance-off – no music!",
  "Who can act out an emotion the best (joy, anger, fear, etc.)?"
];

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioWin = 306 / 228;

const BattlesModal = ({setUsers, currentUser, setSelectedType}) => {
  const currentBattle = getRandomItemFromArray(battles);

  const onDonePress = () => {
    setUsers(prevUsers => {
      const filtredUsers = prevUsers.filter(user => user !== currentUser)
      let newUser = {...currentUser, score: currentUser.score ? +currentUser.score + 1 : 1};
      let newUsers = [...filtredUsers, newUser];
      saveDashboardItems('users', newUsers);
      return newUsers;
    })
    setSelectedType(null);
  }

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
      <ImageBackground
        source={require("@/assets/images/modals/task.png")}
        style={{
          width: screenWidth * 0.8,
          height: (screenWidth * 0.8) / aspectRatioWin,
        }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{currentBattle}</Text>
        </View>
      </ImageBackground>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onPassPress}>
          <Image
            source={require('@/assets/images/buttons/pass.png')}
            style={{width: 116, height: 59}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onDonePress}>
          <Image
            source={require('@/assets/images/buttons/done.png')}
            style={{width: 116, height: 59}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BattlesModal;

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: "10%",
    gap: 10,
  },
  text: {
    fontFamily: "Arial",
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  buttonsContainer: {
    width: screenWidth * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
  }
});
