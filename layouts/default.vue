<template>
  <v-app>
    <v-app-bar v-if="!isMobile" fixed app elevation="1" class="menu">
      <span @click="change('about_me')">{{ $t("about_me") }}</span>

      <span @click="change('skills')">{{ $t("skills") }}</span>

      <span @click="change('projects')">{{ $t("projects") }}</span>

      <v-spacer />

      <LanguageSwitch />
    </v-app-bar>

    <v-app-bar v-else app v-click-outside="onClickOutside">
      <v-btn
        icon
        @click="
          () => {
            toggleSelect = !toggleSelect;
          }
        "
      >
        <v-icon color="purple"> mdi-menu </v-icon>
      </v-btn>

      <v-select
        id="pages_id"
        class="d-flex justify-end language_switch mt-2"
        :items="pages"
        :menu-props="{ value: toggleSelect }"
        item-color="transparent"
        dense
        solo
      >
        <template v-slot:item="{ item }">
          <span @click="change(item.page)">
            {{ $t(item.locale) }}
          </span>
        </template>
      </v-select>

      <v-spacer />

      <LanguageSwitch />

    </v-app-bar>

    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import LanguageSwitch from "@/components/Commom/LanguageSwitch.vue";

export default {
  name: "DefaultLayout",

  components: { LanguageSwitch },

  data: () => ({
    toggleSelect: false,
    pageSelected: null,
  }),

  computed: {
    pages() {
      return [
        {
          page: "about_me",
          locale: "about_me",
        },
        {
          page: "skills",
          locale: "skills",
        },
        {
          page: "projects",
          locale: "projects",
        },
      ];
    },
    isMobile() {
      return (
        this.$vuetify.breakpoint.width <
        this.$vuetify.breakpoint.mobileBreakpoint
      );
    },
  },

  methods: {
    ...mapMutations("me", ["setPage"]),

    onClickOutside() {
      this.toggleSelect = false;
    },

    change(value) {
      this.setPage(value);
    },
  },
};
</script>

<style scoped>

.v-application .primary--text {
     color: #1976d200 !important; 
     caret-color: #1976d200 !important; 
}

span:hover {
  cursor: pointer;
  color: rgb(90, 14, 101) !important;
}

span {
  padding: 10px 25px;
  font-weight: 600 !important;
  color: black !important;
}

main {
  background-image: linear-gradient(
    to bottom right,
    rgb(126, 56, 202),
    rgb(218, 150, 48)
  );
}
</style>
