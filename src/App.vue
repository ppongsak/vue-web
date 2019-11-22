<template>
  <v-app id="app">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <div class="=d-flex align-right">
        <v-toolbar-items>
          <v-btn text>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/mains">String</router-link>
          </v-btn>
          <v-btn text>
            <router-link to="/car">Place</router-link>
          </v-btn>
        </v-toolbar-items>
      </div>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
      <!-- <Footer /> -->
    </v-content>
  </v-app>
</template>

<script>
// import Home from './components/Home';
// import Footer from './components/footer/Footer';
// import Mains from './components/Mains';


export default {
  name: 'App',

  components: {
    // Home,
    // Footer,
    // Mains,
    // Routers,
  },

  data: () => ({
    //
  }),
};
</script>