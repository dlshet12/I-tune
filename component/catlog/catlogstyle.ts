import { StyleSheet } from "react-native";
const catlogStyle = StyleSheet.create({
  catlogContainer: {
    marginTop: 10,
    height: 250,
    width: 400,
  },
  catalogImage: {
    elevation: 15,
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  catMusic: {
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    fontWeight: "500",
    color: "#FFFFFF",
    padding: 8,
  },
  songName: {
    color: "white",
    fontSize: 19,
  },
  songYear: {
    color: "white",
    fontSize: 14,
  },
});
export default catlogStyle;
