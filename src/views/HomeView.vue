<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <UploadForm v-if="getUser.token !==null"  />
      <v-container v-else class="main_div_else" >
        <v-row class="d-flex justify-center h-50">
          <div>Sign in to share your completed work</div>
        </v-row>
        <v-row class="d-flex justify-center h-50">
          <router-link to="/login">
          <v-btn>
          Login
           </v-btn>
      </router-link>
        </v-row>
      </v-container>
    </v-row>
    <v-row class="mb-10" v-for="(item,index) in getBlog" :key="index">
      <BlogCard  :data="item"  />
      {{ console.log(getBlog) }}
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

import UploadForm from '@/components/UploadForm.vue';
import { mapGetters } from 'vuex';
import store from '@/store/index.js';
import BlogCard from '@/components/BlogCard.vue';
export default defineComponent({
  name: 'HomeView',
  setup(){
    store.dispatch("getBlogItems");
  },
  components: {
    UploadForm,
    BlogCard
  },
  computed:mapGetters(["getUser","getBlog"])
});
</script>

<style scoped>
 .main_div_else{
  min-height: 200px;
 }
</style>
