<template>
   <v-form @submit.prevent="onSubmit">
    <v-container class="loginForm">
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
      <v-row class="d-flex justify-center">
        <v-btn type="submit">
          Login
        </v-btn>
      </v-row>
    </v-container>
   </v-form>
</template>

<script>
// import { useField, useForm } from 'vee-validate'
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, reactive } from 'vue';
import store from '@/store/index.js';
import router from '@/router/index.js';
export default {
    name:"LoginView",
    setup(){
      
      const rules = computed(()=>{
        return{
          username:{required},
          password:{required}
        }
      })

      const formData=reactive({
        username:"",
        password:""
      });

      const v$=useVuelidate(rules,formData);


      const onSubmit =async ()=>{
        const result = await v$.value.$validate();
        if(result){
          await store.dispatch("loginUser",formData);
          router.push({path:"/"});
          
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
.loginForm{
  width: 500px;
}
</style>