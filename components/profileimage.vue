export
<template>
  <div class="profile-img-container">
    <div style="padding:20px">
      <v-avatar size="150">
        <img :src="require('@/images/profileimage.jpg')" alt="George Baldwin" />
      </v-avatar>
    </div>

    <div style="padding-bottom:20px">
      <v-list-item-title class="headline mb-1">{{header}}</v-list-item-title>
      <v-list-item-subtitle>{{subtext}}</v-list-item-subtitle>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "subtext"]
};
</script>

<style>
.profile-img {
  border-radius: 90%;
  margin: 15%;
}

.profile-img-container {
  text-align: center;
}

.profile-img-text {
  margin-bottom: 0px !important;
}
</style>