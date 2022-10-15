import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import styles from "../songs/songsStyle";
import songList from "./songsList";
interface songListProp {
  name: string;
  year: string;
  title: string;
  url: any;
}
const SongComponent = ({ navigator }: any) => {
  const navigateToMusicPlayer = async () => {
    navigator.navigate("MusicPlayer");
  };
  const renderItem = ({ item }: { item: songListProp }) => (
    <TouchableOpacity onPress={() => navigateToMusicPlayer()} activeOpacity={1}>
      <View style={styles.playlist}>
        <Image source={item.url} style={styles.songImage}></Image>
        <View style={styles.songSetting}>
          <View style={styles.songInfo}>
            <Text style={styles.songName}>{item.name}</Text>
            <Text style={styles.songYear}>
              {item.year} • {item.title}
            </Text>
          </View>
          <View style={styles.settingStyle}>
            <Image source={require("../../assets/img5.png")}></Image>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.songContainer}>
      <Text style={styles.songTitle}>
        <Image source={require("../../assets/img4.png")}></Image> Popular
        singles
      </Text>
      <FlatList
        data={songList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.url}
      />
    </View>
  );
};
export default SongComponent;
