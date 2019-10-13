<template>
  <v-app>

    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
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
    </v-navigation-drawer>
     <!-- class="d-lg-none" -->
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="page-title">
        <h2>Profile</h2>
      </div>
      <!-- <v-spacer /> -->
    </v-app-bar>

    <v-content>
      <v-container style="margin-left:0px">
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
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
  }
};
</script>