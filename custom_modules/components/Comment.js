import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const Comment = (props) => {
  return (
    <View style={commentStyles.container}>
        <Text style={commentStyles.comment}>
            {props.comment}
        </Text>
    </View>
  )
}

export default Comment

const commentStyles=StyleSheet.create({
    container:{
        marginTop:15,
        display:'flex',
        width:'90%',
        marginLeft:20,
        borderWidth:2,
        borderColor:'black',
        padding:5,
        borderRadius:6
    },
    comment:{
        display:'flex',
        color:'black',
        fontSize:16
    }
})