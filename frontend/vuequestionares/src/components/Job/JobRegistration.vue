<template>
 <div>
    <v-snackbar v-model="showSnackbar" :timeout="3000" :top="true">
      {{ message }}
      <v-btn color="pink" flat @click="showSnackbar = false">
        Close
      </v-btn>
    </v-snackbar>

   <v-card class="mb-3">
    <v-card-text>
      <v-text-field
        :label="showProgress"
        :hint="showCurrentStepWellHint"
        persistent-hint
        type="number"
      ></v-text-field>
      </v-card-text>
    </v-card>

    <v-stepper v-model="currentStep">
      <v-stepper-header>
        <template v-for="n in maxSteps">
          <v-stepper-step
            :complete="currentStep > n"
            :key="`${n}-step`"
            :step="n"
            editable
          >
            Step {{ n }} - {{stepWells[n - 1]}}
          </v-stepper-step>

          <v-divider v-if="n !== maxSteps" :key="n"></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content v-for="n in maxSteps" :key="`${n}-content`" :step="n">

          <!-- Job Registration steps -->
          <v-card class="mb-5" color="grey lighten-3">
            <Step1 v-if="n === 1" @selectedJobType="handleJobType"/>
            <Step2 v-if="n === 2" @selectedJobSize="handleJobSize"/>
            <Step3 v-if="n === 3 && !skipStep3Flag" 
              @selectedInsuranceCompany="handleInsuranceCompany" 
              @selectedInsuranceContact="handleInsuranceContact"
              @selectedInsuranceContactNumber="handleInsuranceContactNumber"
              @notes="handleInsuranceNotes"
              />
            <Step4 v-if="n === 4"/>
          </v-card>
          
          <!-- Navigation buttons -->
          <v-btn color="primary" @click="prevStep(n)">Previous</v-btn>
          <v-btn v-if="n < maxSteps" color="primary" @click="nextStep(n)">Next</v-btn>
          <v-btn v-if="n === maxSteps" color="red" @click="finaliseStep(n)">Finish</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
  import Step1 from './Step1'
  import Step2 from './Step2'
  import Step3 from './Step3'
  import Step4 from './Step4'

  export default {
    name: "JobRegistration",
    components: {Step1, Step2, Step3, Step4},
    data () {
      return {
        currentStep: 1,
        maxSteps: 4,
        stepWells:['What type of job would you like to register?', 'What is the size of the job?', 'Whos is the insurer?', 'Job Summary'],
        showSnackbar: false,
        message: '',
        skipStep3Flag: false
      }
    },

    watch: {
      maxSteps (val) {
        if (this.currentStep > val) {
          this.currentStep = val
        }
      }
    },

    methods: {
      nextStep (n) {
        if (n === this.maxSteps) {
          this.currentStep = 1
        } else {
            this.currentStep = n + 1
        }
      },

      prevStep(n) {
        if (n === 1) {
          this.currentStep = this.maxSteps
        } else {
          this.currentStep = n - 1
        }

      },

      finaliseStep() {
        this.showSnackbar = true
        this.message = 'Processing job registration'
      },

      handleJobType(val) {
        this.$store.dispatch('maintainJobRegistration', { 'key': `jobRegistration-step1-jobType`, 'value' : val, 'label': 'Job Type' })
      },

      handleJobSize(val) {
        this.$store.dispatch('maintainJobRegistration', { 'key': `jobRegistration-step2-jobSize`, 'value' : val, 'label': 'Job Size' })
        if (val === 'Small')
          this.skipStep3Flag = true;
        else
          this.skipStep3Flag = false;
      },

      handleInsuranceCompany(val) {
         this.$store.dispatch('maintainJobRegistration', { 'key': `jobRegistration-step3-insuranceCompany`, 'value' : val, 'label': 'Insurance Company' })
      },

      handleInsuranceContact(val) {
         this.$store.dispatch('maintainJobRegistration', { 'key': `jobRegistration-step3-insuranceContact`, 'value' : val, 'label': 'Insurance Contact' })
      },

      handleInsuranceContactNumber(val) {
         this.$store.dispatch('maintainJobRegistration', { 'key': `jobRegistration-step3-insuranceContactNumber`, 'value' : val, 'label': 'Insurance Contact Number' })
      },

      handleInsuranceNotes(val) {
         this.$store.dispatch('maintainJobRegistration', { 'key': `jobRegistration-step3-insuranceNotes`, 'value' : val, 'label': 'Notes' })
      }
    },

    computed: {
      showProgress() {
        return `Step ${this.currentStep}/${this.maxSteps}`
      },

      showCurrentStepWellHint() {
        return this.stepWells[this.currentStep - 1];
      }
    }
  }
</script>

<style scoped>
  .vue-img {
    width: 30px;
  }
</style>
