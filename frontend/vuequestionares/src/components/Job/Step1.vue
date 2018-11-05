<template>
   <v-container id="jobTypeDropdown" grid-list-xl>
      <v-layout row wrap>
        <v-flex>
          <p>Job Type</p>
  
          <v-overflow-btn
            :items="jobTypes"
            label="Please select a job type"
            target="#jobTypeDropdown"
            v-model="selectedJobType"
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
                jobTypes: ['Building', 'Makesafe', 'RestorX', 'Shopfit', 'Trump'],
                selectedJobType: ''
            }
        },
        watch: {
            selectedJobType(val) {
                this.$emit('selectedJobType', val)
            }
        }
    }
</script>
