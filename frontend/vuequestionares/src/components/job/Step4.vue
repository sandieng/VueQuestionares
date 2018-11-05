<template>
     <v-container id="final" grid-list-xl>
      <v-layout row wrap>
        <v-flex>
          <p>Summary</p>
          <v-card v-for="content in jobRegistrationDetails" :key="content.key">
              <v-card-text>{{content.label}} : {{content.value}}</v-card-text>
          </v-card>
          <v-card>
              {{jobRegistrationDetails}}
              </v-card>
        </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
    export default {
        name: 'Step4',
        data() {
            return {
                jobRegistrationDetails: ''
            }
        },
        mounted() {
            this.jobRegistrationDetails = this.$store.getters.getJobRegistrationDetails;
        }
    }
</script>