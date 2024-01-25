<template>
  <v-row class="py-5" :class="isMobile ? 'px-0' : 'px-10'" justify="center">
    <v-card class="pa-10" rounded>
      <h2 class="pb-5 text-center">Ana Júlia Oliveira Lins</h2>
      <h3 class="pb-6 text-center">{{ $t("frontend_dev") }}</h3>

      <v-divider class="pb-6"></v-divider>

      <h3 class="pb-6">
        <v-icon color="rgb(5, 129, 123)" class="mb-1 mr-2">
          mdi-email-outline
        </v-icon>
        analinsdev@gmail.com

        <v-icon
          color="black"
          small
          class="ml-2"
          @click="copyToClipboard('analinsdev@gmail.com')"
        >
          mdi-content-copy
        </v-icon>
      </h3>

      <h3 class="pb-6">
        <v-icon color="rgb(5, 129, 123)" class="mb-1 mr-2">
          mdi-whatsapp
        </v-icon>
        +55 83986404550
        <v-icon
          color="black"
          small
          class="ml-2"
          @click="copyToClipboard('5583986404550')"
        >
          mdi-content-copy
        </v-icon>
      </h3>

      <h3 class="pb-6 btn">
        <v-icon color="rgb(5, 129, 123)" class="mb-1 mr-2"> mdi-github </v-icon>
        Github
        <v-icon
          color="black"
          small
          class="ml-2"
          @click="goTo('https://github.com/AnaLinsDev')"
        >
          mdi-link-variant
        </v-icon>
      </h3>

      <h3 class="pb-6 btn">
        <v-icon color="rgb(5, 129, 123)" class="mb-1 mr-2">
          mdi-linkedin
        </v-icon>
        Linkedin
        <v-icon
          color="black"
          small
          class="ml-2"
          @click="goTo('https://www.linkedin.com/in/ana-julia-lins-devbrasil/')"
        >
          mdi-link-variant
        </v-icon>
      </h3>

      <v-divider class="pb-6"></v-divider>

      <p class="text-justify mw_600">
        {{ $t("about_me_desc") }}
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

    copyToClipboard(value) {
      navigator.clipboard.writeText(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.mw_600 {
  max-width: 600px !important;
}

.btn {
  cursor: pointer;
}

h3,
h2,
p {
  color: rgb(80, 80, 80) !important;
}

.black--text:hover {
  color: rgba(9, 162, 75, 0.992) !important;
}

p {
  font-size: 20px;
}
</style>
