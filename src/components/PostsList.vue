<template>

<div class="">
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
    <div v-else>
        <Loader></Loader>
    </div>
</div>


    

</template>

<script>

    import Loader from '../components/Loader.vue';
    import postLists from '../composables/postLists.js';
    import SinglePost from '../components/SinglePost.vue';
    import TagCloud from './TagCloud.vue';
    export default {
        
        components : { SinglePost, Loader, TagCloud },
        setup(){

            let {posts,error,load} = postLists();

            load()

            
            return {posts,error}
            
        }   
    }

</script>

<style>
.layout{
    display:grid;
    grid-template-columns: 3fr 1fr;
    gap:20px;
}

</style>