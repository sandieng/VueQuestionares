<template>
 <div>
   <v-card class="mb-3">
    <v-card-text>
      <!-- <div>{{ typeof maxSteps }}</div> -->

      <v-text-field
        :hint="showCurrentStepWellHint"
        :label="showProgress"
        max="6"
        min="1"
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
            Step {{ n }} - {{showCurrentStepWellHint}}
          </v-stepper-step>

          <v-divider
            v-if="n !== maxSteps"
            :key="n"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content
          v-for="n in maxSteps"
          :key="`${n}-content`"
          :step="n"
        >
          <v-card
            class="mb-5"
            color="grey lighten-3"
            height="200px"
          >
            <Step1 v-if="n === 1"/>
            <Step2 v-if="n === 2"/>
          </v-card>
          
            <v-btn
            color="primary"
            @click="prevStep(n)"
          >
            Previous
          </v-btn>

          <v-btn
            color="primary"
            @click="nextStep(n)"
          >
            Next
          </v-btn>

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
        stepProgressText: '',
        stepWells:['What type of job would you like to register?', 'What kind of size of the job?'],
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
      // onInput (val) {
      //   this.maxSteps = parseInt(val)
      // },
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
