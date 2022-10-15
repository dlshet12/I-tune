import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

import categories from "./catlogImg";
import styles from "../catlog/catlogstyle";

interface categoriesProp {
  name: string;
  year: string;
  url: any;
}
const CatlogComponent = () => {
  const renderItem = ({ item }: { item: categoriesProp }) => (
    <TouchableOpacity onPress={() => console.log("click")} activeOpacity={1}>
      <Image source={item.url} style={styles.catalogImage}></Image>
      <View style={styles.catMusic}>
        <Text style={styles.songName}>{item.name}</Text>
        <Text style={styles.songYear}>{item.year}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.catlogContainer}>
      <Text style={styles.title}>
        <Image source={require("../../assets/img3.png")}></Image> Discography
      </Text>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default CatlogComponent;
