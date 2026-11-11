<script setup lang="ts">
import AppIcon from './AppIcon.vue'
import SectionHeading from './SectionHeading.vue'
import { competitiveIntro, contests, platforms } from '@/data/resume'

// Split off each contest's last word so the link arrow never wraps onto a line by itself.
const contestRows = contests.map((row) => {
  const cut = row.contest.lastIndexOf(' ') + 1
  return { ...row, lead: row.contest.slice(0, cut), last: row.contest.slice(cut) }
})
</script>

<template>
  <section id="competitive" class="section container" aria-labelledby="competitive-title">
    <SectionHeading section-id="competitive" />

    <p class="intro">{{ competitiveIntro }}</p>

    <ul class="platforms">
      <li v-for="platform in platforms" :key="platform.name" class="platform">
        <div class="platform__head">
          <h3 class="platform__name">{{ platform.name }}</h3>
          <a
            v-if="platform.url"
            :href="platform.url"
            class="platform__handle"
            target="_blank"
            rel="noopener"
          >
            {{ platform.handle }}
            <AppIcon name="arrow-up-right" :size="14" />
            <span class="visually-hidden">(opens in a new tab)</span>
          </a>
          <span v-else class="platform__handle">{{ platform.handle }}</span>
        </div>

        <p class="platform__value">{{ platform.headline.value }}</p>
        <p class="platform__label">{{ platform.headline.label }}</p>

        <ul v-if="platform.details.length" class="platform__details">
          <li v-for="detail in platform.details" :key="detail">{{ detail }}</li>
        </ul>
      </li>
    </ul>

    <div class="contests">
      <h3 id="contests-title" class="eyebrow">Contest results</h3>
      <table class="contests__table" aria-labelledby="contests-title">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Contest</th>
            <th scope="col" class="contests__result">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in contestRows" :key="`${row.year}-${row.contest}`">
            <td class="contests__year">{{ row.year }}</td>
            <th scope="row" class="contests__name">
              <a
                v-if="row.url"
                :href="row.url"
                class="contests__link"
                target="_blank"
                rel="noopener"
              >
                {{ row.lead
                }}<span class="contests__nowrap"
                  >{{ row.last }} <AppIcon name="arrow-up-right" :size="14" class="contests__icon"
                /></span>
                <span class="visually-hidden">
                  {{
                    row.url.startsWith('https://web.archive.org/')
                      ? 'archived standings'
                      : 'standings'
                  }}
                  (opens in a new tab)
                </span>
              </a>
              <template v-else>{{ row.contest }}</template>
            </th>
            <td class="contests__result">{{ row.result }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.intro {
  max-width: 44ch;
  margin-bottom: 40px;
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 3vw, 1.75rem);
  line-height: 1.35;
}

.platforms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
  gap: 20px;
  list-style: none;
  padding: 0;
}

.platform {
  padding: 22px 24px 24px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
}

.platform__head {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 4px 12px;
  margin-bottom: 20px;
}

.platform__name {
  font-size: 1.15rem;
  font-weight: 600;
}

.platform__handle {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-decoration: none;
}

a.platform__handle {
  color: var(--accent);
}

a.platform__handle:hover {
  text-decoration: underline;
  text-underline-offset: 3px;
}

.platform__value {
  font-family: var(--font-serif);
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1;
  font-variant-numeric: lining-nums tabular-nums;
}

.platform__label {
  margin-top: 6px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.platform__details {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  margin-top: 14px;
  padding: 14px 0 0;
  border-top: 1px solid var(--border);
  list-style: none;
  color: var(--text-muted);
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.contests {
  margin-top: 56px;
}

.contests__table {
  width: 100%;
  margin-top: 12px;
  border-collapse: collapse;
}

.contests__table th,
.contests__table td {
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  text-align: left;
  vertical-align: baseline;
}

.contests__table thead th {
  padding-top: 0;
  border-bottom-color: var(--rule);
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.contests__year {
  width: 72px;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  font-size: 0.85rem;
}

.contests__name {
  padding-right: 16px !important;
  font-weight: 500;
}

.contests__link {
  text-decoration: none;
}

.contests__link:hover {
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contests__nowrap {
  white-space: nowrap;
}

/* Inline (not flex) so long names wrap naturally with the arrow on the last line. */
.contests__icon {
  display: inline-block;
  margin-left: 2px;
  vertical-align: -1px;
  color: var(--accent);
}

.contests__result {
  text-align: right !important;
  white-space: nowrap;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
}

@media (min-width: 640px) {
  .contests__year {
    width: 96px;
  }
}
</style>
