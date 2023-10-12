<template>
<h1>Se connecter facilement en un instant</h1>
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email"/>
        <label>Password:</label>
        <input type="password" required v-model="mdp"/>
        <div>
            <button>Connecter</button>
        </div>
    </form>
    <router-link to="/enregistrer">S'enregister ?</router-link>
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
                const response = await this.axios.post(
                "/login", {
                login: this.email,
                mdp: this.mdp
                }
                );
                console.log(response.data);
                console.log("is bon ? : "+response.data.succed);
                if(response.data.succed){
                    this.errorLogin="";
                    this.$store.state.login=response.data.succed;
                    this.$store.state.admin=response.data.admin;
                    this.$router.push('/');
                }else{
                    this.errorLogin="login ou mot de passe incorrect";
                }
                
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