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
          <v-card class="mb-5" color="grey lighten-3" height="200px">
            <Step1 v-if="n === 1"/>
            <Step2 v-if="n === 2"/>
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

  export default {
    name: "JobRegistration",
    components: {Step1, Step2},
    data () {
      return {
        currentStep: 1,
        maxSteps: 2,
        stepWells:['What type of job would you like to register?', 'What is the size of the job?'],
        showSnackbar: false,
        message: ''
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
