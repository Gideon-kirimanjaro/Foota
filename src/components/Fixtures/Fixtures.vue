<template>
  <div>
    <v-container class="mt-5  d-md-flex justify-space-around ">
      <v-col cols="8" md="4" class="">
        <v-text-field
          v-model="homeTeam"
          label="Enter Home  Team"
          required
        ></v-text-field>
        <v-col cols="6">
          <v-text-field v-model="homeScore" label="Home team score"
            >score</v-text-field
          ></v-col
        >

        <v-text-field
          v-model="awayTeam"
          label="Enter Away Team"
          required
        ></v-text-field>
        <v-col cols="6">
          <v-text-field v-model="awayScore" label="away team score"
            >score</v-text-field
          ></v-col
        ></v-col
      >
      <v-container class="ml-5">
        <v-row>
          <v-date-picker
            v-model="datePicker"
            color="green lighten-1"
            header-color="primary"
          ></v-date-picker>

          <v-row
            ><v-time-picker
              class="ml-4 mt-3"
              v-model="timePicker"
              ampm-in-title
            ></v-time-picker></v-row
          ><button class="add" @click="postFixtures">Add Fixture</button>
        </v-row>
      </v-container></v-container
    >
    <v-container class="d-flex   flex-column">
      <v-simple-table height="180px" dark>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Home
              </th>
              <th class="text-left">
                Away
              </th>
              <th class="text-left">
                Time
              </th>
              <th class="text-left">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            <tr :key="item.id" v-for="item of fixtureTeams">
              <td>{{ item.home }} {{ item.homeScore }}</td>
              <td>{{ item.away }} {{ item.awayScore }}</td>
              <td>{{ item.time }}</td>
              <td>{{ item.date }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table></v-container
    >
  </div>
</template>

<script>
import axios from "axios";
const fixtureApi = "https://gidi-epl-default-rtdb.firebaseio.com/fixtures.json";
export default {
  name: "Fixtures",
  data() {
    return {
      homeTeam: "",
      awayTeam: "",
      datePicker: "",
      timePicker: "",
      homeScore: "",
      awayScore: "",
      fixtureTeams: [],
    };
  },
  methods: {
    async postFixtures() {
      if (
        this.homeTeam !== "" &&
        this.awayTeam !== "" &&
        this.datePicker !== "" &&
        this.timePicker !== ""
      ) {
        await axios
          .post(fixtureApi, {
            home: this.homeTeam,
            away: this.awayTeam,
            homeScore: this.homeScore,
            awayScore: this.awayScore,
            date: this.datePicker,
            time: this.timePicker,
          })
          .then((response) => {
            console.log(response.ok);
          })
          .then(
            ([
              this.homeTeam,
              this.awayScore,
              this.homeScore,
              this.awayTeam,
              this.datePicker,
              this.timePicker,
            ] = "")
          )
          .catch((error) => {
            let err = error;
            console.log(err);
          });
      } else {
        console.log("Please enter teams");
      }
    },
  },
  async created() {
    const response = await axios.get(fixtureApi);
    const obj = response.data;
    const entries = Object.values(obj);
    const teams = [];
    console.log("Hawa", entries);

    for (let x of entries) {
      teams.push({
        home: x.home,
        away: x.away,
        awayScore: x.awayScore,
        homeScore: x.homeScore,
        date: x.date,
        time: x.time,
      });
    }
    this.fixtureTeams = teams;
    console.log("My data", entries);
  },
};
</script>

<style lang="scss" scoped>
.add {
  color: green;
  border-radius: 0px 4px;
  border: 2px solid;
  padding: 5px 50px;
  margin-left: 30px;
  margin-top: 60px;
}
</style>
