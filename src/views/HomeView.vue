<template>

  <div class="home">
    <h1>HOme Page</h1>

    <PostLists></PostLists>
  </div>
  
  
</template>

<script>

import PostLists from '../components/PostsList.vue';
export default {

    components : { PostLists },
    setup(){



    }
}
</script>
<style>
.home{
  max-width:1300px;
}


</style>