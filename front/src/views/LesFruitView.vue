<template>
  <div class="about">
    <div style="margin-bottom: 20px;">
      <h1>Tous les fruits</h1>
      <p>Vous souhaiter rajouter un fruit ?</p>
      <button @click="handelClick">ajouter</button>
    </div>
    <AllFruits/>
  </div>
</template>
<script>
// @ is an alias to /src
import AllFruits from '@/components/AllFruits.vue'

export default {
  name: 'LesFruitView',
  components: {
    AllFruits
  },
  methods:{
      handelClick(){
        this.$router.push('/DemandeFruit');
      }
    }
}
</script>
<style>
  button{
      background: orange;
      border:0;
      padding: 10px 20px;
      margin-top: 20px;
      color: aliceblue;
      border-radius: 20px;
      cursor: pointer;
  }
</style>
