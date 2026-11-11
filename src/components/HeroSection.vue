<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import { contact, profile, stats } from '@/data/resume'
</script>

<template>
  <section id="top" class="hero container" aria-labelledby="hero-title">
    <div class="hero__main">
      <p class="hero__status">
        <span class="hero__dot" aria-hidden="true" />
        {{ profile.currentRole }}
      </p>

      <h1 id="hero-title" class="hero__name">{{ profile.name }}</h1>

      <p class="hero__role">
        {{ profile.title }}<span class="hero__sep" aria-hidden="true"> · </span
        ><span class="visually-hidden">, </span>{{ profile.experience
        }}<span class="hero__sep" aria-hidden="true"> · </span
        ><span class="visually-hidden">, </span>{{ profile.location }}
      </p>

      <div class="hero__summary">
        <p v-for="(paragraph, i) in profile.summary" :key="i">{{ paragraph }}</p>
      </div>

      <div class="hero__actions">
        <a class="btn btn--primary" :href="`mailto:${contact.email}`">
          <AppIcon name="mail" :size="18" />
          Email me
        </a>
        <a class="btn" :href="contact.resumeUrl" download>
          <AppIcon name="download" :size="18" />
          Résumé (PDF)
        </a>
        <span class="hero__social">
          <a class="icon-btn" :href="contact.github.url" target="_blank" rel="noopener">
            <AppIcon name="github" />
            <span class="visually-hidden">GitHub (opens in a new tab)</span>
          </a>
          <a class="icon-btn" :href="contact.linkedin.url" target="_blank" rel="noopener">
            <AppIcon name="linkedin" />
            <span class="visually-hidden">LinkedIn (opens in a new tab)</span>
          </a>
        </span>
      </div>
    </div>

    <aside class="glance" aria-labelledby="glance-title">
      <h2 id="glance-title" class="eyebrow glance__title">At a glance</h2>
      <dl class="glance__grid">
        <div v-for="stat in stats" :key="stat.label" class="glance__item">
          <dt class="glance__label">{{ stat.label }}</dt>
          <dd class="glance__value">{{ stat.value }}</dd>
        </div>
      </dl>
    </aside>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: grid;
  gap: 48px;
  padding-top: 48px;
  padding-bottom: 72px;
}

/* Faint dot grid in the top-right corner, fading out toward the text. */
.hero::before {
  content: '';
  position: absolute;
  inset: 0 0 auto auto;
  width: min(560px, 80%);
  height: 420px;
  z-index: -1;
  background-image: radial-gradient(var(--border) 1.2px, transparent 1.2px);
  background-size: 22px 22px;
  mask-image: radial-gradient(ellipse at top right, #000 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse at top right, #000 0%, transparent 70%);
  pointer-events: none;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 5px 12px 5px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.hero__dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
}

.hero__dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--success);
  animation: pulse 2.4s ease-out infinite;
}

.hero__name {
  margin-top: 22px;
  font-size: clamp(2.5rem, 8vw, 5.25rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.02em;
}

.hero__role {
  margin-top: 14px;
  color: var(--accent);
  font-family: var(--font-serif);
  font-size: clamp(1.1rem, 2.4vw, 1.4rem);
  font-style: italic;
}

.hero__sep {
  color: var(--text-subtle);
}

.hero__summary {
  display: grid;
  gap: 14px;
  max-width: 62ch;
  margin-top: 28px;
  color: var(--text-muted);
  font-size: 1.08rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-top: 32px;
}

.hero__social {
  display: flex;
  gap: 12px;
}

/* "At a glance" card */
.glance {
  align-self: end;
  padding: 22px 22px 6px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.glance__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 14px;
}

.glance__item {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  gap: 4px;
  padding: 16px 0;
  border-top: 1px solid var(--border);
}

.glance__item:nth-child(odd) {
  padding-right: 16px;
}

.glance__item:nth-child(even) {
  padding-left: 16px;
  border-left: 1px solid var(--border);
}

.glance__value {
  font-family: var(--font-serif);
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.1;
  font-variant-numeric: lining-nums tabular-nums;
}

.glance__label {
  color: var(--text-muted);
  font-size: 0.875rem;
  line-height: 1.4;
}

@media (min-width: 960px) {
  .hero {
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: 64px;
    padding-top: 88px;
    padding-bottom: 104px;
  }
}

/* Entrance: a gentle, staggered rise. Skipped for reduced-motion users. */
@media (prefers-reduced-motion: no-preference) {
  .hero__main > *,
  .glance {
    animation: rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both;
  }

  .hero__main > :nth-child(2) {
    animation-delay: 0.06s;
  }
  .hero__main > :nth-child(3) {
    animation-delay: 0.12s;
  }
  .hero__main > :nth-child(4) {
    animation-delay: 0.18s;
  }
  .hero__main > :nth-child(5) {
    animation-delay: 0.24s;
  }
  .glance {
    animation-delay: 0.3s;
  }
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  80%,
  100% {
    transform: scale(2.6);
    opacity: 0;
  }
}
</style>
