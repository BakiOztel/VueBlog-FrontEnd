<template>
  <v-app>
    <v-main>
      <component :is="$route.meta.layout">
        <router-view/>
      </component>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
