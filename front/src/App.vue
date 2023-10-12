<template>
  <nav v-if="getLogin">
    <router-link to="/">Home</router-link> |
    <router-link to="/LesFruit">Les Fruits</router-link> |
    <span @click="deco"> Déconecter User </span>
  </nav>
  <nav v-if="getAdmin">
    <router-link to="/">Home</router-link> |
    <router-link to="/LesFruit">Les Fruits</router-link> |
    <span @click="deco"> Déconecter Admin </span> |
    <router-link to="/AValider">Fruit a valider</router-link> |
    <router-link to="/DemandeFruit">Insérer un Fruit</router-link> 
    
    
  </nav>
   <nav v-if="getAnomym">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </nav>
  <router-view></router-view>
</template>
<script>
export default {
    name: 'App',
    data(){
        return {
      }
    },
    methods:{
      deco(){
        this.$store.state.login=false;
        this.$store.state.admin=false;
        this.$router.push('/');
      }
    },
    computed:{
      getLogin(){
        return this.$store.state.login && !this.$store.state.admin;
        
      },
      getAdmin(){
        return this.$store.state.admin && this.$store.state.login;
      },
      getAnomym(){
        return !this.$store.state.admin && !this.$store.state.login;
      }
      
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav span{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: underline;
  cursor: pointer;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
