<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import type { IconName } from './icons'
import { contact, profile } from '@/data/resume'

interface ChannelItem {
  value: string
  href?: string
}

interface Channel {
  icon: IconName
  label: string
  /** One line per item, e.g. several phone numbers. */
  items: ChannelItem[]
  /** Opens in a new tab (everything except tel: links). */
  external?: boolean
}

const channels: Channel[] = [
  {
    icon: 'phone',
    label: 'Phone',
    items: contact.phones.map((phone) => ({ value: phone.label, href: phone.href })),
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    items: [{ value: contact.whatsapp.label, href: contact.whatsapp.url }],
    external: true,
  },
  {
    icon: 'github',
    label: 'GitHub',
    items: [{ value: contact.github.label, href: contact.github.url }],
    external: true,
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    items: [{ value: contact.linkedin.label, href: contact.linkedin.url }],
    external: true,
  },
  {
    icon: 'facebook',
    label: 'Facebook',
    items: [{ value: contact.facebook.label, href: contact.facebook.url }],
    external: true,
  },
  { icon: 'map-pin', label: 'Based in', items: [{ value: profile.location }] },
]
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
        <li v-for="channel in channels" :key="channel.label" class="channel">
          <AppIcon :name="channel.icon" :size="18" class="channel__icon" />
          <span class="channel__label">{{ channel.label }}</span>
          <span class="channel__values">
            <template v-for="item in channel.items" :key="item.value">
              <a
                v-if="item.href"
                :href="item.href"
                class="channel__value"
                :target="channel.external ? '_blank' : undefined"
                :rel="channel.external ? 'noopener' : undefined"
              >
                {{ item.value }}
                <!-- Phone and WhatsApp show the same number, so name the service for screen readers. -->
                <span v-if="channel.external" class="visually-hidden">
                  ({{ channel.label }}, opens in a new tab)
                </span>
              </a>
              <span v-else class="channel__value">{{ item.value }}</span>
            </template>
          </span>
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

/* Rows align to the first line, so multi-line rows (two phone numbers) keep the
   icon and label beside the top value. --line is one line of body text. */
.channel {
  --line: calc(1.0625rem * 1.6);

  display: grid;
  grid-template-columns: 18px 84px minmax(0, 1fr);
  align-items: start;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.channel__icon {
  margin-top: calc((var(--line) - 18px) / 2);
  color: var(--text-subtle);
}

.channel__label {
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  line-height: var(--line);
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.channel__values {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  min-width: 0;
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
