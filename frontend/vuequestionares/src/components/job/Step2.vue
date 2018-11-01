<template>
     <v-container id="jobSizeDropdown" grid-list-xl>
      <v-layout row wrap>
        <v-flex>
          <p>Job Size</p>
  
          <v-overflow-btn
            :items="jobType"
            label="Please select a job size"
            target="#jobSizeDropdown"
          ></v-overflow-btn>
        </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
    export default {
        name: 'Step2',
         data() {
            return {
                title: 'There',
                jobType: ['Small', 'Medium', 'Large', 'Mega']
            }
        }
    }
</script>