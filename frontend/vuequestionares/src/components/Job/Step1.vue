<template>
   <v-container id="jobTypeDropdown" grid-list-xl>
      <v-layout row wrap>
        <v-flex>
          <p>Job Type</p>
  
          <v-overflow-btn
            :items="jobType"
            label="Please select a job type"
            target="#jobTypeDropdown"
          ></v-overflow-btn>
        </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
    export default {
        name: 'Step1',
        data() {
            return {
                title: 'Hi',
                jobType: ['Building', 'Makesafe', 'RestorX', 'Shopfit', 'Trump']
            }
        }
    }
</script>
