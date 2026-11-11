import { computed, ref } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

// Shared, module-level state: one theme for the whole app.
// Until the visitor picks a theme, the OS preference wins (and the CSS media query applies it).
const systemQuery = window.matchMedia('(prefers-color-scheme: dark)')
const systemTheme = ref<Theme>(systemQuery.matches ? 'dark' : 'light')
const chosenTheme = ref<Theme | null>(readStoredTheme())

systemQuery.addEventListener('change', (event) => {
  systemTheme.value = event.matches ? 'dark' : 'light'
})

export function useTheme() {
  const theme = computed<Theme>(() => chosenTheme.value ?? systemTheme.value)

  function toggleTheme() {
    const next: Theme = theme.value === 'dark' ? 'light' : 'dark'
    chosenTheme.value = next
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage unavailable (private mode, blocked cookies): the theme still applies for this visit.
    }
  }

  return { theme, toggleTheme }
}
