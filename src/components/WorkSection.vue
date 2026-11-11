<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { projects } from '@/data/resume'
</script>

<template>
  <section id="work" class="section container" aria-labelledby="work-title">
    <SectionHeading section-id="work" />

    <ul class="projects">
      <li
        v-for="project in projects"
        :key="project.name"
        class="project"
        :class="{ 'project--linked': project.url }"
      >
        <p class="eyebrow">{{ project.org }}</p>
        <h3 class="project__name">
          <a
            v-if="project.url"
            :href="project.url"
            class="project__link"
            target="_blank"
            rel="noopener"
          >
            {{ project.name }}<span class="visually-hidden"> (opens in a new tab)</span>
          </a>
          <template v-else>{{ project.name }}</template>
        </h3>
        <p class="project__desc">{{ project.description }}</p>
        <ul class="project__tags" aria-label="Technologies">
          <li v-for="tag in project.tags" :key="tag" class="chip">{{ tag }}</li>
        </ul>
        <p v-if="project.url" class="project__cta" aria-hidden="true">
          View live site
          <AppIcon name="arrow-up-right" :size="16" />
        </p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.project {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.project--linked:hover {
  border-color: var(--accent);
  box-shadow: var(--shadow);
  transform: translateY(-2px);
}

.project__name {
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.2;
}

.project__link {
  text-decoration: none;
}

/* Stretch the title link over the whole card so the card is one click target. */
.project__link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--radius);
}

.project__link:focus-visible {
  outline: none;
}

.project__link:focus-visible::after {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

.project__desc {
  color: var(--text-muted);
}

.project__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
  padding: 8px 0 0;
  list-style: none;
}

.project__cta {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--accent);
  font-size: 0.95rem;
  font-weight: 600;
}
</style>
