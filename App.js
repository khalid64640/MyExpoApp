import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import GameScreen from './Screens/GameScreen';
import GameOverScreen from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  const [fontsloaded] = useFonts({
    'bahij-nazanin': require('./assets/fonts/bahij-nazanin.ttf'),
    'bahij-nazanin-bold': require('./assets/fonts/bahijbold.ttf')
  });

  if(!fontsloaded){
    return <AppLoading />
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function GameOverHandler() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver = {GameOverHandler} />;
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }


  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen} >
      <ImageBackground
        source={require('./assets/Background Image/background.png')}
        resizeMethod="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
  backgroundImage: {
    opacity: 0.15
  }
});


