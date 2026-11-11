<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import { profile } from '@/data/resume'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <p>© {{ year }} {{ profile.name }}</p>
      <a href="#top" class="site-footer__top">
        Back to top
        <AppIcon name="arrow-up" :size="14" />
      </a>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-block: 28px;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.site-footer__top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.site-footer__top:hover {
  color: var(--accent);
}
</style>
