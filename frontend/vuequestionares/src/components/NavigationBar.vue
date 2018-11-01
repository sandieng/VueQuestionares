<template>
  <v-toolbar>
    <router-link to="/" style="text-decoration:none">
        <v-icon color="blue" @click="goDashboard">home</v-icon>
    </router-link>
      
    <v-toolbar-title>VUE QUESTIONARES</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-menu offset-y>
        <v-btn flat    
          slot="activator"
          color="primary"
          dark>
          JOB
        </v-btn>

        <v-list v-for="(menu, index) in jobMenu" :key="index">
          <router-link :to="menu.route" style="text-decoration:none">
            <v-list-tile @click="false"> 
            <v-list-tile-title>{{ menu.title }} </v-list-tile-title>
            </v-list-tile>
          </router-link>
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <v-btn flat  
          slot="activator"
          color="primary"
          dark>CASE</v-btn>
          <v-list v-for="(menu, index) in caseMenu" :key="index">
            <router-link :to="menu.route" style="text-decoration:none">
              <v-list-tile @click="false"> 
              <v-list-tile-title>{{ menu.title }} </v-list-tile-title>
              </v-list-tile>
            </router-link>
          </v-list>
      </v-menu>

   
      <v-menu offset-y>
       <v-btn flat  
          slot="activator"
          color="primary"
          dark @click="loginLogout">{{this.$store.getters.isUserLoggedIn ? 'LOGOUT' : 'LOGIN'}}</v-btn> 
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
  export default {
    name: "NavigationBar",
    data() {
      return {
          jobMenu: [
              { title: 'Register a New Job', route: '/Job/Registration' },
              { title: 'xyz ...', route: '/Welcome' },

            ],
          caseMenu: [
            { title: 'Create New Case', route: '/Case/Create' },
            { title: 'xyz ...', route: '/Welcome' },
          ],
      }
    },
    methods: {
      loginLogout() {
        if (!this.$store.getters.isUserLoggedIn) {
          this.$router.push('/Login');
        } else {
          //this.$store.commit('logout');
          this.$store.dispatch('logout');
          this.$router.push('/Welcome');
        }
      },
      goDashboard() {
        if (!this.$store.getters.isUserLoggedIn) {
          this.$router.push('/Login');
        } else {
          this.$router.push('/Dashboard');
        }
      }
    }
  }
</script>
