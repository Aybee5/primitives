<script setup lang="ts">
import ScrollAreaStory from './ScrollAreaStory.vue'
import Copy from './Copy.vue'
</script>

<template>
  <div
    :style="{
      width: '800px',
      height: '800px',
      padding: '20px',
      resize: 'both',
      border: '1px solid gray',
      overflow: 'hidden',
    }"
  >
    <ScrollAreaStory :style="{ width: '100%', height: '100%' }">
      <Copy v-for="(_, index) in 30" :key="index" />
    </ScrollAreaStory>
  </div>
</template>
