<template>
 <h1>Tous les fruits qui non pas étais controler!</h1>
<div class="parent">

    <div style="background-color: #f4f4f4;margin: 5px;border-radius: 10px;" v-for="post in posts" v-bind:key="post.id">
        <router-link :to="{ path: '/fruit', query: { Id: post.id }}" style="text-decoration: none; color: inherit;">
            <h2 style="text-align: center;text-decoration: none;">{{ post.nom }}</h2>
            <img  v-if= "post.lien_img!=undefined" :src="post.lien_img"  :alt="post.nom" height ="100" width="100" style="margin-bottom: 20px;"/>
            <img  v-else :src="noneimage" alt="default image" height ="100" width="100" style="margin-bottom: 20px;"/>
        </router-link>
        <br/><br/>
        <button id="bo" @click="aceptData(post.id)">Oui</button><button id="bn" @click="delData(post.id)">Non</button>
    </div>

</div>
</template>

<script>
import noneimage from "../assets/default.jpg"
export default {
    name: 'AllFruits',
    data(){
        return {
            posts:this.getData(),noneimage:noneimage
        }
    },
    methods: {
        async getData() {
            try {
                const response = await this.axios.post(
                "/fruit",{verif:"0"}
                );
                // JSON responses are automatically parsed.
                this.posts = response.data;
                console.log( response.data);
            } catch (error) {
                console.log(error);
            }
        }, 
        async delData(id){
            try {
                const response = await this.axios.delete(
                "/fruit/"+id
                );
                this.getData();
                console.log( response.data);
            } catch (error) {
                console.log(error);
            }

        },
        async aceptData(id){
            try {
                const response = await this.axios.put(
                "/fruit/"+id, {verif:"1"}
                );
                this.getData();
            console.log( response.data);
            } catch (error) {
                console.log(error);
            }

        }
    }
}
</script>

<style scoped>

@media screen  and (min-width: 800px){
  .parent {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    justify-content:center;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
@media screen  and (max-width: 799px){
  .parent {
    display: grid;
    grid-template-columns: repeat(3, 200px);
    justify-content:center;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
@media screen  and (max-width: 600px){
  .parent {
    display: grid;
    grid-template-columns: repeat(2, 200px);
    justify-content:center;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
@media screen  and (max-width: 400px){
  .parent {
    display: grid;
    grid-template-columns: repeat(1, 200px);
    justify-content:center;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
}
#bo{
    background: green;
    border:0;
    padding: 10px 20px;
    margin-right:10px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: aliceblue;
    border-radius: 20px;
    cursor: pointer;
}
#bn{
    background: red;
    border:0;
    padding: 10px 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: aliceblue;
    border-radius: 20px;
    cursor: pointer;
}
</style>