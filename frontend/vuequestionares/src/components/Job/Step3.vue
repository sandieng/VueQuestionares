<template>
     <v-container id="insuranceDetails" grid-list-xl>
      <v-layout row wrap>
        <v-flex>
          <p>Insurance Company</p>
          <v-overflow-btn
            :items="insuranceCompanies"
            label="Please select an insurance company"
            target="#insuranceDetails"
            v-model="selectedInsuranceCompany"
          ></v-overflow-btn>

          <p>Insurance Contact</p>
          <v-overflow-btn
            :items="insuranceContacts"
            label="Please select a contact"
            target="#insuranceDetails"
            v-model="selectedInsuranceContact"
          ></v-overflow-btn>

          <p>Contact Number</p>
          <v-overflow-btn
            :items="insuranceContactNumbers"
            label="Please select a contact"
            target="#insuranceDetails"
            v-model="selectedInsuranceContactNumber"
          ></v-overflow-btn>

          <p>Additional Notes</p>
          <v-text-field v-model="notes">
          </v-text-field>
        </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
    export default {
        name: 'Step3',
         data() {
            return {
                title: 'There',
                insuranceCompanies: ['Adventege', 'IAG', 'Suncorp'],
                insuranceContacts: ['Jack', 'Jill', 'Peter', 'Paul', 'Anna'],
                insuranceContactNumbers: ['0400 220 110', '0411 234 567', '0422 777 888', '0413 304 403', '0499 800 177'],
                notes: '',
                selectedInsuranceCompany: '',
                selectedInsuranceContact: '',
                selectedInsuranceContactNumber: '',
            }
        },

        watch: {
          selectedInsuranceCompany(val) {
            this.$emit('selectedInsuranceCompany', val)
          },

          selectedInsuranceContact(val) {
            this.$emit('selectedInsuranceContact', val)
          },

          selectedInsuranceContactNumber(val) {
            this.$emit('selectedInsuranceContactNumber', val)
          },

          notes(val) {
            this.$emit('notes', val)
          }
        }
    }
</script>