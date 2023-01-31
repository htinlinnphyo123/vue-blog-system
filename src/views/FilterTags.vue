<template>

    <div class="filter-container">
        <div v-if="posts.length>0" class="posts">    
            <div class="layout">
                <div>
                    <div v-if="filterPosts.length>0">
                        <div v-for="post in filterPosts" :key="post.id">
                            <SinglePost :post="post"></SinglePost>
                        </div>
                    </div>
                    <div v-else>
                        <Loader></Loader>
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

    import postLists from '../composables/postLists.js'
    import { computed } from 'vue';
    import SinglePost from '../components/SinglePost.vue';
    import { ref,reactive } from 'vue';
    import TagCloud from '@/components/TagCloud.vue';
    import Loader from '../components/Loader.vue';

    export default {
        components : { SinglePost, TagCloud,Loader },
        props : ["tag"],
        setup(props){
            
            let {posts,error,load} = postLists();
            let noData = ref('There is no data with this tag')
            let filterPosts = reactive([]);
            load();
            filterPosts = computed(()=>{
                return posts.value.filter((post)=>{
                    return post.tags.includes(props.tag)
                })
            })

            return {posts,error,filterPosts,noData};

        }   
    }

</script>

<style>
.filter-container{
    max-width:1300px;
    min-height:100vw;
    margin-top:80px;
}
.error{
    margin-top:100px;
}

</style>