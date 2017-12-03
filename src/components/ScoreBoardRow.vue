<template lang="html">
  <tr>
    <td class="table-cell-content">{{index}}</td>
    <td class="table-cell-content">{{record.score}}</td>
    <td class="table-cell-content">{{record.maxLevel}}</td>
    <td class="table-cell-content">{{record.date}}</td>
  </tr>
</template>

<script>
export default {
  name: 'ScoreBoardRow',
  props: ['index', 'record']
}
</script>

<style lang="css">
.table-cell-content {
  font-size: 1.2rem;
}
</style>
