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
                <v-btn text icon color="black">
                  <v-icon>mdi-github-circle</v-icon>
                </v-btn>
                <v-btn text icon color="black">
                  <v-icon>mdi-twitter-circle</v-icon>
                </v-btn>
                <v-btn text icon color="black">
                  <v-icon>mdi-linkedin-box</v-icon>
                </v-btn>
              </div>
            </v-card>
          </div>
        </v-col>

        <v-col>
          <portfoliocard
            icon="mdi-account"
            title="Profile"
            :text="portfolioText"
            underscore="true"
          />
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

export default {
  components: {
    portfoliocard,
    profileimage
  },

  data() {
    return {
      portfolioText:
        "Microsoft Certified Software Developer (MCSA, MCSD)currently involved with developing Sky Media's set of self-serve ad management and campaign analytics platforms, allowing users to plan, evaluate and optimize effectiveness across Digital, VoD, Broadcast TV, Addressable TV and Programmatic, all within an AGILE/SCRUM based environment. I am an enthusiastic, dedicated and learning agile person who loves building and sustaining relationships with clientele, as well as a wide range of practical Skill sets in both IT and administration as well as Music Composition. I enjoy working as part of a team but can take ownership of a project and enjoy completing tasks in a timely manner."
    };
  }
};
</script>

<style scoped>
</style>