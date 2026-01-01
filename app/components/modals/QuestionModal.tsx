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

const questions = [
  "If you could have any superpower, what would it be?",
  "What’s the weirdest thing you’ve ever eaten?",
  "If you were a cartoon character, who would you be?",
  "What’s your most embarrassing moment you’re willing to share?",
  "If you could time travel, where would you go first?",
  "What song gets stuck in your head all the time?",
  "If you were invisible for a day, what would you do?",
  "What’s a talent you wish you had?",
  "What’s the last thing that made you laugh really hard?",
  "If you could swap lives with someone for a day, who would it be?",
  "What’s your favorite silly childhood memory?",
  "If animals could talk, which one would be the funniest?",
  "What’s your guilty pleasure TV show or song?",
  "If you had to eat only one food forever, what would it be?",
  "What’s the worst haircut you’ve ever had?",
  "What’s something you believed as a kid that isn’t true?",
  "What’s your dream job if money didn’t matter?",
  "If your life was a movie, what would it be called?",
  "What’s your go-to dance move?",
  "What’s the strangest thing you’ve Googled?",
  "If you could be famous for anything, what would it be?",
  "What fictional character do you relate to most?",
  "What would you do if you won a million dollars right now?"
];

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioWin = 306 / 228;

const QuestionModal = ({setUsers, currentUser, setSelectedType}) => {
  const currentQuestion = getRandomItemFromArray(questions);

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
        source={require("@/assets/images/modals/question.png")}
        style={{
          width: screenWidth * 0.8,
          height: (screenWidth * 0.8) / aspectRatioWin,
        }}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text}>{currentQuestion}</Text>
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

export default QuestionModal;

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
