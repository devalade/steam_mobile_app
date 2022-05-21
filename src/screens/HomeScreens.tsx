import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '../constant/colors';
import {IMAGES} from '../constant/image';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreens = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>LOGO</Text>
        <Image style={styles.avatar} source={{uri: IMAGES.avatar}} />
      </View>

      <View style={styles.searchBar}>
        <Text>
          <Icon name="search" size={32} color="#fff" />
        </Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a games"
          placeholderTextColor="#FFF"
        />
      </View>
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: COLORS.darkBlue,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  searchBar: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: COLORS.veryLightGray,
  },
  searchInput: {
    padding: 5,
    borderRadius: 100,
    color: 'white',
  },
});
