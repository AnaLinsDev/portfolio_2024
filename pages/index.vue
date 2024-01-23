<template>
  <v-col>
    <AboutMe v-if="page == 'about_me'" />
    <Skills v-if="page == 'skills'" />
    <Projects v-if="page == 'projects'" />
  </v-col>
</template>

<script>
import { mapState } from "vuex";

import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";

export default {
  name: "IndexPage",

  components: { AboutMe, Skills, Projects },

  computed: {
    ...mapState("me", {
      page: (state) => state.page,
    }),
  },
};
</script>

<style scoped>
.dark {
  background-color: rgb(39, 38, 38) !important;
}
</style>
