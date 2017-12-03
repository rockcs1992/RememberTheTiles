<template lang="html">
  <button class="small-button" @click="handleClick"><slot></slot></button>
</template>

<script>
export default {
  name: 'MenuButton',
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="css" scoped>
.small-button {
  display: inline-block;
  background-color: #00c2ff;
  padding: 10px;
  font-size: 1rem;
  color: white;
  width: 180px;
  margin: 20px;
}

.small-button:hover {
  cursor: pointer;
  background-color: #33ceff;
}

.small-button:focus {
  outline: none;
}

.small-button:active {
  background-color: #09aee2;
}
</style>
