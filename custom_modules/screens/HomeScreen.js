import {ScrollView, View} from 'react-native';
import AppHeader from '../components/AppHeader';
import Button from '../components/Button';
import Post from '../components/Post';
import {useNavigation} from '@react-navigation/native';
import useGetPosts from '../hooks/useGetPosts';

const Home = () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('CreatePost');
  };

  const {data: postArray, error} = useGetPosts();
  console.log(postArray);

  return (
    <View style={{flex:1,marginBottom:10}}>
      <AppHeader title="Home" />
      <Button title="Create New Post" function={onPress} />
      <ScrollView>
        <View>
          {postArray &&
            postArray.map(post => (
              <Post
                key={post.postId}
                postId={post.postId}
                title={post.title}
                description={post.description}
                comment={post.num_of_comments}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
