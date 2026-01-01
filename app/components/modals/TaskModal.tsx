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

const tasks = [
  "Sing a random song in opera style.",
  "Do your best robot dance for 10 seconds.",
  "Imitate a frog jumping across the room.",
  "Act like a celebrity until your next turn.",
  "Make up a magical spell and cast it dramatically.",
  "Talk in a cat voice for the next round.",
  "Pose for the weirdest selfie you can imagine.",
  "Do three awkward yoga poses.",
  "Draw something using your non-dominant hand.",
  "Create and name a brand new dance move.",
  "Pretend you’re calling someone super famous.",
  "Make three silly faces in five seconds.",
  "Try to toss a sock into a basket blindfolded.",
  "Speak like a vampire for 30 seconds.",
  "Imitate an animal until someone guesses what it is.",
  "Tell a joke — even if it’s terrible.",
  "Walk sideways like a crab to the door and back.",
  "Chirp like a bird every time someone speaks.",
  "Reenact a scene from your favorite movie.",
  "Pretend you’re an alien visiting Earth for the first time.",
  "Whisper a made-up secret to the person on your left.",
  "Walk across the room balancing something on your head.",
  "Say the alphabet backward as fast as you can.",
  "Speak in slow motion for the next 30 seconds."
];

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioWin = 306 / 228;

const TaskModal = ({setUsers, currentUser, setSelectedType}) => {
  const currentTask = getRandomItemFromArray(tasks);

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
          <Text style={styles.text}>{currentTask}</Text>
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

export default TaskModal;

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
