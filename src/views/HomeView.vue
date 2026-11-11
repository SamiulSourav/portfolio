<script setup lang="ts">
import CompetitiveSection from '@/components/CompetitiveSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import EducationSection from '@/components/EducationSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import WorkSection from '@/components/WorkSection.vue'
</script>

<template>
  <main id="main" tabindex="-1">
    <HeroSection />
    <ExperienceSection />
    <WorkSection />
    <SkillsSection />
    <CompetitiveSection />
    <EducationSection />
    <ContactSection />
  </main>
</template>

<style scoped>
main:focus {
  outline: none;
}
</style>
