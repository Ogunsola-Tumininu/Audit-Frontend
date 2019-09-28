<template>
  <div>
    <nav>
        <ul>
            <li class="pull-left" style="font-size: 2em; color: black; font-weight: bold; f"><router-link to="/" exact >KMUS</router-link></li>
            <span style="font-size: 2.5em; margin-top: 0.6em; margin-right: 20px; color: white" class="glyphicon glyphicon-user form-control-feedback"></span>
            <!-- <li><router-link to="/add"  exact >Add a New Blog</router-link></li> -->
        </ul>

    </nav>
  </div>
</template>

<script>


export default{


  data() {
    return {

    }

  },

  methods: {

  }
}
</script>

<style scoped>

ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}

li{
    display:inline-block;
    margin: 0 10px;
}

a{
    color:black;

    text-decoration: none;
    padding: 6px 8px;
    border-radius: 7px;
}
nav{
    background: rgb(255, 230, 0);
    padding: 14px 0;
    height: 70px;
}

/* .router-link-active{
      background: #eee;
      color: #444;
} */
</style>
