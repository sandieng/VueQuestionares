<template>
    <div style="padding: 2rem 3rem; text-align: left;">
       <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>Building</option>
            <option>Makesafe</option>
            <option>RestorX</option>
            <option>Shopfit</option>
            <option>Trump</option>
        </select>
        <span>Selected: {{ selected }}</span>
    </div>
</template>

<script>
    import StepContent from './StepContent'
    export default {
        name: 'Step1',
        data() {
            return {
            selected: ''
            }
        }
    }
</script>