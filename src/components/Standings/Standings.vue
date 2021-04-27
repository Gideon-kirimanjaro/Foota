<template>
  <div>
    <v-row>
      <v-container class="d-md-flex justify-space-between  ">
        <v-col cols="4">
          <v-container class="ml-5 mr-5"
            ><v-text-field v-model="team" label="Add Team"></v-text-field>
            <v-text-field
              v-model="matchesPlayed"
              label="Add Matches Played"
            ></v-text-field
            ><v-text-field v-model="won" label="Add Wins"></v-text-field
            ><v-text-field v-model="drawn" label="Add Draws"></v-text-field
            ><v-text-field v-model="lost" label="Add Losses"></v-text-field
            ><v-text-field v-model="points" label="Add Points"></v-text-field>
            <v-row class="d-flex justify-space-between mt-1">
              <v-btn
                @click="addData()"
                :disabled="emptyTeams"
                depressed
                class="green white--text"
                >Add Stats</v-btn
              >

              <v-btn v-if="emptyTeams" outlined color="red">
                Add all fields!!
              </v-btn>
            </v-row></v-container
          ></v-col
        >
        <v-col>
          <v-container class="ml-5"
            ><v-simple-table height="400" dark>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Team
                    </th>
                    <th class="text-left">
                      MP
                    </th>
                    <th class="text-left">
                      W
                    </th>
                    <th class="text-left">
                      D
                    </th>
                    <th class="text-left">
                      L
                    </th>
                    <th class="text-left">
                      Points
                    </th>
                    <th class="text-left">
                      Delete
                    </th>
                    <th class="text-left">
                      Update
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="item in teams" :key="item.key">
                    <td>{{ item.team }} {{ item.logo }}</td>
                    <td>{{ item.matchesPlayed }}</td>
                    <td>{{ item.won }}</td>
                    <td>{{ item.drawn }}</td>
                    <td>{{ item.lost }}</td>
                    <td>{{ item.points }}</td>
                    <td>
                      <v-btn depressed class="red">
                        <v-icon @click="deleteData(item.key)"
                          >mdi-delete</v-icon
                        >
                      </v-btn>
                    </td>
                    <td>
                      <v-btn depressed class="green"
                        ><v-icon>mdi-update</v-icon></v-btn
                      >
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table></v-container
          ></v-col
        ></v-container
      ></v-row
    >
  </div>
</template>

<script>
import db from "@/firebase";
export default {
  name: "Standings",

  data() {
    return {
      team: "",
      matchesPlayed: "",
      won: "",
      drawn: "",
      lost: "",
      points: "",
      teams: [],
      isLoading: true,
      selectedFile: null,
      title: "",
    };
  },
  computed: {
    emptyTeams() {
      return (
        this.team === "",
        this.matchesPlayed === "",
        this.won === "",
        this.drawn === "",
        this.lost === "",
        this.points === "",
        this.selectedFile === ""
      );
    },
    clearTeams() {
      return ([
        this.team,
        this.matchesPlayed,
        this.won,
        this.drawn,
        this.lost,
        this.points,
      ] = "");
    },
  },
  methods: {
    async addData() {
      // this.isLoading();
      const obj = {
        team: this.team,
        matchesPlayed: this.matchesPlayed,
        won: this.won,
        drawn: this.drawn,
        lost: this.lost,
        points: this.points,
      };
      try {
        await db
          .ref("standings")
          .push(obj)
          .set(obj)
          .then(this.clearTeams());
      } catch {
        console.log("Error parsing data");
      }
    },
    async getData() {
      try {
        await db
          .ref("standings")
          .get()
          .then((snapshot) => {
            const obj = snapshot.val();
            const values = Object.values(obj);

            const standingsDetails = [];
            values.map((val) => {
              standingsDetails.push({
                team: val.team,
                matchesPlayed: val.matchesPlayed,
                won: val.won,
                drawn: val.drawn,
                lost: val.lost,
                points: val.points,
                logo: val.logo,
              });
            });
            const finalTeams = standingsDetails
              .map((teams) => {
                return teams;
              })
              .sort((a, b) => {
                const a1 = a.points;
                const b1 = b.points;
                return b1 - a1;
              });

            this.teams = finalTeams;
            //console.log("za mwisho", this.teams);
          });
      } catch {
        console.log("Error getting Data");
      }
    },
    loader() {
      this.isLoading = !this.isLoading;
    },
    // onFileSelected(event) {
    //   this.selectedFile = event.target.files[0];
    // },
  },
  created() {
    this.getData();
  },

  updated() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped></style>
