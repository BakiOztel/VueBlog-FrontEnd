<template>
  <v-card
    class="mx-auto"
    min-width="500"
    min-height="200"
  >
    <v-card-text>
        <p class="text-h4 text--primary">
            {{ data.todo.text }}
        </p>
      <div>{{ data.text }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    props:["data"]
}
</script>

<style>

</style>