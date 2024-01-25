<template>
  <v-app>
    <v-app-bar v-if="!isMobile" fixed app elevation="1" class="menu">
      <span
        @click="change('about_me')"
        :class="page != 'about_me' || 'selected'"
      >
        {{ $t("about_me") }}
      </span>

      <span @click="change('skills')" :class="page != 'skills' || 'selected'">
        {{ $t("skills") }}
      </span>

      <span
        @click="change('projects')"
        :class="page != 'projects' || 'selected'"
      >
        {{ $t("projects") }}
      </span>

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
        <v-icon color="rgb(5, 129, 123)"> mdi-menu </v-icon>
      </v-btn>

      <v-select
        id="pages_id"
        class="d-flex justify-end page_switch mt-2"
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
import { mapMutations, mapState } from "vuex";
import LanguageSwitch from "@/components/Commom/LanguageSwitch.vue";

export default {
  name: "DefaultLayout",

  components: { LanguageSwitch },

  data: () => ({
    toggleSelect: false,
    pageSelected: null,
  }),

  computed: {
    ...mapState("me", {
      page: (state) => state.page,
    }),

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
.page_switch {
  width: 100px !important;
  opacity: 0;
  top: 50px;
  right: 60px;
}

.v-application .primary--text {
  color: #1976d200 !important;
  caret-color: #1976d200 !important;
}

.selected {
  color: rgb(5, 129, 123) !important;
}

span:hover {
  cursor: pointer;
  color: rgb(5, 129, 123) !important;
}

span {
  padding: 10px 25px;
  font-weight: 600 !important;
  color: rgb(80, 80, 80) !important;
}

main {
  color: rgb(80, 80, 80) !important;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-image: linear-gradient(
    to bottom right,
    rgb(5, 129, 123),
    rgb(11, 85, 56)
  );
}
</style>
