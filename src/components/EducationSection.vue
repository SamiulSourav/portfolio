<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { education } from '@/data/resume'
</script>

<template>
  <section id="education" class="section container" aria-labelledby="education-title">
    <SectionHeading section-id="education" />

    <ol class="edu-list">
      <li v-for="item in education" :key="item.degree" class="edu">
        <div>
          <h3 class="edu__degree">{{ item.degree }}</h3>
          <p class="edu__school">{{ item.school }}</p>
        </div>
        <div class="edu__meta">
          <p class="edu__years">
            <template v-if="item.start">
              <time :datetime="item.start">{{ item.start }}</time>
              –
            </template>
            <time :datetime="item.end">{{ item.end }}</time>
          </p>
          <p class="chip">{{ item.grade }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.edu-list {
  list-style: none;
  padding: 0;
}

.edu {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px 32px;
  padding-block: 24px;
  border-bottom: 1px solid var(--border);
}

.edu:first-child {
  padding-top: 0;
}

.edu:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.edu__degree {
  font-size: clamp(1.25rem, 2.8vw, 1.5rem);
  font-weight: 600;
  line-height: 1.25;
}

.edu__school {
  margin-top: 6px;
  color: var(--text-muted);
}

.edu__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.edu__years {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

@media (min-width: 760px) {
  .edu__meta {
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    padding-top: 6px;
  }
}
</style>
