<template>
  <div>
    <button @click="onClick">foo</button>
  </div>
</template>

<script setup lang="ts">
const onClick = () => {
  console.log("debug onClick");
};
</script>

<style scoped></style>
