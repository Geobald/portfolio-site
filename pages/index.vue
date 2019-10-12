<template>
  <v-layout>
    <v-container fluid>
      <v-row>
        <v-col>
          <div class="container">
            <v-card outlined>
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
          </div>
        </v-col>

        <v-col>
        
  <div class="container">
    <v-card outlined> 
      <v-card-title class="headline">
          <v-icon left>mdi-account</v-icon> Profile</v-card-title>
                  <v-divider></v-divider>
      <v-card-text>
        <p v-html="profiletext"></p>
      </v-card-text>
    </v-card>
  </div>



        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <portfoliocard icon="mdi-xml" title="Skills" text underscore="true" />
        </v-col>
        <v-col>
          <portfoliocard
            icon="mdi-information-outline"
            title="Info"
            text="Test 123"
            underscore="true"
          />
        </v-col>
        <v-col>
          <portfoliocard
            icon="mdi-toolbox-outline"
            title="Tooling"
            text="Test 123"
            underscore="true"
          />
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
      profiletext: null
    };
  },

   mounted() {
    this.profiletext = portfoliotextservice.getprofiletext()
  },

  computed:{
    profiletextresult() {
       return this.profiletext ? this.profiletext : 'An error occurred';
    }
  }
};
</script>

<style scoped>
</style>