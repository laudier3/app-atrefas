import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

export const Slids = () => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Image 
            source={require("@/../assets/b1.png")} 
            style={{width: "80%", height: 100}}
        />
      </View>
      <View key="2">
        <Image 
            source={require("@/../assets/b2.png")} 
            style={{width: "80%", height: 100}}
        />
      </View>
      <View key="3">
        <Image 
            source={require("@/../assets/b3.png")} 
            style={{width: "80%", height: 100}}
        />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    height: 36,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    gap: 1
  },
});