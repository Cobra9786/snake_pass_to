import{r as s,c as i,a as o,g,h as d,v as p,i as f,t as _,j as y,o as c}from"./CRGj1e4D.js";import{_ as h}from"./DlAUqK2U.js";const w=["disabled"],L={key:0},b={__name:"login",setup(x){const t=s(""),r=s(""),a=s(""),m=y(),u=s(!1),v=async()=>{var l;console.log("SELECT TO LOGIN"),a.value="";try{const e=await $fetch("/api/login",{method:"POST",body:{username:t.value,password:r.value}});console.log("LOGGED IN?:: ",e),m.push("/")}catch(e){console.error("Login error:",e),a.value=((l=e==null?void 0:e.data)==null?void 0:l.message)||"An error occurred. Please try again."}finally{u.value=!1}};return(l,e)=>(c(),i("div",null,[e[2]||(e[2]=o("h1",null,"Login",-1)),o("form",{onSubmit:f(v,["prevent"])},[d(o("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>t.value=n),placeholder:"Username",required:""},null,512),[[p,t.value]]),d(o("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>r.value=n),type:"password",placeholder:"Password",required:""},null,512),[[p,r.value]]),o("button",{type:"submit",disabled:u.value},"Login",8,w)],32),a.value?(c(),i("p",L,_(a.value),1)):g("",!0)]))}},O=h(b,[["__scopeId","data-v-ee384c34"]]);export{O as default};
