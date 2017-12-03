<template lang="html">
  <button class="menu-button" @click="handleClick"><slot></slot></button>
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
.menu-button {
  display: block;
  background-color: #00c2ff;
  padding: 10px;
  font-size: 1.5rem;
  color: white;
  width: 200px;
  margin: 20px;
}

.menu-button:hover {
  cursor: pointer;
  background-color: #33ceff;
}

.menu-button:focus {
  outline: none;
}

.menu-button:active {
  background-color: #09aee2;
}
</style>
