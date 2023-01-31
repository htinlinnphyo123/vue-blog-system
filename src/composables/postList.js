import { doc, getDoc } from 'firebase/firestore';
import {ref} from 'vue'
import {db} from '../firebase/config'


let postList = (id)=>{

    let post = ref(null);
    let error = ref('error');

    let load = async()=>{
        
        try{

            let data = doc(db,"blogs",id);

            let response = await getDoc(data);


            post.value = response.data();
        

            
        }catch(err){
            error.value = err;
        }

    }

    

    return {post,error,load}
    

}


export default postList;