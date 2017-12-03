<template lang="html">
  <div class="score-board">
    <table>
      <caption class="score-board-caption">HIGHEST SCORES!</caption>
      <thead>
        <tr>
          <td class="table-head">Rank</td>
          <td class="table-head">Score</td>
          <td class="table-head">Max Level</td>
          <td class="table-head">Date</td>
        </tr>
      </thead>
      <tbody>
        <score-board-row v-for="(record, index) in records" :record="record" :index="index+1" :key="index"/>
      </tbody>
    </table>
    <small-button @click="toMenuView">Back To Main Menu</small-button>
  </div>
</template>

<script>
import ScoreBoardRow from './ScoreBoardRow'
import { mapGetters, mapActions } from 'vuex'
import SmallButton from './SmallButton'

export default {
  name: 'ScoreBoard',
  components: {
    ScoreBoardRow,
    SmallButton
  },
  computed: {
    ...mapGetters({
      records: 'sortedRecords'
    })
  },
  methods: {
    ...mapActions(['toMenuView'])
  }
}
</script>

<style lang="css">
.score-board {
  display: inline-block;
}

.score-board-caption {
  font-size: 1.5rem;
  font-weight: bold;
}

.table-head {
  padding: 0 20px;
  font-size: 1.8rem;
}
</style>
