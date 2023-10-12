<template>
    <h1>S'enregistrer pour profiter de touts les fruits</h1>
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email"/>
        <label>Password:</label>
        <input type="password" required v-model="mdp"/>
        <div>
            <button>S'enregistrer</button>
        </div>
    </form>
    <router-link to="/login">Se connecter ?</router-link>
    <p>{{errorLogin}}</p>
</template>
<script>
export default{
    data(){
        return{
            email:"",
            mdp:"",
            errorLogin:""
        }
    },
    methods:{
        async handleSubmit(){
           // console.log(temp);
            try {
                await this.axios.post(
                "/register", {
                login: this.email,
                mdp: this.mdp
                }
                );
              //  console.log(response.data);
               // console.log("is bon ? : "+response.data.succed);
                    this.$store.state.login=true;
                    this.$store.state.admin=false;
                    this.$router.push('/');
                
            } catch (error) {
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
p{
    color: red;
}
</style>