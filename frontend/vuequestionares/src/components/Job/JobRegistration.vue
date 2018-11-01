<template>
 <div>
   <v-card class="mb-3">
        <v-card-text>
          <!-- <div>{{ typeof maxSteps }}</div> -->
  
          <v-text-field
            :value="maxSteps"
            hint="What type of job would you like to register?"
            label="# of maxSteps"
            max="6"
            min="1"
            persistent-hint
            type="number"
            @input="onInput"
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
              Step {{ n }}
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
            <!-- <v-card
              class="mb-5"
              color="grey lighten-1"
              height="200px"
            >
          
            </v-card> -->
            <Step1 />

            <v-btn
              color="primary"
              @click="nextStep(n)"
            >
              Continue
            </v-btn>
  
            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </div>
</template>

<script>
  import Step1 from './Step1'
  import StepContent from './StepContent'

  export default {
    name: "JobRegistration",
    components: {Step1, StepContent},
    data () {
      return {
        currentStep: 1,
        maxSteps: 2,
        steps:[],
        elements: [
          { type: 'Step1'}
        ]
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
      onInput (val) {
        this.maxSteps = parseInt(val)
      },
      nextStep (n) {
        if (n === this.maxSteps) {
          this.currentStep = 1
        } else {
          this.currentStep = n + 1
          
        }
      }
    }
  }
</script>

<style scoped>
  .vue-img {
    width: 30px;
  }
</style>
