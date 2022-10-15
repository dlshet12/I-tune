import { StyleSheet } from "react-native";
const homeStyles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },
  TopContainer: {
    width: "100%",
    height: "40%",
  },
  topimg: {
    width: "100%",
    height: " 100%",
  },
  topstyle: {
    marginLeft: "5%",
    marginTop: "50%",
  },
  topTextStyle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "500",
  },
  secondContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "20%",
    alignItems: "center",
  },
  secondCText: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
export default homeStyles;
