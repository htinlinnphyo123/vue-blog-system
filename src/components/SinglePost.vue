<template>

    <div class="post-container">
        <router-link :to="{name:'postdetail',params:{id:post.id}}">
            <h3>{{ post.title }}</h3>
        </router-link>
        <p>{{ filterDetail  }}</p>
        <div class="allTag">
            <div v-for="tag in post.tags" :key="tag.id" class="eachTag">
                <router-link :to="{name:'filterTags',params:{tag:tag}}">
                    {{ tag }}
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>

    import {ref,computed} from 'vue';
    export default {
        props : ['post'],
        setup(props){

            let getDetails = ref(props.post.detail);

            let filterDetail = computed(()=>{
                return getDetails.value.substring(0,200)+'.....';
            })

            return {filterDetail}
        }            
    }

</script>

<style scoped>
    .post-container{
        text-align:left;
        padding:0 20px 10px 0;        
        margin:10px 35px;
        border-bottom:3px solid #f4f4f4;
    }
    .post-container h3{
        display:inline-block;
        position:relative;
    }
    .post-container h3::before{
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
    .allTag a{
        text-decoration: none;
        cursor:pointer;
    }
    .eachTag{
        box-sizing:border-box;
        margin:10px 3px;
        padding:5px 10px;
        border-radius:5px;
        box-shadow:0 5px 2px rgba(0,0,0,0.3);
    }
</style>