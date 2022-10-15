import { StyleSheet } from "react-native";
const songStyle = StyleSheet.create({
  songContainer: {
    display: "flex",
  },
  songImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  playlist: {
    display: "flex",
    flexDirection: "row",
  },
  songTitle: {
    fontSize: 23,
    fontWeight: "500",
    color: "#FFFFFF",
    padding: 8,
  },
  songInfo: {
    marginLeft: 30,
    justifyContent: "center",
  },
  songSetting: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 280,
  },
  settingStyle: {
    justifyContent: "center",
  },
  songName: {
    color: "white",
    fontSize: 16,
  },
  songYear: {
    color: "white",
    fontSize: 13,
  },
});
export default songStyle;
