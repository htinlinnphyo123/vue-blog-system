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
            <button class="btn" @click="deletePost">Delete Post</button>
        </div>
        <div v-else>
            <Loader></Loader>
        </div>
    </div>
    
</template>

<script>
    
    import Loader from '../components/Loader.vue';
    import postList from '../composables/postList';
    import { db } from '@/firebase/config';
    import { useRoute } from 'vue-router';
    import { useRouter } from 'vue-router';
    import { doc,deleteDoc } from '@firebase/firestore';
    export default {
        props : ['id'],
        components : {Loader},
        setup(props){

            let route = useRoute();
            let {post,error,load} = postList(route.params.id);
            let router = useRouter();

            load();

            let deletePost =async ()=>{

                let dataref = doc(db,'blogs',props.id);

                await deleteDoc(dataref);

                router.push('/')
                

            }


            return {post,error,deletePost};
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
    .btn{
        width:100%;
        background-color:orange;
        color:#fff;
        border:none;
        padding:15px;
        margin:10px auto;
        cursor:pointer;
    }

</style>