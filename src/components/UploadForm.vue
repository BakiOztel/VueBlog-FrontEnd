<template>
    <v-form ref="form" class="formBlog " @submit.prevent="onSubmit">
        <v-container class="border rounded-lg">
            <v-row>
                <v-textarea label="doing the task" v-model="formData.text">
                </v-textarea>
                <span v-for="error in v$.text.$errors" :key="error.$uid">
                {{ error.$message }}
                </span>
            </v-row>
            <v-row>
                <v-combobox

                    v-model="formData.todoText"
                    label="Todo List"
                    :items="getTodo.map(x=>x.text)"
                    :item-value="getTodo.map(x=>x.id)"
                >
                </v-combobox>
                <span v-for="error in v$.todoText.$errors" :key="error.$uid">
                {{ error.$message }}
                </span>
                {{ console.log(getTodo) }}
            </v-row>
            <v-row>
                <v-btn type="submit" class="mx-auto">
                    paylaş
                </v-btn>
            </v-row>
        </v-container>

    </v-form>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import store from '@/store/index.js';
import { required } from '@vuelidate/validators';
import { mapGetters } from 'vuex';
import { computed, reactive } from 'vue';

export default {
    name:"UploadForm",
    setup(){
        const rules =computed(()=>{
            return {
                text:{required},
                todoText:{required}
            }
        })
        const formData=reactive({
        text:"",
        todoText:"",
      });
      const v$=useVuelidate(rules,formData);
      const onSubmit =async ()=>{
        const result = await v$.value.$validate();
        if(result){
          await store.dispatch("CreateBlog",formData);
        //   this.$refs.form.reset()
        }else{
          alert("Incorrect Form");
        }
      }
        store.dispatch("getTodoItems");
      return{
        formData,
        onSubmit,
        v$
      }
    },
    computed:mapGetters(["getTodo"]),
}
</script>

<style>
.formBlog{
    width: 550px;
}


</style>