import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { ref } from 'vue';
import {db} from '../firebase/config'


let postLists = ()=>{
    let posts = ref([]);
    let error = ref('');


    let load = async()=>{
        try{

            let getDatas = collection(db,"blogs");
            getDatas = query(getDatas,orderBy("timestamp","asc"));
            getDatas = await getDocs(getDatas);

            getDatas.forEach((data)=>{
                posts.value.push({id:data.id,...data.data()})
            })

            // console.log(posts.value);
            
        }catch(err){
            error.value = err.message;
        }

    }   

    // load()

    return {posts,error,load};
}

export default postLists;