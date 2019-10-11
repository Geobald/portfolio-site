export
<template>
  <div class="container">
    <v-card outlined> 
      <v-card-title class="headline">
          <v-icon left>{{ icon }}</v-icon> {{ title }}</v-card-title>
                  <v-divider v-if="underscore"></v-divider>
      <v-card-text>
        <p>{{ text }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["icon", "title", "text","underscore"]
};
</script>

<style scoped>
</style>