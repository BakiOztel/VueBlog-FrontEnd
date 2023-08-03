<template>
  <v-form @submit.prevent="onSubmit">
   <v-container class="RegisterForm">
     <v-row>
       <v-text-field v-model="formData.username"  label="username">
       </v-text-field>
       <span v-for="error in v$.username.$errors" :key="error.$uid">
         {{ error.$message }}
       </span>
     </v-row>
     <v-row>
       <v-text-field v-model="formData.password"  label="password">
       </v-text-field>
       <span v-for="error in v$.password.$errors" :key="error.$uid">
           {{ error.$message }}
       </span>
     </v-row>
     <v-row>
       <v-text-field v-model="formData.confirmPassword"  label="confirmPassword">
       </v-text-field>
       <span v-for="error in v$.confirmPassword.$errors" :key="error.$uid">
           {{ error.$message }}
       </span>
     </v-row>
     <v-row class="d-flex justify-center">
       <v-btn type="submit">
         Register
       </v-btn>
     </v-row>
   </v-container>
  </v-form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { required,minLength ,sameAs} from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import store from '@/store/index.js';
import router from '@/router/index.js';
export default {
   name:"LoginView",
   setup(){
     
     const rules = computed(()=>{
       return{
         username:{required},
         password:{required,minLength:minLength(5)},
         confirmPassword:{required,
          sameAs:sameAs(formData.password),
        },
       }
     })

     const formData=reactive({
       username:"",
       password:"",
       confirmPassword:"",
     });

     const v$=useVuelidate(rules,formData);


     const onSubmit =async ()=>{
       const result = await v$.value.$validate();
       if(result){
         const value={
           Username:formData.username,
           Password:formData.password
          }
          try {
            await store.dispatch("createUser",value);
            router.push({path:"/login"});
          } catch (error) {
            console.log(error);
          }
       }else{
         alert("error");
       }
     }
     return {
       onSubmit,
       formData,
       v$
     }
   }
}
</script>

<style>
.RegisterForm{
 width: 500px;
}
</style>