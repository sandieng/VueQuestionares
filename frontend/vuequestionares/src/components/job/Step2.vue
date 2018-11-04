<template>
     <v-container id="jobSize" grid-list-xl>
      <v-layout row wrap>
        <v-flex>
          <p>Job Size</p>
  
          <v-overflow-btn
            :items="jobSizes"
            label="Please select a job size"
            target="#jobSize"
            v-model="selectedJobSize"
            @click="skipStep3"
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
                jobSizes: ['Small', 'Medium', 'Large', 'Mega'],
                skipStep3Flag: false,
                selectedJobSize: ''
            }
        },
        methods: {
            skipStep3() {
                this.skipStep3Flag = true;
            }
        },
        watch: {
            selectedJobSize(val) {
                console.log(val)
                this.$emit('selectedJobSize', val)
            }
        }
    }
</script>