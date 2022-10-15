import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import styles from "../header/headerStyle";
const today = new Date();
const curHr = today.getHours();

const Header = ({}) => {
  let time;
  if (curHr < 12) {
    time = <Text>Good morning!</Text>;
  } else if (curHr < 17) {
    time = <Text>Good afternoon!</Text>;
  } else {
    time = <Text>Good evening!</Text>;
  }
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.greeting}>{time}</Text>
      <TouchableOpacity onPress={() => console.log("click")}>
        <View style={styles.headerStyle}>
          <View style={{ width: 25, height: 24 }}>
            <ImageBackground
              source={require("../../assets/recent.png")}
              style={styles.notbar}
            ></ImageBackground>
          </View>
          <View style={{ width: 25, height: 24 }}>
            <ImageBackground
              source={require("../../assets/notification.png")}
              style={styles.notbar}
            ></ImageBackground>
          </View>
          <View style={{ width: 25, height: 24 }}>
            <ImageBackground
              source={require("../../assets/setting.png")}
              style={styles.notbar}
            ></ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
