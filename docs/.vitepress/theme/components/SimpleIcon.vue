<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: '000000', // 默认黑色
  },
  size: {
    type: [String, Number],
    default: 24, // 默认尺寸 24px
  },
})
</script>

<template>
  <img
    :src="`https://cdn.simpleicons.org/${name}/${color}`"
    :alt="name"
    :width="size"
    :height="size"
    :style="{ verticalAlign: 'middle', display: 'inline-block' }"
  />
</template>

<style lang="less" scoped>

</style>