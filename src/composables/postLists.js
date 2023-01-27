import { ref } from 'vue';


let postLists = ()=>{
    let posts = ref(null);
    let error = ref('');


    let load = async()=>{
        try{

            await new Promise((resolve,reject)=>{
                return setTimeout(resolve,2000);
            })
            
            let response = await fetch('http://localhost:3000/posts');

            if(response.status===404){
                throw new Error('404 page not found');
            }

            let data = await response.json();

            posts.value = data;

            
        }catch(err){
            error.value = err.message;
        }

    }   

    return {posts,error,load};
}

export default postLists;