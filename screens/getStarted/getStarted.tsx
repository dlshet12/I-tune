import { ImageBackground, Text, View, StatusBar } from "react-native";
import styles from "./getStartedStyles";
import TouchableButton from "../../component/button/button";

export default function GetStarted({ navigation }: any) {
  const navigateToHome = async () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <ImageBackground
        source={require("../../assets/img1.png")}
        style={styles.image}
      >
        <View>
          <Text style={styles.mainText}>
            Enjoy your{"\n"} favorite{"\n"} music
          </Text>
        </View>
        <View style={styles.startButton}>
          <TouchableButton onPress={navigateToHome} />
          <TouchableButton text="Continue with Email" />
        </View>
        <Text style={styles.conditionText}>
          By continuing you agree to the terms {"\n"} of Servics & Privacy
          Policy
        </Text>
      </ImageBackground>
    </View>
  );
}
