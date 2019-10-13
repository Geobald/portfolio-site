<template>
  <v-layout>
    <v-container fluid>
      <v-row>
        <!-- PICTURE CARD -->
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-card outlined height="100%">
            <v-list-item three-line class="text-center">
              <v-list-item-content>
                <div style="padding:20px">
                  <v-avatar size="150">
                    <img :src="require('@/images/profileimage.jpg')" alt="George Baldwin" />
                  </v-avatar>
                </div>

                <v-list-item-title class="headline mb-1">George Baldwin</v-list-item-title>
                <v-list-item-subtitle>Software Developer</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <div class="text-center" style="padding:15px">
              <v-btn text icon color="black" href="https://github.com/Geobald" target="_blank">
                <v-icon>mdi-github-circle</v-icon>
              </v-btn>
              <v-btn
                text
                icon
                color="black"
                href="https://twitter.com/GeorgeBaldwin"
                target="_blank"
              >
                <v-icon>mdi-twitter-circle</v-icon>
              </v-btn>
              <v-btn
                text
                icon
                color="black"
                href="https://www.linkedin.com/in/george-baldwin-04578230"
                target="_blank"
              >
                <v-icon>mdi-linkedin-box</v-icon>
              </v-btn>
            </div>
          </v-card>
        </v-col>

        <!-- PROFILE CARD -->
        <v-col cols="12" xs="12" sm="12" md="8">
          <v-card outlined height="100%">
            <v-card-title class="headline">
              <v-icon left>mdi-account</v-icon>Profile
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p v-html="profiletext"></p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- END ROW -->

        <!-- NEXT ROW -->

        <!-- SKILLS-->
        <v-col cols="12" xs="12" sm="12" md="4">
          <portfoliocard icon="mdi-xml" title="Skills" text underscore="true" />
        </v-col>

        <!-- INFO -->
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-card outlined>
            <v-card-title class="headline">
              <v-icon left>mdi-information-outline</v-icon>Information
            </v-card-title>
            <v-divider/>

            <v-simple-table>
              <tbody>
                <tr>
                  <td>
                    <b>Name:</b>
                  </td>
                  <td>George Baldwin</td>
                </tr>
                <tr>
                  <td>
                    <b>Age:</b>
                  </td>
                  <td>32</td>
                </tr>
                <tr>
                  <td>
                    <b>Position:</b>
                  </td>
                  <td>Developer</td>
                </tr>

                <tr>
                  <td>
                    <b>Nationality:</b>
                  </td>
                  <td>British</td>
                </tr>
                <tr>
                  <td>
                    <b>Location:</b>
                  </td>
                  <td>Brighton, UK</td>
                </tr>

              </tbody>
            </v-simple-table>
          <v-divider/>
            <v-col>
              <code style="width:100%">
                <div>
                  <span style="color:red"> let</span> $x <span style="color:red">=</span><span style="color:blue"> 'georgebaldwin'</span>;
                </div>
                <div>
                  <span style="color:red"> let</span> $y <span style="color:red">=</span><span style="color:blue"> 'me'</span>;
                </div>
                <!-- <div>&nbsp;</div>  -->
                <div><span style="color:purple"> console</span>.<span style="color:blue">log</span>( $x <span style="color:red"> + </span><span style="color:blue"> '@' </span><span style="color:red"> + </span> $y <span style="color:red"> + </span><span style="color:blue">'.com'</span>);
                </div>
              </code>
            </v-col>
          </v-card>
        </v-col>

        <!-- TOOLBOX -->
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-card outlined>
            <v-card-title class="headline">
              <v-icon left>mdi-toolbox-outline</v-icon>Tooling
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p v-html="toolboxtext"></p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import portfoliocard from "@/components/portfoliocard";
import profileimage from "@/components/profileimage";
import portfoliotextservice from "@/components/text/portfoliotextservice";
export default {
  components: {
    portfoliocard,
    profileimage
  },

  data() {
    return {
      profiletext: null,
      toolboxtext: null
    };
  },

  mounted() {
    this.profiletext = portfoliotextservice.getprofiletext();
    this.toolboxtext = portfoliotextservice.gettoolboxtext();
  },

  computed: {
    profiletextresult() {
      return this.profiletext ? this.profiletext : "An error occurred";
    },
    toolboxtextresult() {
      return this.toolboxtext ? this.toolboxtext : "An error occurred";
    }
  }
};
</script>

<style scoped>
</style>