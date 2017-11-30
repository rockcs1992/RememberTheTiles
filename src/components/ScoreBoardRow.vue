<template lang="html">
  <tr>
    <td>{{index}}</td>
    <td>{{record.score}}</td>
    <td>{{record.maxLevel}}</td>
    <td>{{record.date}}</td>
  </tr>
</template>

<script>
export default {
  name: 'ScoreBoardRow',
  props: ['index', 'record']
}
</script>

<style lang="css">
</style>
