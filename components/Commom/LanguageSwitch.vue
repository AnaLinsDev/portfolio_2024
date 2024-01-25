<template>
  <v-card
    v-click-outside="onClickOutside"
    elevation="0"
    color="transparent"
    height="40px"
    class="d-flex"
  >

  <v-select
      id="language"
      class="d-flex justify-end language_switch mt-2"
      v-model="$i18n.locale"
      :items="$i18n.locales"
      :item-text="(item) => item.toUpperCase()"
      :menu-props="{ value: toggleSelect }"
      dense
      solo
    >
      <template v-slot:item="{ item }">
        <span>{{ item.toUpperCase() }}</span>
      </template>

      <template v-slot:selection="{ item }">
        <span v-show="false">
          <v-icon>mdi-translate</v-icon>
          {{ item.toUpperCase() }}
        </span>
      </template>
    </v-select>

    <div class="d-flex justify-start">
      <span
      class="span_icon"
        elevation="0"
        color="transparent"
        @click="toggleSelect = !toggleSelect"
      >
        <v-icon>mdi-translate</v-icon>
      </span>
    </div>
    
  </v-card>
</template>

<script>
export default {
  name: "LanguageSwitch",

  data: () => ({
    toggleSelect: false,
  }),

  methods: {
    onClickOutside() {
      this.toggleSelect = false;
    },
  },
};
</script>

<style lang="scss">
.language_switch {
  width: 100px !important;
  opacity: 0;
  top: 30px;
  left: 60px;
}


.span_icon {
  padding: 8px 25px;
  font-weight: 600 !important;
}

div.v-application .primary--text {
  color: rgb(5, 129, 123) !important;
}
</style>
