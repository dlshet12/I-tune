import React from "react";
import { ImageBackground, View, Text, Image } from "react-native";
import Slider from "@react-native-community/slider";
import styles from "./musicStyle";
export default function MusicPlayer() {
  return (
    <View style={styles.musicContainer}>
      <View style={styles.TopBar}>
        <Image source={require("../../assets/downArrow.png")}></Image>
        <Text style={styles.TopBarTitle}>Rock fusion</Text>
        <Image source={require("../../assets/ellipsis-vertical.png")}></Image>
      </View>
      <View style={styles.musicWrapper}>
        <Image
          source={require("../../assets/cat4.png")}
          style={styles.musicImg}
        ></Image>
      </View>
      <View style={styles.musicStyle}>
        <View style={styles.musicText}>
          <Text style={styles.musicTitle}>External Chain</Text>
          <Text style={styles.musicSubTitle}>Animal</Text>
        </View>
        <Image source={require("../../assets/heart.png")}></Image>
      </View>
      <View>
        <Slider
          style={styles.musicTrack}
          value={10}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#27D99B"
          minimumTrackTintColor="#27D99B"
          maximumTrackTintColor="#3CAF8C"
          onSlidingComplete={() => {}}
        ></Slider>
      </View>
      <View style={styles.musicDuration}>
        <Text style={styles.musicDurationStyle}>0:00</Text>
        <Text style={styles.musicDurationStyle}>2:55</Text>
      </View>
      <View style={styles.musicPlay}>
        <Image source={require("../../assets/shuffle.png")}></Image>
        <Image source={require("../../assets/preTrack.png")}></Image>
        <Image source={require("../../assets/playButton.png")}></Image>
        <Image source={require("../../assets/nextTrack.png")}></Image>
        <Image source={require("../../assets/loop.png")}></Image>
      </View>
      <View style={styles.bottomBar}>
        <Text style={styles.musicSubTitle}>Lyrics</Text>
        <Image source={require("../../assets/lyricsDown.png")}></Image>
      </View>
      <Image source={require("../../assets/lyricsPull.png")}></Image>
    </View>
  );
}
