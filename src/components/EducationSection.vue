<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { education } from '@/data/resume'
</script>

<template>
  <section id="education" class="section container" aria-labelledby="education-title">
    <SectionHeading section-id="education" />

    <div class="edu">
      <div>
        <h3 class="edu__degree">{{ education.degree }}</h3>
        <p class="edu__school">{{ education.school }}</p>
      </div>
      <div class="edu__meta">
        <p class="edu__years">
          <time :datetime="education.start">{{ education.start }}</time>
          –
          <time :datetime="education.end">{{ education.end }}</time>
        </p>
        <p class="chip">{{ education.grade }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px 32px;
}

.edu__degree {
  font-size: clamp(1.3rem, 3vw, 1.6rem);
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
