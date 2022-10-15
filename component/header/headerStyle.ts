import { StyleSheet } from "react-native";
const headerStyle = StyleSheet.create({
  headerContainer: {
    margin: 5,
    width: 388,
    height: 60,
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 130,
    marginRight: 5,
    alignItems: "center",
  },
  notbar: {
    height: "100%",
    width: "100%",
  },
  greeting: {
    fontSize: 24,
    fontWeight: "500",
    color: "#FFFFFF",
  },
});
export default headerStyle;
