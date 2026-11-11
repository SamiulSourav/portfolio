<script setup lang="ts">
import { computed } from 'vue'
import { sections, type SectionId } from '@/data/resume'

const props = defineProps<{ sectionId: SectionId }>()

const position = computed(() => sections.findIndex((s) => s.id === props.sectionId))
const index = computed(() => String(position.value + 1).padStart(2, '0'))
const title = computed(() => sections[position.value]?.title ?? '')
</script>

<template>
  <div class="section-heading">
    <span class="section-heading__index" aria-hidden="true">{{ index }}</span>
    <h2 :id="`${sectionId}-title`" class="section-heading__title">{{ title }}</h2>
  </div>
</template>

<style scoped>
.section-heading {
  display: flex;
  align-items: baseline;
  gap: 14px;
  padding-bottom: 12px;
  margin-bottom: 40px;
  border-bottom: 1px solid var(--rule);
}

.section-heading__index {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--accent);
}

.section-heading__title {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

@media (min-width: 860px) {
  .section-heading {
    margin-bottom: 48px;
  }
}
</style>
