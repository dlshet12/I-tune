import { StyleSheet } from "react-native";
const startStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "#000000",
    opacity: 0.9,
  },
  mainText: {
    fontSize: 28,
    color: "#FFFFFF",
    fontWeight: "800",
    marginTop: "25%",
    marginLeft: "5%",
  },
  startButton: {
    marginTop: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    height: "17%",
  },
  conditionText: {
    fontWeight: "500",
    fontSize: 10,
    color: "#FFFFFF",
    textAlign: "center",
    margin: "5%",
  },
});
export default startStyles;
