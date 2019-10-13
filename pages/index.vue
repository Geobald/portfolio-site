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

        <!-- SKILLS-->
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-card outlined>
            <v-card-title class="headline">
              <v-icon left>mdi-xml</v-icon>Skills
            </v-card-title>
            <v-divider></v-divider>

            <v-card-text>
              <v-col style="color:purple">
                <v-icon color="purple">mdi-language-csharp</v-icon><b> .NET</b> 
                <v-progress-linear v-model="csharp" color="purple" height="25" reactive></v-progress-linear>
              </v-col>
              <v-col style="color:grey">
                <v-icon color="grey">mdi-folder-open</v-icon><b> FileMaker</b>
                <v-progress-linear v-model="filemaker" color="grey" height="25" reactive></v-progress-linear>
              </v-col>
              <v-col style="color:blue">
                <v-icon color="blue">mdi-language-html5</v-icon><b> HTML5</b>
                <v-progress-linear v-model="html" color="blue" height="25" reactive></v-progress-linear>
              </v-col>
              <v-col style="color:orange">
                <v-icon color="orange">mdi-language-css3</v-icon><b> CSS3</b>
                <v-progress-linear v-model="css" color="orange" height="25" reactive></v-progress-linear>
              </v-col>
              <v-col style="color:red">
                <v-icon color="red">mdi-language-javascript</v-icon><b> Javascript</b>
                <v-progress-linear v-model="javascript" color="red" height="25" reactive></v-progress-linear>
              </v-col>
              <v-col style="color:green">
                <v-icon color="green">mdi-vuejs</v-icon><v-icon color="green"></v-icon><b> Vue.js and Vuetify</b>
                <v-progress-linear v-model="vue" color="green" height="25" reactive></v-progress-linear>
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- INFO -->
        <v-col cols="12" xs="12" sm="12" md="4">
          <v-card outlined>
            <v-card-title class="headline">
              <v-icon left>mdi-information-outline</v-icon>Information
            </v-card-title>
            <v-divider />

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
            <v-divider />
            <v-col>
              <code style="width:100%">
                <div>
                  <span style="color:red"> let</span> $x<span style="color:red">=</span><span style="color:blue">'georgebaldwin'</span>;
                </div>
                <div>
                  <span style="color:red"> let</span> $y<span style="color:red">=</span><span style="color:blue">'me'</span>;
                </div>
                <!-- <div>&nbsp;</div>  -->
                <div>
                  <span style="color:purple"> console</span>.<span style="color:blue">log</span>( $x<span style="color:red">+</span><span style="color:blue">'@'</span><span style="color:red">+</span> $y<span style="color:red">+</span><span style="color:blue">'.com'</span>);
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
      toolboxtext: null,
      csharp: 98,
      filemaker: 97,
      html: 95,
      css: 85,
      javascript: 75,
      vue:65
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