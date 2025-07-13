<script setup lang="ts"></script>

<template>
  <div class="iframe-wrapper">
    <iframe
      src="https://status.flygar.org/badge?theme=light"
      width="250"
      height="30"
      frameborder="0"
      scrolling="no"
      style="color-scheme: normal">
    </iframe>
  </div>
</template>

<style scoped>
.iframe-wrapper {
  display: flex;
  align-items: center; /* 垂直居中 */
  /* justify-content: center; 水平居中（可选） */
  /* height: 100px; 控制上下居中区域高度 */
}
</style>