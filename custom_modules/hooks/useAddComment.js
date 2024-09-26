import {useMutation, useQueryClient} from '@tanstack/react-query';
import axios from 'axios';

const useAddComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newComment, postId) =>
      axios
        .post('http://192.168.43.137:3000/api/mobile/posts/addComment', {
          newComment,
          postId,
        })
        .then(res => res.data),
    onSuccess: (backendResult, newPostComment) => {
      queryClient.invalidateQueries(['commentsArray', newPostComment.postId]);
      queryClient.invalidateQueries(['posts']);
    },
  });
};
export default useAddComment;
