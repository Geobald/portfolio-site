<template>
  <v-layout>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card>
            <v-list-item>
              <v-list-item-avatar>
                <img :src="require('@/images/profileimage.jpg')" alt="George Baldwin" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">TFS to Git Miration in 10 easy steps</v-list-item-title>
                <v-list-item-subtitle>by George Baldwin | 10 min read</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="require('@/images/githublogo.jpg')" alt="Sky" height="194"></v-img>

            <v-card-text>A simple guide to migrate over from TFS to Git.</v-card-text>

            <v-card-actions>
              <v-btn text color="grey">Coming Soon...</v-btn>
              <!-- <v-btn text color="primary">Read Article</v-btn> -->
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-list-item>
              <v-list-item-avatar>
                <img :src="require('@/images/profileimage.jpg')" alt="George Baldwin" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">Integration with Netlify and CI pipelines</v-list-item-title>
                <v-list-item-subtitle>by George Baldwin | 5 min read</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-img :src="require('@/images/githublogo.jpg')" alt="Sky" height="194"></v-img>

            <v-card-text>A simple guide for integration with Netlify and CI pipelines</v-card-text>

            <v-card-actions>
              <v-btn text color="grey">Coming Soon...</v-btn>
              <!-- <v-btn text color="primary">Read Article</v-btn> -->
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>