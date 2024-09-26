import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const AppHeader = (props) => {



  return (
    <View style={style.headerConatiner}>
      <Text style={style.headerText}>{props.title}</Text>
    </View>
  )
}

export default AppHeader

const style = StyleSheet.create({
    headerConatiner: {
      height: 55,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      paddingRight: 10,
      fontSize: 18,
      color: 'black',
      fontWeight: '800',
    },
    headerBody: {
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 10,
    },
    headerBodyText: {
      fontSize: 30,
      color: 'white',
      fontWeight: '400',
    },
  });