<template>
    
    <div class="sidenav-container">
        <h2>Filter By Tags</h2>
        <ul>
            <li v-for="tag in filterTags" :key="tag.id">
                <router-link :to="{name:'filterTags',params:{tag:tag}}">
                    {{ tag }}
                </router-link>
            </li>
        </ul>
    </div>


</template>

<script>

import { ref } from 'vue';
export default {

    props : ['posts'],
    setup(props){
        
        let alltags = ref([]);
        let filterTags = ref([]);

        props.posts.forEach((post)=>{
            
            post.tags.forEach((tag)=>{
                alltags.value.push(tag);
            })
            alltags.value.push(...post.tags);
        })


        filterTags.value = alltags.value.filter((tag,index,arr)=>{
            return arr.indexOf(tag) === index;
        })

        


        return {filterTags};

    }

}
</script>

<style>
    .sidenav-container{
        padding:10px 0;
        text-align:center;
        background-color:#f4f4f4;
    }
    ul{
        text-align:left;
        list-style:none;
    }
    li{
        padding:4px 0;
        font-weight:bold;
        cursor:pointer;
    }
    li a{
        color:grey;
        text-decoration:none;
        text-transform: uppercase;
        font-weight:bolder;
        letter-spacing:2px;
    }
    li a:hover{
        color:steelblue;
    }
    li a:focus{
        color:steelblue;
    }
</style>