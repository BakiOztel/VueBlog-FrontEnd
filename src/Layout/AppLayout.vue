<template>
  <v-container>
      <v-row>
        <HeaderVue />
      </v-row>
      <v-row class="d-flex justify-center">
        <slot/>
      </v-row>
   </v-container>
    
</template>

<script>
import HeaderVue from '@/components/Header.vue'
export default {
    name:"AppLayout",
    components:{
        HeaderVue
    }
}
</script>

<style>

</style>