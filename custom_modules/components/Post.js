import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const Post = props => {
  const navigation=useNavigation()
  const navigateTitle=()=>{
    navigation.navigate("Title",{title:props.title,comment:props.comment,description:props.description,postId:props.postId})
  }
  
  return (
    <TouchableOpacity onPress={navigateTitle}>
      <View style={postStyle.postContainer}>
        <View style={postStyle.bodyContainer}>
          <Text style={postStyle.titleStyle}>{props.title}</Text>
          <Text style={postStyle.descriptionStyle}>{props.description}</Text>
        </View>
        <View style={postStyle.commentContainer}>
          <Text>{props.comment} comments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Post;

const postStyle = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
  titleStyle: {
    fontSize: 25,
    fontWeight: '500',
    color: 'black',
  },
  bodyContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    borderRadius: 4,
  },
  descriptionStyle: {
    fontSize: 15,
    color: 'black',
    marginTop: '20px',
  },
  commentContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
