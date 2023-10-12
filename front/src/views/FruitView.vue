<template >
    <div  v-if="editFalse" style="text-align: -webkit-center;">
    <div class="col-2" style="border-radius: 15px;max-width: max-content;padding: 20px;
    background-color: #f4f4f4; align-items: center;">
        <img :src="post.lien_img" :alt="post.nom" height ="300" width="300"/>
        <div class="row-3" style="padding-left: 20px;">
            <h1>{{post.nom}}</h1>
            <p style="padding: 10px;">{{post.description}}</p>
            <span>poid:{{post.poid}} g</span>
        </div>
    </div>
    </div> 
    <div v-else>
        <img :src="post.lien_img" :alt="post.nom" height ="300" width="300"/>
        <form @submit.prevent="handleSubmit">
                
                <label>Url image:</label>
                <input type="text" v-model="lien_img" /><br/><br/>
                <label>Nom:</label>
                <input type="text" v-model="nom" /><br/><br/>
                <label style="padding-bottom:20px;">Description:</label><br/><br/>
                <textarea type="textarea" style="min-width: 300px;max-width: 400px; min-height:50px;max-height: 100px;" v-model="description" ></textarea><br/><br/>
                <label>Poid:</label>
                <input type="text" v-model="poid" /> g
                <div>
                    <button>Mise à jour</button>
                </div>
        </form>
        <button style="background-color: red !important;" @click="delData()">Supprimer</button>
        <p id="msg">{{msgUpdate}}</p>
    </div>
</template>
<script>
export default {
    name: 'FruitView',
    data(){
        return {
        post:this.Fruit(),
        nom:"n",
        lien_img:"l",
        description:"d",
        poid:"p",
        msgUpdate:""
    }
    },
    methods: {
        async Fruit(){
            const temp = this.$route.query.Id;
           // console.log(temp);
            try {
                const response = await this.axios.get(
                "/fruit/"+temp
                );
                console.log(response.data);
                this.post=response.data[0];
                this.nom=response.data[0].nom;
                this.lien_img=response.data[0].lien_img;
                this.description=response.data[0].description;
                this.poid=response.data[0].poid;
                if(response.data.length==0){
                    this.$router.push('/page-404');
                }
                
            } catch (error) {
                console.log(error);
            }
        }, async handleSubmit(){
            this.msgUpdate="";
            const temp = this.$route.query.Id;
           // console.log(temp);
            try {
                await this.axios.put(
                "/fruit/"+temp, {
                    nom:this.nom,
                    lien_img:this.lien_img,
                    description:this.description,
                    poid:this.poid
                }
                );
                this.msgUpdate="Fruit mise à jour";
            } catch (error) {
                console.log(error);
            }
        },
    async delData(){
            try {
                const temp = this.$route.query.Id;
                const response = await this.axios.delete(
                "/fruit/"+temp
                );
                this.$router.push("/LesFruit");
                console.log( response.data);
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed:{
        editFalse(){
            return !this.$store.state.admin;
        }
    }
}
</script>
<style scoped>
.col-2 {
    display: grid;
    grid-template-columns: repeat(2,auto);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-content:center;
}
.row-5{
display: grid;
grid-template-rows: repeat(5);

grid-column-gap: 0px;
grid-row-gap: 0px;
justify-content:center;
}
form{
    max-width: 420px;
    margin:30px auto;
    background: white;
    text-align: center;
    border: rgb(201, 201, 201) solid 1px;
    padding: 40px;
    border-radius: 10px;
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
#msg{
    color: green;
}
</style>