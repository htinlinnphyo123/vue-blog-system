<template>


    <form @submit.prevent="createProject">
        <h2>Create Post</h2>
        <div class="form-group">
            <label>Title</label>
            <input type="text" v-model="title">
        </div>
        <div class="form-group">
            <label>Detail</label>
            <input type="text" v-model="detail">
        </div>
        <div class="form-group">
            <label>Tag(Enter to add your skill)</label>
            <input type="text" v-model="tag" @keydown.enter.prevent="addTag">
        </div>
        <div class="allTag">
            <div v-for="tag in tags" class="eachTag" :key="tag.id">
                {{ tag }} 
            </div>
        </div>   
        <button>Create Project</button>
    </form>

</template>

<script>

    import { ref } from 'vue';
    import {useRouter} from 'vue-router'
    import { db } from '@/firebase/config';
    import { collection, doc, setDoc, serverTimestamp } from '@firebase/firestore';

    export default {
        setup(){

            let title = ref('');
            let detail = ref('');
            let tag = ref('');
            let tags = ref([]);
            let router = useRouter();

            let addTag = ()=>{

                if(!tags.value.includes(tag.value)){
                    tags.value.push(tag.value);
                }else{
                    alert('Already has tag');
                }
                tag.value = '';
            }


            let createProject = async()=>{

                let data = {
                    title : title.value,
                    detail : detail.value,
                    tags : tags.value,
                    timestamp : serverTimestamp()
                }

                let getData = doc(collection(db,"blogs"));

                await setDoc(getData,data);

                router.push('/')

            }

            return {title,detail,tag,tags,createProject,addTag}
        }
    }

</script>

<style scoped>
    form{
        width:500px;
        border-radius:5px;
        box-shadow:0 2px 5px rgba(0,0,0,0.3);
        padding:20px 15px;
        margin:80px auto;
        box-sizing:border-box;
    }
    .form-group{
        margin-bottom:20px;
    }
    label{
        display:block;
        text-align:left;
        margin-bottom:5px;
    }
    input{
        font-size:20px;
        width:95%;
        display:block;
        padding:10px;
    }
    button{
        width:100%;
        background-color:steelblue;
        border-radius:5px;
        color:#fff;
        border:none;
        padding:10px 0;
        cursor:pointer;
    }
    .allTag{
        display:flex;
        align-items:center;
        flex-wrap:wrap;
    }
    .eachTag{
        box-sizing:border-box;
        display:inline;
        margin:10px 3px;
        padding:5px 10px;
        border-radius:5px;
        box-shadow:0 5px 2px rgba(0,0,0,0.3);
    }

</style>