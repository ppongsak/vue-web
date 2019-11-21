<template>
  <v-form if="form" @submit="sumitForm">
    <v-container class="grey lighten-5">
      <v-row no-gutters>
        <v-col order="1">
          <v-card class="pa-2" outlined tile>
            <v-text-field label="text to find" v-model="search" required name="search"></v-text-field>
          </v-card>
        </v-col>
        <v-col order="1">
          <v-card class="pa-2" outlined tile>
            <v-text-field label="text value" v-model="message" required name="message"></v-text-field>
          </v-card>
        </v-col>
      </v-row>
      <v-btn @click="submit">submit</v-btn>
    </v-container>
  </v-form>
</template>


<script>
export default {
  name: 'Mains',

  components: {

  },

  data: () => ({
    //
  }),
};
</script>
