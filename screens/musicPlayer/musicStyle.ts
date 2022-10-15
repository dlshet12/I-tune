import { StyleSheet } from "react-native";
const musicStyles = StyleSheet.create({
  musicContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  TopBar: {
    display: "flex",
    flexDirection: "row",
    width: 350,
    justifyContent: "space-between",
    marginTop: 15,
  },
  TopBarTitle: {
    color: "white",
    fontSize: 20,
  },
  musicWrapper: {
    width: 250,
    height: 280,
    marginBottom: 30,
    marginTop: 60,
  },
  musicImg: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  musicTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
  },
  musicSubTitle: {
    fontSize: 16,
    color: "white",
  },
  musicStyle: {
    width: 240,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  musicText: {
    width: 140,
    alignItems: "center",
    marginLeft: 35,
  },
  musicTrack: {
    width: 350,
    height: 50,
    marginTop: 25,
    flexDirection: "row",
  },
  musicDuration: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  musicDurationStyle: {
    color: "white",
    fontSize: 10,
    fontWeight: "500",
  },
  musicPlay: {
    display: "flex",
    flexDirection: "row",
    width: 340,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  bottomBar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 40,
    marginBottom: 10,
  },
});
export default musicStyles;
