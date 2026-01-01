import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useFocusEffect, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { loadDashboardItems, usersBar } from "@/utils/vars";
import Wheel from "./components/Wheel";
import QuestionModal from "./components/modals/QuestionModal"
import TaskModal from "./components/modals/TaskModal";
import BattlesModal from "./components/modals/BattlesModal";
import SkipModal from "./components/modals/SkipModal";
import ScoreModal from "./components/modals/ScoreModal";
import PauseModal from "./components/modals/PauseModal";
import WinModal from "./components/modals/WinModal";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const aspectRatioBar = 208 / 42;

const Spin = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [isScoreVisible, setIsScoreVisible] = useState(false);
  const [isPauseVisible, setIsPauseVisible] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      loadDashboardItems("users", setUsers);
    }, [])
  );

  useEffect(() => {
    if (users.length > 0) {
      setCurrentUser(users[currentIndex]);
    }
  }, [users])

  return (
    <SafeAreaView style={styles.safeContainer}>
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={"padding"}
        keyboardVerticalOffset={0}
      >
        <StatusBar
          hidden={true}
          backgroundColor="#000"
          barStyle="light-content"
        />

        <ImageBackground
          source={require("../assets/images/BG.png")}
          style={styles.background}
        >
          <View style={styles.container}>
            <TouchableOpacity
              style={{ position: "absolute", top: "5%", left: "5%" }}
              onPress={() => setIsPauseVisible(true)}
            >
              <Image
                source={require("@/assets/images/buttons/pause.png")}
                style={{ width: 43, height: 43 }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ position: "absolute", top: "5%", right: "5%" }}
              onPress={() => setIsScoreVisible(true)}
            >
              <Image
                source={require("@/assets/images/buttons/score.png")}
                style={{ width: 43, height: 43 }}
              />
            </TouchableOpacity>

            {currentUser && (
              <TouchableOpacity>
                <ImageBackground
                  source={usersBar[currentUser.color]}
                  style={styles.bar}
                >
                  <Text style={styles.text}>{currentUser.name}</Text>
                  <Text style={styles.text}>{currentUser.score || 0}</Text>
                </ImageBackground>
              </TouchableOpacity>
            )}

            {!selectedType && (<Wheel setSelectedType={setSelectedType}/>)}

            {selectedType === 'question' && (<QuestionModal setUsers={setUsers} currentUser={currentUser} setSelectedType={setSelectedType}/>)}
            {selectedType === 'task' && (<TaskModal setUsers={setUsers} currentUser={currentUser} setSelectedType={setSelectedType}/>)}
            {selectedType === 'battle' && (<BattlesModal setUsers={setUsers} currentUser={currentUser} setSelectedType={setSelectedType}/>)}
            {selectedType === 'skip' && (<SkipModal setUsers={setUsers} currentUser={currentUser} setSelectedType={setSelectedType}/>)}
            {isScoreVisible && (<ScoreModal setIsModalVisible={setIsScoreVisible} users={users}/>)}
            {isPauseVisible && (<PauseModal setIsModalVisible={setIsPauseVisible} setIsWin={setIsWin}/>)}
            {isWin && (<WinModal users={users} />)}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#000",
  },
  keyboardContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    gap: 20,
    paddingTop: '30%',
    paddingBottom: '20%',
  },
  text: {
    fontFamily: "Arial",
    fontSize: 16,
    color: "white",
  },
  bar: {
    width: screenWidth * 0.8, 
    height: screenWidth * 0.8 / aspectRatioBar,
    paddingLeft: '20%',
    paddingRight: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default Spin;
