<template>
  <v-row class="py-5" :class="isMobile ? 'px-0' : 'px-10'" justify="center">
    <h1 class="white_text px-10 py-2">{{ $t("skills") }}</h1>

    <v-card
      class="w_100 mt-14 mx-14 d-flex flex-wrap justify-center"
      color="transparent"
      elevation="0"
    >
      <v-card
        v-for="skill of skills"
        :key="skill"
        class="ma-5 pa-5 d-flex"
        width="300px"
      >
        <v-icon large color="#073b3a">
          {{ skill.icon }}
        </v-icon>
        <h2 class="ml-5">
          {{ skill.name }}
        </h2>
      </v-card>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "Skills",

  computed: {
    isMobile() {
      return (
        this.$vuetify.breakpoint.width <
        this.$vuetify.breakpoint.mobileBreakpoint
      );
    },
  },

  data() {
    return {
      skills: [
        
        {
          name: "Vuex",
          icon: "mdi-vuejs",
        },
        {
          name: "Vuetify",
          icon: "mdi-vuetify",
        },

        {
          name: "Nuxt",
          icon: "mdi-nuxt",
        },
        {
          name: "Github",
          icon: "mdi-github",
        },
        {
          name: "Vue",
          icon: "mdi-vuejs",
        },
        {
          name: "Javascript",
          icon: "mdi-language-javascript",
        },
        {
          name: "Sass",
          icon: "mdi-sass",
        },
        {
          name: "CSS",
          icon: "mdi-language-css3",
        },
        {
          name: "HTML",
          icon: "mdi-language-html5",
        },
        {
          name: "React",
          icon: "mdi-react",
        },
        {
          name: "JSON",
          icon: "mdi-code-json",
        },
        {
          name: "Python",
          icon: "mdi-language-python",
        },
        {
          name: "Node",
          icon: "mdi-nodejs",
        },
      ],
    };
  },
};
</script>

<style scoped>
h2 {
  color: rgb(80, 80, 80) !important;
}

.w_100 {
  width: 100vw;
}

.mw_2000 {
  max-width: 2000px;
}

.white_text {
  background-color: whitesmoke;
  border-radius: 10px !important;
}
</style>
