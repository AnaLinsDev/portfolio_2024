<template>
  <v-row class="py-5" :class="isMobile ? 'px-0' : 'px-10'" justify="center">
    <v-card class="pa-10" rounded>
      <h2 class="pb-5 text-center">Ana Júlia Oliveira Lins</h2>
      <h3 class="pb-10 text-center">Frontend Developer</h3>

      <h3 class="pb-10">
        <v-icon color="pink" class="mb-1 mr-2"> mdi-email-outline </v-icon>
        analinsdev@gmail.com
      </h3>

      <h3 class="pb-10">
        <v-icon color="green" class="mb-1 mr-2"> mdi-whatsapp </v-icon>
        +55 83986404550
      </h3>

      <h3 class="pb-10 btn" @click="goTo('https://github.com/AnaLinsDev')">
        <v-icon color="pink" class="mb-1 mr-2"> mdi-github </v-icon>
        Github
      </h3>

      <h3
        class="pb-10 btn"
        @click="goTo('https://www.linkedin.com/in/ana-julia-lins-devbrasil/')"
      >
        <v-icon color="pink" class="mb-1 mr-2"> mdi-linkedin </v-icon>
        Linkedin
      </h3>

      <p class="text-justify mw_500">
       {{$t('about_me_desc')}}
      </p>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "AboutMe",

  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.width <
        this.$vuetify.breakpoint.mobileBreakpoint
      );
    },
  },

  methods: {
    goTo(link) {
      window.open(link, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.mw_500 {
  max-width: 500px !important;
}

.btn {
  cursor: pointer;
}
</style>
