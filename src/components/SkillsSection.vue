<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { strengths, toolGroups } from '@/data/resume'
</script>

<template>
  <section id="skills" class="section container" aria-labelledby="skills-title">
    <SectionHeading section-id="skills" />

    <div class="skills">
      <div>
        <h3 class="eyebrow skills__label">What I bring</h3>
        <ul class="strengths">
          <li v-for="item in strengths" :key="item">
            <AppIcon name="check" :size="18" class="strengths__icon" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="eyebrow skills__label">Languages &amp; tools</h3>
        <div class="tools">
          <div v-for="group in toolGroups" :key="group.label" class="tools__group">
            <h4 class="tools__label">{{ group.label }}</h4>
            <ul class="tools__items">
              <li v-for="item in group.items" :key="item" class="chip tools__chip">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  display: grid;
  gap: 48px;
}

.skills__label {
  margin-bottom: 8px;
}

.strengths {
  list-style: none;
  padding: 0;
}

.strengths li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}

.strengths__icon {
  margin-top: 3px;
  color: var(--accent);
}

.tools {
  display: grid;
  gap: 24px;
  margin-top: 14px;
}

.tools__label {
  margin-bottom: 10px;
  font-size: 1.05rem;
  font-weight: 600;
}

.tools__items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
  padding: 0;
}

.tools__chip {
  padding: 5px 12px;
  color: var(--text);
  font-size: 0.85rem;
}

@media (min-width: 860px) {
  .skills {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 72px;
  }
}
</style>
