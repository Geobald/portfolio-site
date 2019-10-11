<template>
  <v-layout>
    <v-container fluid>
      <v-row dense>
        <v-col>
          <portfoliocard title="Header text" text="Test 123" />
        </v-col>
        <v-col>
          <portfoliocard icon="mdi-account" title="Profile" :text="portfolioText" underscore="true"/>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <portfoliocard icon="mdi-xml" title="Skills" text="" underscore="true"/>
        </v-col>
        <v-col>
          <portfoliocard icon="mdi-information-outline" title="Info" text="Test 123" underscore="true"/>
        </v-col>
        <v-col>
          <portfoliocard  icon="mdi-toolbox-outline" title="Tooling" text="Test 123" underscore="true"/>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import portfoliocard from "@/components/portfoliocard";

export default {
  components: {
    portfoliocard
  },

  data() {
return{
      portfolioText: "Microsoft Certified Software Developer (MCSA, MCSD)currently involved with developing Sky Media's set of self-serve ad management and campaign analytics platforms, allowing users to plan, evaluate and optimize effectiveness across Digital, VoD, Broadcast TV, Addressable TV and Programmatic, all within an AGILE/SCRUM based environment. I am an enthusiastic, dedicated and learning agile person who loves building and sustaining relationships with clientele, as well as a wide range of practical Skill sets in both IT and administration as well as Music Composition. I enjoy working as part of a team but can take ownership of a project and enjoy completing tasks in a timely manner."
}
  }
};
</script>
