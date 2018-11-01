<template>
 <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            
            <v-snackbar v-model="showSnackbar" :timeout="6000" :top="true">
              {{ message }}
              <v-btn color="pink" flat @click="showSnackbar = false">
                Close
              </v-btn>
            </v-snackbar>
              
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="email" label="Email" type="email" v-model="email"></v-text-field>
                  <label v-if="emailError" color="red">Email is required</label>
                  <label v-if="validEmailError" color="red">Valid email is required</label>

                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password"></v-text-field>
                  <label v-if="passwordError" color="red">Password is required</label>
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary" @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
  export default {
      name: "Login",
      data() {
        return {
            fixed: false,
            password: null,
            email: '',
            showSnackar: false,
            message: '',
            emailError: false,
            validEmailError: false,
            passwordError: false
        }
      },
      methods: {
        login() {
          this.$store.dispatch('login');
          this.$router.push('/job/registration');
        }
    }
  }
</script>
