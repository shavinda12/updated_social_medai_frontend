import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const getPosts=async()=>{
    try{
        const {data}=await axios.get('http://192.168.43.137:3000/api/mobile/posts/')
        return  data.message
    }catch(error){
        throw new error
    }
}


const useGetPosts=()=>useQuery({
    queryKey:['posts'],
    queryFn:getPosts
})

export default useGetPosts;