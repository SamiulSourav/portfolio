<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { contact, profile } from '@/data/resume'
</script>

<template>
  <section id="contact" class="section container" aria-labelledby="contact-title">
    <SectionHeading section-id="contact" />

    <div class="contact">
      <div>
        <p class="contact__lead">The quickest way to reach me is email.</p>
        <a class="contact__email" :href="`mailto:${contact.email}`">
          {{ contact.email }}
          <AppIcon name="arrow-up-right" :size="24" />
        </a>
        <div class="contact__actions">
          <a class="btn" :href="contact.resumeUrl" download>
            <AppIcon name="download" :size="18" />
            Download résumé
          </a>
        </div>
      </div>

      <ul class="channels">
        <li class="channel">
          <AppIcon name="phone" :size="18" class="channel__icon" />
          <span class="channel__label">Phone</span>
          <a :href="contact.phoneHref" class="channel__value">{{ contact.phone }}</a>
        </li>
        <li class="channel">
          <AppIcon name="github" :size="18" class="channel__icon" />
          <span class="channel__label">GitHub</span>
          <a :href="contact.github.url" class="channel__value" target="_blank" rel="noopener">
            {{ contact.github.label }}<span class="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li class="channel">
          <AppIcon name="linkedin" :size="18" class="channel__icon" />
          <span class="channel__label">LinkedIn</span>
          <a :href="contact.linkedin.url" class="channel__value" target="_blank" rel="noopener">
            {{ contact.linkedin.label }}<span class="visually-hidden"> (opens in a new tab)</span>
          </a>
        </li>
        <li class="channel">
          <AppIcon name="map-pin" :size="18" class="channel__icon" />
          <span class="channel__label">Based in</span>
          <span class="channel__value">{{ profile.location }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: grid;
  gap: 48px;
}

.contact__lead {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
}

.contact__email {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  max-width: 100%;
  margin-top: 16px;
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 3.2vw, 1.75rem);
  font-style: italic;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
  overflow-wrap: anywhere;
}

.contact__email:hover {
  color: var(--accent-hover);
  text-decoration-thickness: 2px;
}

.contact__actions {
  margin-top: 28px;
}

.channels {
  list-style: none;
  padding: 0;
  border-top: 1px solid var(--border);
}

.channel {
  display: grid;
  grid-template-columns: 18px 84px minmax(0, 1fr);
  align-items: center;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.channel__icon {
  color: var(--text-subtle);
}

.channel__label {
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.channel__value {
  overflow-wrap: anywhere;
}

a.channel__value {
  text-decoration: none;
}

a.channel__value:hover {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (min-width: 860px) {
  .contact {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    gap: 72px;
    align-items: start;
  }
}
</style>
