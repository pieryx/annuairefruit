"use strict";(self["webpackChunkfruit"]=self["webpackChunkfruit"]||[]).push([[77],{6905:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(3396),l=r(9242),i=r(7139);const a=e=>((0,n.dD)("data-v-60a1ad70"),e=e(),(0,n.Cn)(),e),u=a((()=>(0,n._)("h1",null,"S'enregistrer pour profiter de touts les fruits",-1))),o=a((()=>(0,n._)("label",null,"Email:",-1))),s=a((()=>(0,n._)("label",null,"Password:",-1))),d=a((()=>(0,n._)("div",null,[(0,n._)("button",null,"S'enregistrer")],-1))),p=(0,n.Uk)("Se connecter ?");function m(e,t,r,a,m,c){const h=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[u,(0,n._)("form",{onSubmit:t[2]||(t[2]=(0,l.iM)(((...e)=>c.handleSubmit&&c.handleSubmit(...e)),["prevent"]))},[o,(0,n.wy)((0,n._)("input",{type:"email",required:"","onUpdate:modelValue":t[0]||(t[0]=e=>m.email=e)},null,512),[[l.nr,m.email]]),s,(0,n.wy)((0,n._)("input",{type:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=e=>m.mdp=e)},null,512),[[l.nr,m.mdp]]),d],32),(0,n.Wm)(h,{to:"/login"},{default:(0,n.w5)((()=>[p])),_:1}),(0,n._)("p",null,(0,i.zw)(m.errorLogin),1)],64)}var c={data(){return{email:"",mdp:"",errorLogin:""}},methods:{async handleSubmit(){try{await this.axios.post("/register",{login:this.email,mdp:this.mdp}),this.$store.state.login=!0,this.$store.state.admin=!1,this.$router.push("/")}catch(e){console.log(e)}}}},h=r(89);const f=(0,h.Z)(c,[["render",m],["__scopeId","data-v-60a1ad70"]]);var _=f}}]);
//# sourceMappingURL=enregistrer.4a01d0f0.js.map