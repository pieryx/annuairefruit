<template>
    <h1 v-if="!this.$store.state.admin">Faire votre demande d'ajout de fruit</h1>
    <h1 v-if="this.$store.state.admin">Ajouter un nouveau fruit</h1>

    <form @submit.prevent="handleSubmit">

        <div>
            <label>Url image:</label>
            <input type="text" v-model="lien_img" /><br />
            <label>preview image</label>
            <img  v-if= "lien_img!=undefined" :src="lien_img" alt="" height ="300" width="300"/>
            <img  v-else :src="noneimage" alt="default image" height ="300" width="300"/>
            <label>Nom:</label>
            <input type="text" v-model="nom" /><br />
            <label>Description:</label>
            <input type="text" v-model="description" /><br />
            <label>Poid:</label>
            <input type="text" v-model="poid" /> g
        </div>
        <div>
            <button v-if="!this.$store.state.admin">Faire demande</button>
            <button v-if="this.$store.state.admin">insérer</button>
        </div>
    </form>
    <p id="msg">{{ msgInsert }}</p>
</template>
<script>

import noneimage from "../assets/default.jpg"

export default {
    name: 'DemandeFruitView',
    data() {
        return {
            msgInsert: "",
            noneimage: noneimage
        }
    },
    methods: {
        async handleSubmit() {
            this.msgInsert = "";
            // console.log(temp);
            try {
                await this.axios.post(
                    "/fruit/", {
                    nom: this.nom,
                    lien_img: this.lien_img,
                    description: this.description,
                    poid: this.poid,
                    verif: this.$store.state.admin

                }
                );
                if (this.$store.state.admin) {
                    this.msgInsert = "Fruit bien insérer";
                } else {
                    this.msgInsert = "Votre demande à été pris en compte";
                }
            } catch (error) {
                this.msgInsert = error;
                console.log(error);
            }
        }
    }
}
</script>
<style scoped>
form{
    max-width: 420px;
    margin:30px auto;
    background: white;
    text-align: center;
    border: rgb(201, 201, 201) solid 1px;
    padding: 40px;
    border-radius: 10px;
}
label{
    color: grey;
    display: block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}
input{
    padding:10px 6px;
    box-sizing: border-box;
    border:none;
    border-bottom: 1px solid rgb(189, 189, 189);
    color: black;

}
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