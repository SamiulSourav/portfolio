<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { useActiveSection } from '@/composables/useActiveSection'
import { useTheme } from '@/composables/useTheme'
import { profile, sections } from '@/data/resume'

const active = useActiveSection(sections.map((s) => s.id))
const { theme, toggleTheme } = useTheme()

const menuOpen = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="site-header"
    :class="{ 'is-scrolled': scrolled, 'is-open': menuOpen }"
    @keydown.esc="menuOpen = false"
  >
    <div class="container site-header__inner">
      <a href="#top" class="brand" @click="menuOpen = false">
        <span class="brand__mark" aria-hidden="true">SH</span>
        <span class="brand__name">{{ profile.shortName }}</span>
      </a>

      <nav id="site-nav" class="nav" aria-label="Sections">
        <ul class="nav__list">
          <li v-for="section in sections" :key="section.id">
            <a
              :href="`#${section.id}`"
              class="nav__link"
              :aria-current="active === section.id ? 'location' : undefined"
              @click="menuOpen = false"
            >
              {{ section.nav }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="site-header__actions">
        <button
          type="button"
          class="icon-btn"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <AppIcon :name="theme === 'dark' ? 'sun' : 'moon'" :size="18" />
        </button>
        <button
          type="button"
          class="icon-btn menu-btn"
          aria-controls="site-nav"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <AppIcon :name="menuOpen ? 'close' : 'menu'" :size="18" />
          <span class="visually-hidden">Menu</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--header-bg);
  backdrop-filter: saturate(1.4) blur(10px);
  -webkit-backdrop-filter: saturate(1.4) blur(10px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s ease;
}

.site-header.is-scrolled,
.site-header.is-open {
  border-bottom-color: var(--border);
}

.site-header__inner {
  display: flex;
  align-items: center;
  gap: 16px;
  height: var(--header-h);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-right: auto;
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 7px;
  background: var(--accent);
  color: var(--accent-contrast);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.site-header__actions {
  display: flex;
  gap: 8px;
}

.site-header__actions .icon-btn {
  width: 40px;
  height: 40px;
}

/* Mobile: the nav is a drop-down panel under the bar. */
.nav {
  display: none;
}

.is-open .nav {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.nav__list {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 4px var(--gutter) 12px;
}

.nav__link {
  display: block;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  color: var(--text-muted);
  font-weight: 500;
  text-decoration: none;
}

.nav__list li:last-child .nav__link {
  border-bottom: 0;
}

.nav__link:hover,
.nav__link[aria-current] {
  color: var(--accent);
}

@media (min-width: 960px) {
  .nav,
  .is-open .nav {
    display: block;
    position: static;
    background: none;
    border: 0;
    box-shadow: none;
  }

  .nav__list {
    flex-direction: row;
    gap: 2px;
    padding: 0;
  }

  .nav__link {
    position: relative;
    padding: 8px 10px;
    border: 0;
    font-size: 0.95rem;
  }

  .nav__link:hover {
    color: var(--text);
  }

  .nav__link::after {
    content: '';
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 2px;
    height: 2px;
    border-radius: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transition: transform 0.2s ease;
  }

  .nav__link[aria-current] {
    color: var(--accent);
  }

  .nav__link[aria-current]::after {
    transform: scaleX(1);
  }

  .menu-btn {
    display: none;
  }
}
</style>
