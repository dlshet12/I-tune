import { ImageBackground, View, Text, ScrollView } from "react-native";
import TouchableButton from "../../component/button/button";
import Header from "../../component/header/header";
import BannerComponent from "../../component/banner/banner";
import CatlogComponent from "../../component/catlog/catlog";
import SongComponent from "../../component/songs/songs";
import styles from "./homeStyles";
export default function Home({ navigation }: any) {
  return (
    <View style={styles.homeContainer}>
      <ScrollView>
        <Header></Header>
        <BannerComponent></BannerComponent>
        <CatlogComponent></CatlogComponent>
        <SongComponent navigator={navigation}></SongComponent>
      </ScrollView>
    </View>
  );
}
