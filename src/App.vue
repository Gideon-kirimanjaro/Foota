<template>
  <div>
    <v-app>
      <v-main
        ><router-view><Home /></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import { Home } from "./views/Home";
export default {
  name: "App",

  components: {
    Home,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
* {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat-Bold.ttf");
}
</style>
