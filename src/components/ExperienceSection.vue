<script setup lang="ts">
import SectionHeading from './SectionHeading.vue'
import { experience } from '@/data/resume'
</script>

<template>
  <section id="experience" class="section container" aria-labelledby="experience-title">
    <SectionHeading section-id="experience" />

    <ol class="jobs">
      <li v-for="job in experience" :key="job.company + job.start.datetime" class="job">
        <div class="job__meta">
          <p class="job__dates">
            <time :datetime="job.start.datetime">{{ job.start.label }}</time>
            –
            <time v-if="job.end" :datetime="job.end.datetime">{{ job.end.label }}</time>
            <span v-else>Present</span>
          </p>
          <p v-if="!job.end" class="job__current">Current role</p>
        </div>

        <div class="job__body">
          <h3 class="job__role">{{ job.role }}</h3>
          <p class="job__company">{{ job.company }}</p>
          <ul class="job__highlights">
            <li v-for="item in job.highlights" :key="item">{{ item }}</li>
          </ul>
        </div>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.jobs {
  display: grid;
  gap: 48px;
  list-style: none;
  padding: 0;
}

.job {
  display: grid;
  gap: 12px;
}

.job__dates {
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.job__current {
  display: inline-block;
  margin-top: 8px;
  padding: 2px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.job__role {
  font-size: clamp(1.5rem, 3vw, 1.85rem);
  font-weight: 600;
  line-height: 1.2;
}

.job__company {
  margin-top: 4px;
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-style: italic;
}

.job__highlights {
  display: grid;
  gap: 12px;
  max-width: 70ch;
  margin-top: 24px;
  padding: 0;
  list-style: none;
}

.job__highlights li {
  position: relative;
  padding-left: 24px;
}

.job__highlights li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.72em;
  width: 10px;
  height: 1.5px;
  background: var(--accent);
}

@media (min-width: 760px) {
  .job {
    grid-template-columns: 200px minmax(0, 1fr);
    gap: 48px;
  }

  .job__meta {
    padding-top: 10px;
  }
}
</style>
