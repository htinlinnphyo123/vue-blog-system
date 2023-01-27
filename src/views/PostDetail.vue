<template>
    
    <div class="post-container">
        <div v-if="post" class="eachPost">
            <h1>{{ post.title }}</h1>
            <p>{{ post.detail }}</p>
            <div class="allTag">
                <div v-for="tag in post.tags" :key="tag.id" class="eachTag">
                    <router-link :to="{name:'filterTags',params:{tag:tag}}">
                        {{ tag }}
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else>
            Waiting to fetch data
            <Loader></Loader>
        </div>
    </div>
    
</template>

<script>
    
    import Loader from '../components/Loader.vue';
    import postList from '../composables/postList';
    import { useRoute } from 'vue-router';
    export default {
        props : ['id'],
        components : {Loader},
        setup(props){

            let route = useRoute();
            let {post,error,load} = postList(route.params.id);

            load();

            return {post,error};
        

        }
    }


</script>

<style>
    .post-container{
        margin-top:80px;
    }
    
    .eachPost{
        text-align:left;
        width:30%;
        padding:15px;
        border-radius:5px;
        box-shadow:0 5px 5px rgba(0,0,0,0.3);
        margin:10px auto;
    }

    .eachPost h1{
        display:inline-block;
        position:relative;
    }
    .eachPost h1::before{
        content: '';
        width:120%;
        height:100%;
        background-color:orange;
        
        position:absolute;
        top:0;
        left:-10%;
        transform:rotateZ(-7deg);
        z-index:-1;
    }
    .allTag{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
    }
    .eachTag{
        box-sizing:border-box;
        margin:10px 3px;
        padding:5px 10px;
        border-radius:5px;
        box-shadow:0 5px 2px rgba(0,0,0,0.3);
    }
</style>