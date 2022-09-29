<script setup>

</script>

<template>
  <form class='search'>
    <input class='search-input' type='text' placeholder='Buscar gifs...' />
    <button class='search-submit'>Buscar</button>
  </form>
</template>

<style lang='css' scope>
  .search {
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    margin: 16px 0;
  }

  .search-input {
    font-size: 1rem;
    width: 100%;
    height: 44px;
    border: 0;
    padding: 8px 16px;
  }

  .search-submit {
    background: red;
    border: 0;
    font-size: 1rem;
    font-weight: bold;
    height: 44px;
    padding: 10px;
    position: absolute;
    right: 0;
    transition: opacity 0.3s ease;
    cursor: pointer;
    backface-visibility: hidden;
    color: #fff;
  }

  .search-input:hover {
    opacity: 0.7;
  }
</style>