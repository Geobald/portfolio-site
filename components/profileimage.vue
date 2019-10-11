export
<template>
  <div class="profile-img-container">
    <div>
      <v-img
        :src="require('@/images/profileimage.jpg')"
        aspect-ratio="1"
        class="grey lighten-2 profile-img"
        max-width="300"
        max-height="400"
      ></v-img>
    </div>

    <p class="profile-img-text">
      <b>{{ header }}</b>
    </p>
    <p>{{ subtext }}</p>
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
  margin: 15%
}

.profile-img-container {
  text-align: center
}

.profile-img-text {
  margin-bottom:0px !important;
}
</style>