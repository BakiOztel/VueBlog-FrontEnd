<template>
  <v-app-bar>
    <v-app-bar-title >
      <router-link to="/">
        BlogSite
      </router-link>
    </v-app-bar-title>
    <template v-if="getUser.token ===null">
        <router-link to="/login">
          <v-btn>
          Login
      </v-btn>
      </router-link>
      <router-link to="/register">
        <v-btn>
          Register
        </v-btn>
      </router-link>
    </template>
    <template v-else>
      <v-btn @click="onClick">
          Logout
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
import store from '@/store/index.js'
import { mapGetters } from 'vuex'
export default {
  setup(){
    const onClick=()=>{
      store.commit("logoutUser")
    }
    return {
      onClick
    }
  },
  computed:mapGetters(["getUser"])
}
</script>

<style>

</style>