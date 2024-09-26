import React, {useState} from 'react';
import AppHeaderBackArrow from '../components/AppHeaderBackArrow';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Post from '../components/Post';
import Comment from '../components/Comment';
import Button from '../components/Button';
import useGetComments from '../hooks/useGetComments';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';
import ErrorModal from '../components/ErrorModal';


const TitleScreen = ({route}) => {
  const {title, description, comment, postId} = route.params;
  const {data: comments} = useGetComments(postId);
  const [newComment, setNewComment] = useState('');
  const [error, setError] = useState('');
  const [visibility, setVisibility] = useState(false);
  const queryClient = useQueryClient();

  const addComment = useMutation({
    mutationFn: () =>
      axios
        .post('http://192.168.43.137:3000/api/mobile/posts/addComment', {
          newComment,
          postId,
        })
        .then(res => res.data),
    onSuccess: (backendResult, newPostComment) => {
      queryClient.invalidateQueries(['commentsArray', newPostComment.postId]);
      queryClient.invalidateQueries(['posts']);
      setNewComment('');
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
      setVisibility(true);
    },
  });

  const onSubmit = () => {
    {
      newComment != '' &&
        addComment.mutate({newComment: newComment, postId: postId});
    }
  };

  const closeModal = () => {
    setVisibility(false);
    setError('');
  };

  return (
    <View style={{flex: 1}}>
      <AppHeaderBackArrow prevScreen={'Home'} title="Title" />
      <Post title={title} description={description} comment={comment} />
      <View style={{flex: 1}}>
        {comments?.length || 0 > 0 ? (
          <ScrollView>
            {comments.map(({comment, commentId}) => (
              <Comment key={commentId} comment={comment} />
            ))}
          </ScrollView>
        ) : null}
      </View>
      <View style={{position: ''}}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Description"
          style={[styles.input, , styles.textArea]}
          value={newComment}
          onChangeText={value => {
            setNewComment(value);
          }}
        />
        <Button title="Comment" function={onSubmit} />
      </View>
      <ErrorModal
        visibility={visibility}
        closeModal={closeModal}
        error={error}
      />
    </View>
  );
};

export default TitleScreen;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    marginLeft: 20,
  },
  textArea: {
    marginTop: 10,
    marginBottom: 10,
    height: 150,
    textAlign: 'center',
  },
  inputSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopColor: 'gray',
    borderTopWidth: 1,
  },
});
