<template>

    <header>
        <h1>
        Your Projects
        </h1>
        <nav>
            <router-link to="/">
                Home
            </router-link>
            <router-link :to="{name:'createPost'}">
                Create
            </router-link>
        </nav>
  </header>

</template>

<script>


</script>

<style>
header{
  width:100%;
  background-color:steelblue;
  padding:15px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  box-shadow:0 5px 5px rgba(0,0,0,0.2);

  z-index:10;
  position:fixed;
  top:0;
  left:0;
}
header h1{
    margin:0;
    padding:0;
}
header a{
    text-decoration: none;
    color:#fff;
    padding:0 10px;
    font-weight:bolder;
}

</style>