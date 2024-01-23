<template>
  <v-row class="py-5" :class="isMobile ? 'px-0' : 'px-10'" justify="center">
    <h1 class="white_text px-10 py-2">{{ $t("projects") }}</h1>

    <v-card
      class="w_100 mt-14 d-flex flex-wrap justify-center"
      color="transparent"
      elevation="0"
    >
      <v-card
        v-for="project of projects"
        :key="project"
        class="ma-5 pa-5 d-flex flex-column"
        max-width="500px"
      >
        <v-img
          v-if="isMobile"
          :ref="project.name"
          :src="project.image"
          height="180px"
          width="320px"
        >
        </v-img>

        <v-img
          v-else
          :ref="project.name"
          :src="project.image"
          height="300px"
          width="450px"
        />

        <span class="mt-10">
          <h3>{{ project.name }}</h3>

          <div class="d-flex flex-row-reverse">
            <v-btn icon class="github" @click="goTo(project.link)">
              <v-icon large color="black"> mdi-github </v-icon>
            </v-btn>
          </div>

          <v-chip
            v-for="tag in project.categories"
            :key="tag"
            dark
            color="purple"
            class="mr-3"
          >
            {{ tag }}
          </v-chip>
        </span>
      </v-card>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "Projects",

  methods: {
    goTo(link) {
      window.open(link, "_blank");
    },
  },

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
      projects: [
        {
          id: 1,
          image:
            "https://user-images.githubusercontent.com/60307596/81940568-1b2da800-95ce-11ea-85a5-68189354b434.PNG",
          name: "Cadastro de usuários",
          link: "https://github.com/AnaLinsDev/cadastro-reactjs",
          categories: ["React", "HTML", "CSS", "Json"],
        },
        {
          id: 2,
          image:
            "https://user-images.githubusercontent.com/60307596/130265320-63646d08-c7a4-490b-aadd-77cec15a7f80.PNG",
          name: "Sites com detalhes de jogos gratuitos",
          link: "https://github.com/AnaLinsDev/free-to-play-app-reactjs",
          categories: ["React", "Redux", "HTML", "Sass", "API"],
        },
        {
          id: 3,
          image:
            "https://user-images.githubusercontent.com/60307596/82382876-27b56480-9a03-11ea-9664-fdd68acbc260.PNG",
          name: "Filtro de Monstros",
          link: "https://github.com/AnaLinsDev/monsters-reactjs2",
          categories: ["React", "HTML", "CSS", "API"],
        },
        {
          id: 4,
          image:
            "https://user-images.githubusercontent.com/60307596/83592476-d2b03d00-a530-11ea-9c2a-13dd20124023.PNG",
          name: "E-commerce de diversos tipos de roupas ",
          link: "https://github.com/AnaLinsDev/clothing-store-reactjs",
          categories: ["React", "Redux", "HTML", "Sass"],
        },
        {
          id: 5,
          image:
            "https://user-images.githubusercontent.com/60307596/81362712-ded2e700-90b7-11ea-9814-142b1c9508fd.PNG",
          name: "Site para comunicação de ONG's",
          link: "https://github.com/AnaLinsDev/be-the-hero",
          categories: ["React", "Node", "HTML", "CSS"],
        },
        {
          id: 6,
          image:
            "https://user-images.githubusercontent.com/60307596/130268378-39976987-1e4c-4cce-992f-f3d57498a323.png",
          name: "FanSite da série Rick and Morty",
          link: "https://github.com/AnaLinsDev/rick-and-morty-javascript",
          categories: ["Javascript", "HTML", "CSS"],
        },
        {
          id: 7,
          image:
            "https://user-images.githubusercontent.com/60307596/137559294-1066a4a1-c48a-4ea8-ba36-99645935c78e.png",
          name: "API simples de produtos com ExpressJs",
          link: "https://github.com/AnaLinsDev/crud-express",
          categories: ["Javascript", "NodeJs", "ExpressJs", "API Rest"],
        },
        {
          id: 8,
          image:
            "https://user-images.githubusercontent.com/60307596/137561781-74aacbf8-72d4-4906-8527-86773976071d.png",
          name: "Gerenciador de filmes para usuarios/admins",
          link: "https://github.com/AnaLinsDev/MovieManager",
          categories: ["Python", "POO", "MVC"],
        },
        {
          id: 9,
          image:
            "https://user-images.githubusercontent.com/60307596/130836777-97b5ea6c-9cab-42cd-8e3f-b71b98e3ff9d.png",
          name: "Site de analise do tempo por local",
          link: "https://github.com/AnaLinsDev/weather-app-vuejs",
          categories: ["Vue", "HTML", "CSS"],
        },
        {
          id: 10,
          image:
            "https://user-images.githubusercontent.com/60307596/137562682-8b3a04d2-59b0-41c9-8d54-db6a30e1f03d.png",
          name: "TODO List por data e com usuário logado",
          link: "https://github.com/AnaLinsDev/todo-front-gps-deploy",
          categories: [
            "React",
            "Redux",
            "HTML",
            "Sass",
            "Java",
            "SpringBoot",
            "SQLite",
          ],
        },
        {
          id: 11,
          image:
            "https://user-images.githubusercontent.com/60307596/137653338-d8dbf774-3569-4046-9744-7b4a30132d25.png",
          name: "CRUD de Clientes",
          link: "https://github.com/AnaLinsDev/crud_php",
          categories: ["PHP Puro", "MariaDB", "PDO"],
        },
        {
          id: 12,
          image:
            "https://user-images.githubusercontent.com/60307596/137981864-3197c580-4501-4285-97c6-2a3ea9940914.png",
          name: "Gerenciador de funcionários",
          link: "https://github.com/AnaLinsDev/node_react_mysql_employee-management",
          categories: ["React", "NodeJS", "Express", "MySQL"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.github:hover {
  cursor: pointer;
  background-color: rgb(230, 219, 186) !important;
}

.white_text{
  background-color: whitesmoke;
  border-radius: 10px !important;
}
</style>
