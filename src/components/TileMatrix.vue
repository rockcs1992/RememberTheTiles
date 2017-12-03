<template lang="html">
  <table class="tile-matrix">
    <tr v-for="m in row">
      <td v-for="n in col">
        <tile-unit :initialized="isBoxInitialized(m, n)"/>
      </td>
    </tr>
  </table>
</template>

<script>
import TileUnit from './TileUnit'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'TileMatrix',
  components: {
    TileUnit
  },
  computed: {
    ...mapState({
      row: state => state.matrixRow,
      col: state => state.matrixCol
    }),
    ...mapGetters({
      initial: 'initialActiveBox'
    })
  },
  methods: {
    isBoxInitialized (m, n) {
      return this.initial.includes(m * 10 + n)
    }
  }
}
</script>

<style lang="css">
.tile-matrix {
  margin: auto;
  margin-top: 30px;
}
</style>
