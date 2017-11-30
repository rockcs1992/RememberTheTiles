<template lang="html">
  <table>
    <caption>HIGHEST SCORES!</caption>
    <thead>
      <tr>
        <td>Rank</td>
        <td>Score</td>
        <td>Max Level</td>
        <td>Date</td>
      </tr>
    </thead>
    <tbody>
      <score-board-row v-for="(record, index) in highestScores" :record="record" :index="index+1" :key="index"/>
    </tbody>
  </table>
</template>

<script>
import ScoreBoardRow from './ScoreBoardRow'

export default {
  name: 'ScoreBoard',
  components: {
    ScoreBoardRow
  },
  data () {
    return {
      highestScores: [
        {
          score: 22435,
          maxLevel: 15,
          date: 'today'
        },
        {
          score: 19245,
          maxLevel: 14,
          date: 'yesterday'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
