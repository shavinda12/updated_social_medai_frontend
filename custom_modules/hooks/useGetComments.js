import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getPostComments=async(postId)=>{
    try{
        const {data}=await axios.get(`http://192.168.43.137:3000/api/mobile/posts/:${postId}`)
        return data.message
    }catch(error){
        throw new error
    }
    
}


const useGetComments=(postId)=>useQuery({
    queryKey:['commentsArray',postId],
    queryFn:()=>getPostComments(postId)
})

export default useGetComments;