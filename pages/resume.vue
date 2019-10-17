<template>
  <v-layout>
    <v-container fluid>
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="6">
          <!-- EXPERIENCE CARD -->
          <v-card outlined height="100%">
            <v-card-title class="headline">
              <v-icon left>mdi-briefcase-outline</v-icon>Experience
            </v-card-title>
            <v-divider></v-divider>

            <!-- SKY START -->
            <v-card light flat>
              <v-container>
                <v-layout align-left>
                  <v-avatar height="110" width="80" tile>
                    <img :src="require('@/images/skylogo.png')" alt="Sky" />
                  </v-avatar>
                  <v-layout column justify-center style="padding-left:20px">
                    <div class="title font-weight-medium">Software Developer</div>
                    <div class="text font-weight-light">2015 - Present</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-timeline dense>
              <v-timeline-item color="purple darken-2">
                <v-card flat>
                  <div class="title font-weight-light" style="padding-left:16px">Sky Analytics</div>
                  <v-card-text>Sky Analytics is now a major cornerstone in Sky Advertising Technology and now a major player worldwide. The tool is not only used by advertisers and agencies to Plan, Run and evaluate their campaigns using sales outcome data, but gives the client the ability to target household-level attributes on a map by selecting Mosaic demographics of a particular type (high-earners, children in household etc) and create a segment to target the individuals they want their localised campaigns to see on their Sky devices and apps. The challenge was to fully utilize Skys unique clean data set, with over 40% of fully verified physical Sky devices in all UK households. This project started just over four years ago, where I was one of three developers tasked to take this concept and create it using the power Microsoft technologies and Vue.js (previously outlined). We are now fifteen developers strong and the product is now worth tens of millions a year to the cooperation, with all of Sky's major advertising clients using it to target their advertising thanks to our efforts.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="green darken-2">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >Sky Results Attribution</div>
                  <v-card-text>Sky RA was a product that allowed agencies to upload sales outcomes against Performance Evaluations run between two similar advertising campaigns to generate custom reports. I had to liaise with leaders from the advertising team to build a tool which was easy to use and saved valuable resource by automatically giving them a concise overview of their outcome data to send to their clients. I built a report robot for the existing FileMaker system which load-balanced the ever increasing demand to generate these reports across the company. Triggers in FileMaker alongside using Windows Powershell and the HighCharts Javascript library empowered me to be able to get this from being a concept to rollout in eight months.</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- SKY END -->

            <!-- ISOS START -->
            <v-card light flat>
              <v-container>
                <v-layout align-left>
                  <v-avatar height="70" width="70" tile>
                    <img :src="require('@/images/isoslogo.png')" alt="iSOS" />
                  </v-avatar>
                  <v-layout column justify-center style="padding-left:30px">
                    <div class="title font-weight-medium">Software Developer</div>
                    <div class="text font-weight-light">2011 - 2015</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-timeline dense>
              <v-timeline-item color="yellow darken-2">
                <v-card flat>
                  <div class="title font-weight-light" style="padding-left:16px">Hearts of London</div>
                  <v-card-text>This project required me to work in the heart of Farringdons diamond trade with Hearts of London, which was then still setting up their new offices on the high street. They wanted a beautiful and elegant UI to match with their surroundings that they could use to quote customers on weddings bands and customised diamonds. Brett (the company owner) and I successfully built the industries first online wedding band calculator, which allowed staff to build a band specification from scratch using real images from scanned in stock (which was also another bespoke part of the retail system I went on to build) to build a picture of the end product and give them real-time prices and margins from the Gemological Institute of America API that connected to the DeBeers exchange. By the time the store was open in late 2014, Brett and his team had a system that handled stock, send part orders to manufacturers, created quotes and matched the interior design of the immaculately presented store.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="blue darken-2">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >University of Brighton</div>
                  <v-card-text>For this project, I was asked to develop a new front and band end solution to manage attendance to all courses run by the University of Brighton Education department. This required connecting to an existing database via ODBC and creating an easy-to-use interface which could also be accessed via iPad. I worked closely with their IT department to make sure of an easy and almost seamless transition into using the newer system, and held bi-weekly hands-on sessions with the department so they could see how the system was progressing which also included demos and feedback sessions. This section of the system is now heavily used by a team of twenty UoBE employees to on-board, track, grade and report on students and attendance records.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="red darken-2">
                <v-card flat>
                  <div class="title font-weight-light" style="padding-left:16px">Virgin Atlantic</div>
                  <v-card-text>I worked with Virgin Atlantic along with another Senior Developer to help them build a system which enabled airline staff to conduct pre-flight checks on facilities and items required for safety reset. This was built primarily for use on iPad which allowed the staff to walk around a disembarked plane to check all standard safety measures were still in place and itinerary was replenished for new embarking customers. They could put in a flight number and model which brought up the exact flight record with a new checklist to keep for logging measures and could take a manual signature by the person in charge of the audit. We worked alongside safety teams based in Virgin Atlantic's HQ in Crawley to come up with an experience that was easy to use and complied with branding and Virgins own high software standards. To this day, Virgin remain one of iSOS biggest customers and were delighted with the results.</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- ISOS END -->

            <!-- APPLE START -->
            <v-card light flat>
              <v-container>
                <v-layout align-left>
                  <v-avatar height="80" width="70" tile>
                    <img :src="require('@/images/applelogo.png')" alt="Apple" />
                  </v-avatar>
                  <v-layout column justify-center style="padding-left:30px">
                    <div class="title font-weight-medium">Multiple Roles</div>
                    <div class="text font-weight-light">2008 - 2011</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-timeline dense>
              <v-timeline-item color="grey lighten-1">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >Business Support Specialist</div>
                  <v-card-text>As an Apple Certified Hardware and Software technician (ACMT) I worked hard to resolve issues with Apple products and helped customers with their queries on their devices whilst managing their expectations. I passed Apples rigorous four stage interview process to help business customers with their technical issues and expanded greatly on my soft skills whilst completing repairs and consultations in a timely manner.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="grey lighten-1">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >Apple Certified Software and Hardware Technician</div>
                  <v-card-text>As an Apple Certified Hardware and Software technician (ACMT) I worked hard to resolve issues with Apple products and helped customers with their queries on their devices whilst managing their expectations. I passed Apples rigorous four stage interview process to help business customers with their technical issues and expanded greatly on my soft skills whilst completing repairs and consultations in a timely manner.</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- APPLE END -->
          </v-card>
        </v-col>

        <v-col cols="12" xs="12" sm="12" md="6">
          <!-- EDUCATION CARD -->
          <v-card outlined>
            <v-card-title class="headline">
              <v-icon left>mdi-school-outline</v-icon>Education
            </v-card-title>
            <v-divider></v-divider>

            <!-- MICROSOFT START-->
            <v-card light flat>
              <v-container>
                <v-layout align-left>
                  <v-avatar height="100" width="70" tile>
                    <img
                      :src="require('@/images/microsoftlogo.png')"
                      alt="iSOS"
                      style="padding-top:30px"
                    />
                  </v-avatar>
                  <v-layout column justify-center style="padding-top:15px; padding-left: 30px">
                    <div class="title font-weight-medium">Microsoft</div>
                    <div class="text font-weight-light">All Certifications</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-timeline dense>
              <v-timeline-item color="yellow darken-2">
                <v-card flat>
                  <div class="title font-weight-light" style="padding-left:16px">MCSD: App Builder</div>
                  <v-card-text>Earners of the MCSD: App Builder certification have demonstrated the skills required to build modern mobile and/or web applications and services. Earning this certification qualifies an individual for a position as an application developer.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="blue darken-2">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >MCSA: Web Applications</div>
                  <v-card-text>Earners of the MCSA: Web Applications certification have demonstrated the skills required to implement modern web apps. They are qualified for a position as a web developer or web administrator.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="green darken-2">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >Exam 486: Developing ASP.NET MVC Web Applications</div>
                  <v-card-text>Passing Exam 486: Developing ASP.NET MVC Web Applications validates a candidate’s ability to design the user experience, security solutions, and application architecture as well as troubleshoot and debug web applications.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="red darken-2">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >Exam 483: Programming in C#</div>
                  <v-card-text>Passing Exam 483: Programming in C# validates a candidate’s ability to manage program flow, create and use types, debug applications and implement security as well as implement data access.</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- MICROSOFT END -->

            <!-- APPLE START-->
            <v-card light flat>
              <v-container>
                <v-layout align-left>
                  <v-avatar height="80" width="70" tile>
                    <img :src="require('@/images/applelogo.png')" alt="Apple" />
                  </v-avatar>
                  <v-layout column justify-center style="padding-left: 30px">
                    <div class="title font-weight-medium">Apple</div>
                    <div class="text font-weight-light">All Certifications</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-timeline dense>
              <v-timeline-item color="grey lighten-1">
                <v-card flat>
                  <div class="title font-weight-light" style="padding-left:16px">MCSD: App Builder</div>
                  <v-card-text>Earners of the MCSD: App Builder certification have demonstrated the skills required to build modern mobile and/or web applications and services. Earning this certification qualifies an individual for a position as an application developer.</v-card-text>
                </v-card>
              </v-timeline-item>
              <v-timeline-item color="grey lighten-1">
                <v-card flat>
                  <div
                    class="title font-weight-light"
                    style="padding-left:16px"
                  >MCSA: Web Applications</div>
                  <v-card-text>Earners of the MCSA: Web Applications certification have demonstrated the skills required to implement modern web apps. They are qualified for a position as a web developer or web administrator.</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- APPLE END -->

            <!-- FILEMAKER START-->
            <v-card light flat>
              <v-container>
                <v-layout align-left>
                  <v-avatar height="100" width="70" tile>
                    <img
                      :src="require('@/images/filemakerlogo.jpg')"
                      alt="iSOS"
                      style="padding-top:30px"
                    />
                  </v-avatar>
                  <v-layout column justify-center style="padding-top:30px; padding-left: 30px">
                    <div class="title font-weight-medium">FileMaker</div>
                    <div class="text font-weight-light">All Certifications</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-timeline dense>
              <v-timeline-item color="blue lighten-3">
                <v-card flat>
                  <div class="title font-weight-light" style="padding-left:16px">FileMaker Certified Application Developer</div>
                  <v-card-text>Earners of the MCSD: App Builder certification have demonstrated the skills required to build modern mobile and/or web applications and services. Earning this certification qualifies an individual for a position as an application developer.</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- FILEMAKER END -->

            <!-- UNI START-->
            <v-card light flat>
              <v-container>
                <v-layout align-left>
                  <v-avatar height="110" width="80" tile>
                    <img
                      :src="require('@/images/unilogo.jpg')"
                      alt="iSOS"
                      style="padding-top:30px"
                    />
                  </v-avatar>
                  <v-layout column justify-center style="padding-top:30px; padding-left: 30px">
                    <div class="title font-weight-medium">University of Sussex</div>
                    <div class="text font-weight-light">All Certifications</div>
                  </v-layout>
                </v-layout>
              </v-container>
            </v-card>
            <v-timeline dense>
              <v-timeline-item color="yellow darken-2">
                <v-card flat>
                  <div class="title font-weight-light" style="padding-left:16px">BA Hons Degree in Modern Music Composition</div>
                  <v-card-text>Earners of the MCSD: App Builder certification have demonstrated the skills required to build modern mobile and/or web applications and services. Earning this certification qualifies an individual for a position as an application developer.</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <!-- UNI END -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>