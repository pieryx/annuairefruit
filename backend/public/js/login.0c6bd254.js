"use strict";(self["webpackChunkfruit"]=self["webpackChunkfruit"]||[]).push([[535],{7308:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(3396),a=n(9242),o=n(7139);const l=e=>((0,r.dD)("data-v-170e3b0c"),e=e(),(0,r.Cn)(),e),i=l((()=>(0,r._)("h1",null,"Se connecter facilement en un instant",-1))),s=l((()=>(0,r._)("label",null,"Email:",-1))),u=l((()=>(0,r._)("label",null,"Password:",-1))),d=l((()=>(0,r._)("div",null,[(0,r._)("button",null,"Connecter")],-1))),c=(0,r.Uk)("S'enregister ?");function m(e,t,n,l,m,p){const h=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("form",{onSubmit:t[2]||(t[2]=(0,a.iM)(((...e)=>p.handleSubmit&&p.handleSubmit(...e)),["prevent"]))},[s,(0,r.wy)((0,r._)("input",{type:"email",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>m.email=e)},null,512),[[a.nr,m.email]]),u,(0,r.wy)((0,r._)("input",{type:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>m.mdp=e)},null,512),[[a.nr,m.mdp]]),d],32),(0,r.Wm)(h,{to:"/enregistrer"},{default:(0,r.w5)((()=>[c])),_:1}),(0,r._)("p",null,(0,o.zw)(m.errorLogin),1)],64)}var p={data(){return{email:"",mdp:"",errorLogin:""}},methods:{async handleSubmit(){try{const e=await this.axios.post("/login",{login:this.email,mdp:this.mdp});console.log(e.data),console.log("is bon ? : "+e.data.succed),e.data.succed?(this.errorLogin="",this.$store.state.login=e.data.succed,this.$store.state.admin=e.data.admin,this.$router.push("/")):this.errorLogin="login ou mot de passe incorrect"}catch(e){console.log(e)}}}},h=n(89);const g=(0,h.Z)(p,[["render",m],["__scopeId","data-v-170e3b0c"]]);var b=g}}]);
//# sourceMappingURL=login.0c6bd254.js.map