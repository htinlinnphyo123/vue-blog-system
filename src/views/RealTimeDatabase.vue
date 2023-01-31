<template>
    
    <div class="home">
        <div v-if="posts.length>0" class="posts">
            <div class="layout">
                <div>
                    <div v-for="post in posts" :key="post.id">
                        <SinglePost :post="post"></SinglePost>                
                    </div>
                </div>
                <div>
                    <TagCloud :posts="posts"></TagCloud>
                </div>
            </div>
        </div>
    

    </div>  


</template>

<script>
import { db } from '@/firebase/config';
import { collection, onSnapshot, query,orderBy } from '@firebase/firestore';
import TagCloud from '../components/TagCloud.vue';
import { ref } from 'vue';
import SinglePost from '../components/SinglePost.vue';

export default {

    components : {TagCloud,SinglePost},
    setup(){

        let posts = ref([]);
       
        let queryData = query(collection(db,"blogs"),orderBy("timestamp","desc"));

        onSnapshot(queryData,(shots)=>{
                // posts.value = shots.docs.map((shot)=>{
                //     return {id:shot.id,...shot.data()}
                // })

            // shots.docs.forEach((shot)=>{
            //     posts.value.push({id:shot.id,...shot.data()})
            // })

            posts.value = shots.docs.map((shot)=>{
                return {id:shot.id,...shot.data()}
            })

        })


        console.log(posts.value);

        return {posts}
    }



}
</script>

<style>
.home{
    margin-top:100px;
}
.layout{
    display:grid;
    grid-template-columns: 3fr 1fr;
    gap:20px;
}
</style>