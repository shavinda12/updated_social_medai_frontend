import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AppHeaderBackArrow from '../components/AppHeaderBackArrow';
import Button from '../components/Button';
import axios from 'axios';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import ErrorModal from '../components/ErrorModal';


const CreatePostScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [visibility,setVisibility]=useState(false);
  const post = {
    title,
    description,
  };
  const queryClient = useQueryClient();

  const postPublishPost = async post => {
    try {
      const result = await axios.post(
        'http://192.168.43.137:3000/api/mobile/posts/newPost',
        post,
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  };

  const publishPost = useMutation({
    mutationFn: post => postPublishPost(post),
    onSuccess: (backendResult, newPost) => {
      queryClient.invalidateQueries(['posts']);
      setTitle('');
      setDescription('');
    },
    onError: error => {
      if (error.response) {
        if (error.response.status == 500) {
          setError('Internal Server Error');
        } else if (error.response.status == 404) {
          setError('Network Error');
        } else {
          setError('Some thing went wrong..');
        }
      }
      setVisibility(true)
    },
  });

  const onSubmit = () => {
    {
      title != '' && description != '' && publishPost.mutate(post);
    }
  };

  const closeModal = () => {
    setVisibility(false) 
    setError('');        
  };
  
  return (
    <View>
      <AppHeaderBackArrow prevScreen={'Home'} title="Create Post" />
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
          placeholder="Description"
          style={[styles.input, , styles.textArea]}
        />
      </View>
      <Button title="Publish" function={onSubmit} />
      <ErrorModal visibility={visibility} closeModal={closeModal} error={error}/>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
  },
  textArea: {
    marginTop: 10,
    marginBottom: 10,
    height: 150,
    textAlign: 'center',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  errorText: {
    marginBottom: 20,
    color: 'red',
    fontSize: 16,
  },
});
