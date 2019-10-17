<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      color="grey lighten-2"
      fixed
      app
    >
      <profileimage header="George Baldwin" subtext="Software Developer" />
      <v-divider />
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
      <!-- <template v-slot:append>
        <div class="pa-2">
          <span>Made with Vue, Nuxt and Vuetify</span>
        </div>
      </template> -->
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon class="d-lg-none" @click.stop="drawer = !drawer" />
      <div class="page-title">
        <h3 v-text="windowTitleResult"></h3>
      </div>
      <v-spacer />
      <v-chip class="ma-2" label>v2.1.0</v-chip>
    </v-app-bar>
    <v-content>
      <v-container style="margin-left:0px">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import profileimage from "@/components/profileimage";

export default {
  components: {
    profileimage
  },

  data() {
    return {
      profileimage,
      clipped: false,
      drawer: false,
      fixed: false,
      windowWidth: 0,
      items: [
        {
          icon: "mdi-account",
          title: "Profile",
          to: "/"
        },
        {
          icon: "mdi-file-document-outline",
          title: "Resume",
          to: "/resume"
        },
        {
          icon: "mdi-code-braces",
          title: "Projects",
          to: "/projects"
        },
        {
          icon: "mdi-post-outline",
          title: "Blog",
          to: "/blog"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: null
    };
  },
  mounted() {
    // Hide Drawer menu on mobile devices by default
    this.windowWidth = window.innerWidth;
    this.windowWidth < 960 ? (this.drawer = false) : (this.drawer = true);
  },
  computed: {
    windowTitleResult() {
      var routeName = this.$nuxt.$route.name;
      switch (routeName) {
        case "index":
          return "Profile";
          break;

        case "resume":
          return "Resume";
          break;

        case "projects":
          return "Projects";
          break;

        case "blog":
          return "Blog";
          break;

        default:
          return routeName ? routeName : "George Baldwin | Software Developer";
      }
    }
  }
};
</script>