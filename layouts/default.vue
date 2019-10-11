<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <div class="profile-picture">
        <div>
          <img src="/images/profile.jpg" alt="George Baldwin" />
        </div>

        <p>George Baldwin</p>
        <p>Software Developer</p>
      </div>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer" />
      <!-- <v-spacer /> -->
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Profile",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Resume",
          to: "/resume"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Projects",
          to: "/projects"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "George Baldwin"
    };
  }
};
</script>

<style>
</style>
