<template>
  <div>
    <v-container>
      <v-col cols="10">
        <h3>Add Top Scorers</h3>
        <v-row>
          <v-text-field v-model="scorerName" label="Player"></v-text-field
          ><v-spacer></v-spacer>
          <v-text-field v-model="scorerClub" label="Team"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="scorerGoals" label="Goals"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="emptyScorers"
            class="green white--text ml-4"
            @click="addScorers()"
            >Add Player</v-btn
          >
        </v-row>
        <h3>Add Assists Stats</h3>
        <v-row>
          <v-text-field v-model="assistName" label="Player"></v-text-field
          ><v-spacer></v-spacer>
          <v-text-field v-model="assistClub" label="Team"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="assists" label="Assists"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="emptyAssists"
            @click="addAssists"
            class="green white--text"
            >Add Player</v-btn
          >
        </v-row>
        <h3>Add Red card Stats</h3>
        <v-row>
          <v-text-field v-model="redName" label="Player"></v-text-field
          ><v-spacer></v-spacer>
          <v-text-field v-model="redClub" label="Team"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field v-model="redNumber" label="Red Cards"></v-text-field>
          <v-spacer></v-spacer>
          <v-btn :disabled="emptyRed" @click="addReds" class="green white--text"
            >Add Player</v-btn
          >
        </v-row>
        <h3>Add Yellow card Stats</h3>
        <v-row>
          <v-text-field v-model="yellowName" label="Player"></v-text-field
          ><v-spacer></v-spacer>
          <v-text-field v-model="yellowClub" label="Team"></v-text-field>
          <v-spacer></v-spacer>
          <v-text-field
            v-model="yellowNumber"
            label="Yellow Cards"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="emptyYellow"
            @click="addYellow"
            class="green white--text"
            >Add Player</v-btn
          >
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <h4>Top Scorers</h4>
            <v-simple-table dark height="200">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Club
                    </th>
                    <th class="text-left">
                      Goals
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
                  <tr v-for="item in scorerDetails" :key="item.key">
                    <td>{{ item.scorer }}</td>
                    <td>{{ item.club }}</td>
                    <td>{{ item.goals }}</td>
                    <td>
                      <v-btn depressed class="red">
                        <v-icon>mdi-delete</v-icon>
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
            </v-simple-table></v-col
          >
          <v-col>
            <h4>Top Assists</h4>
            <v-simple-table dark>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Club
                    </th>
                    <th class="text-left">
                      Goals
                    </th>
                    <th class="text-left">
                      Delete
                    </th>
                    <th class="text-left">
                      update
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in assistDetails" :key="item.key">
                    <td>{{ item.assistName }}</td>
                    <td>{{ item.assistTeam }}</td>
                    <td>{{ item.assists }}</td>
                    <td>
                      <v-btn depressed class="red">
                        <v-icon>mdi-delete</v-icon>
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
            </v-simple-table></v-col
          ></v-row
        ><v-row>
          <v-col>
            <h4>Red Cards</h4>
            <v-simple-table dark>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Club
                    </th>
                    <th class="text-left">
                      Goals
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
                  <tr v-for="item in redDetails" :key="item.key">
                    <td>{{ item.redPlayer }}</td>
                    <td>{{ item.redTeam }}</td>
                    <td>{{ item.redNumber }}</td>
                    <td>
                      <v-btn depressed class="red">
                        <v-icon>mdi-delete</v-icon>
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
            </v-simple-table></v-col
          >
          <v-col>
            <h4>Yellow Cards</h4>
            <v-simple-table dark>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Club
                    </th>
                    <th class="text-left">
                      Goals
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
                  <tr v-for="item in yellowDetails" :key="item.key">
                    <td>{{ item.yellowName }}</td>
                    <td>{{ item.yellowClub }}</td>
                    <td>{{ item.yellowNumber }}</td>
                    <td>
                      <v-btn depressed class="red">
                        <v-icon>mdi-delete</v-icon>
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
            </v-simple-table></v-col
          ></v-row
        >
      </v-col>
    </v-container>
  </div>
</template>

<script>
import db from "@/firebase";
export default {
  name: "Stats",
  data() {
    return {
      // scorer-models
      scorerName: "",
      scorerClub: "",
      scorerGoals: "",
      scorerDetails: [],
      //Assist-models
      assistName: "",
      assistClub: "",
      assists: "",
      assistDetails: [],
      //Red-models
      redName: "",
      redClub: "",
      redNumber: "",
      redDetails: [],
      //yellow-models
      yellowName: "",
      yellowClub: "",
      yellowNumber: "",
      yellowDetails: [],
    };
  },
  computed: {
    clearScorers() {
      return ([this.scorerName, this.scorerClub, this.scorerGoals] = "");
    },
    emptyScorers() {
      return (
        this.scorerName === "", this.scorerClub === "", this.scorerGoals === ""
      );
    },
    clearAssists() {
      return ([this.assistName, this.assistClub, this.assists] = "");
    },
    emptyAssists() {
      return (
        this.assistName === "", this.assistClub === "", this.assists === ""
      );
    },
    emptyRed() {
      return this.redName === "", this.redClub === "", this.redNumber === "";
    },
    clearRed() {
      return ([this.redNumber, this.redName, this.redClub] = "");
    },
    emptyYellow() {
      return (
        this.yellowName === "", this.yellowClub === "", this.yellowNumber === ""
      );
    },
    clearYellow() {
      return ([this.yellowName, this.yellowClub, this.yellowNumber] = "");
    },
  },
  methods: {
    async addScorers() {
      const scorerObj = {
        scorerName: this.scorerName,
        scorerClub: this.scorerClub,
        scorerGoals: this.scorerGoals,
      };
      try {
        await db
          .ref("scorers")
          .push()
          .set(scorerObj)
          .then(this.clearScorers());
      } catch {
        console.log("There is an error");
      }
    },
    async getScorers() {
      await db
        .ref("scorers")
        .get()
        .then((snapshot) => {
          const scorerData = snapshot.val();
          const scorerValue = Object.values(scorerData);
          const scorerArray = [];
          scorerValue.forEach((val) => {
            scorerArray.push({
              scorer: val.scorerName,
              club: val.scorerClub,
              goals: val.scorerGoals,
            });
          });
          const newScorer = scorerArray
            .map((val) => {
              return val;
            })
            .sort((a, b) => {
              const a1 = a.goals;
              const b1 = b.goals;
              return b1 - a1;
            });
          this.scorerDetails = newScorer;
          console.log(newScorer);
        });
    },
    async addAssists() {
      const assistsObj = {
        assistName: this.assistName,
        assistTeam: this.assistClub,
        assists: this.assists,
      };
      try {
        await db
          .ref("assists")
          .push()
          .set(assistsObj)
          .then(this.clearAssists());
      } catch {
        console.log("Error adding teams");
      }
    },
    getAssists() {
      db.ref("assists")
        .get()
        .then((snapshot) => {
          const assistsData = snapshot.val();
          const values = Object.values(assistsData);
          const assistArray = [];
          values.forEach((val) => {
            assistArray.push({
              assistName: val.assistName,
              assistTeam: val.assistTeam,
              assists: val.assists,
            });
          });
          const finalAssists = assistArray
            .map((val) => {
              return val;
            })
            .sort((a, b) => {
              const a1 = a.assists;
              const b1 = b.assists;
              return b1 - a1;
            });
          this.assistDetails = finalAssists;
        });
    },
    async addReds() {
      const redObj = {
        redPlayer: this.redName,
        redTeam: this.redClub,
        redNumber: this.redNumber,
      };
      await db
        .ref("redCards")
        .push()
        .set(redObj)
        .then(this.clearRed());
    },
    async getreds() {
      await db
        .ref("redCards")
        .get()
        .then((snapshot) => {
          const redData = snapshot.val();
          const values = Object.values(redData);
          const redArray = [];
          values.forEach((red) => {
            redArray.push({
              redPlayer: red.redPlayer,
              redTeam: red.redTeam,
              redNumber: red.redNumber,
            });
          });
          const finalReds = redArray
            .map((val) => {
              return val;
            })
            .sort((a, b) => {
              const a1 = a.redNumber;
              const b1 = b.redNumber;
              return b1 - a1;
            });

          this.redDetails = finalReds;
        });
    },
    async addYellow() {
      const yellowObj = {
        yellowName: this.yellowName,
        yellowClub: this.yellowClub,
        yellowNumber: this.yellowNumber,
      };
      await db
        .ref("yellowCards")
        .push()
        .set(yellowObj)
        .then(this.clearYellow());
    },
    async getYellow() {
      await db
        .ref("yellowCards")
        .get()
        .then((snapshot) => {
          const yellowData = snapshot.val();
          const values = Object.values(yellowData);
          const yellowArray = [];
          values.forEach((val) => {
            yellowArray.push({
              yellowName: val.yellowName,
              yellowClub: val.yellowClub,
              yellowNumber: val.yellowNumber,
            });
          });
          const finalYellow = yellowArray
            .map((val) => {
              return val;
            })
            .sort((a, b) => {
              const a1 = a.yellowNumber;
              const b1 = b.yellowNumber;
              return b1 - a1;
            });
          this.yellowDetails = finalYellow;
        });
    },
  },
  created() {
    this.getScorers();
    this.getAssists();
    this.getreds();
    this.getYellow();
  },
  updated() {
    this.getScorers();
    this.getAssists();
    this.getreds();
    this.getYellow();
  },
};
</script>

<style lang="scss" scoped></style>
