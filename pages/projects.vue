<template>
  <v-layout>
    <v-container fluid>
      <v-row>
        <v-col>
          <v-card outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="require('@/images/githublogo.jpg')"
              alt="Sky"
            >
              <v-card-title>Royality Engine</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>A C# Blazor application for organising music royalities, invoicing and helping with PRS and MCPS payments.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>View On GitHub</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="require('@/images/githublogo.jpg')"
              alt="Sky"
            >
              <v-card-title>Party Parrot Chess</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>A Vue.js web application with a realtime chess engine with Party Parrot Chess pieces. Also uses Axios to assist computer player on next move.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>View On GitHub</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="require('@/images/githublogo.jpg')"
              alt="Sky"
            >
              <v-card-title>Fauna db function library for Vue.js</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>A class library with preset functions to help you get started easily with using FaunaDB within your Vue projects.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="grey" text>Coming soon...</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>
          <v-card outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="require('@/images/githublogo.jpg')"
              alt="Sky"
            >
              <v-card-title>Blazor login using Identity</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>Blazor login using Identity and a single page application within the donet ecosystem.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="grey" text>Coming soon...</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
                <v-col>
          <v-card outlined>
            <v-img
              class="white--text align-end"
              height="200px"
              :src="require('@/images/githublogo.jpg')"
              alt="Sky"
            >
              <v-card-title>Ray Russell Official Website</v-card-title>
            </v-img>

            <v-card-text class="text--primary">
              <div>A website created using Nuxt and Vue for the guitarist and composer Ray Russell.</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="grey" text>Coming soon...</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>