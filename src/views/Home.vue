<template>
  <div class="home">
    <template>
      <v-card>
        <v-toolbar color="cyan" dark flat>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>Kirimanjaro Admin Dashboard</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>

          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab v-for="item in items" :key="item">
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
          <v-tab-item>
            <Fixtures />
          </v-tab-item>
          <v-tab-item>
            <Standings />
          </v-tab-item>
          <v-tab-item>
            <Stats />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>
  </div>
</template>

<script>
import Fixtures from "../components/Fixtures/Fixtures";
import Standings from "../components/Standings/Standings";
import Stats from "../components/Stats/Stats";
export default {
  name: "Home",
  data() {
    return {
      tab: null,
      items: ["Fixtures", "Standings", "Stats"],
      text: "Lorem",
    };
  },
  components: {
    Fixtures,
    Standings,
    Stats,
  },
};
</script>
