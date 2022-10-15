import {
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

import imageItems from "./carousal";
import styles from "../banner/bannerstyles";
import { useRef } from "react";

interface imageItemsProp {
  title: string;
  url: any;
}

const BannerComponent = ({}) => {
  let flatListRef = useRef<FlatList<imageItemsProp> | null>();
  const renderItem = ({ item }: { item: imageItemsProp }) => (
    <TouchableOpacity onPress={() => console.log("click")} activeOpacity={1}>
      <Image source={item.url} style={styles.image}></Image>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={imageItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ref={(ref) => {
          flatListRef.current = ref;
        }}
        style={styles.carousal}
      />
    </View>
  );
};
export default BannerComponent;
