import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import backArrow from '../icons/back_arrow.png'
import {useNavigation} from '@react-navigation/native';

const AppHeaderBackArrow = props => {
  const navigation = useNavigation();
  console.log(props.prevScreen);
  const navigationScreen = () => {
    navigation.navigate(props.prevScreen);
  };

  return (
    <View style={style.headerConatiner}>
      <TouchableOpacity onPress={navigationScreen}>
        <Image source={backArrow} style={style.headerArrow} />
      </TouchableOpacity>
      <Text style={style.headerText}>{props.title}</Text>
    </View>
  );
};

export default AppHeaderBackArrow;

const style = StyleSheet.create({
  headerConatiner: {
    height: 55,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'center',
  },
  headerText: {
    marginLeft:'30%',
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  headerArrow: {
    width: 24,
    height: 24,
    marginLeft: 20,
    
  },
});