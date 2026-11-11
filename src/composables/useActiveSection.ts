import { onBeforeUnmount, onMounted, ref } from 'vue'

/**
 * Tracks which of the given sections sits in the reading band of the viewport,
 * so the navigation can highlight it.
 */
export function useActiveSection(ids: readonly string[]) {
  const active = ref<string | null>(null)
  const visible = new Set<string>()
  let observer: IntersectionObserver | undefined

  // The last section is often too short to reach the band, so the page bottom selects it.
  function update() {
    const atBottom =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
    active.value = atBottom
      ? (ids[ids.length - 1] ?? null)
      : (ids.find((id) => visible.has(id)) ?? null)
  }

  onMounted(() => {
    window.addEventListener('scroll', update, { passive: true })

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        update()
      },
      // A thin band a little above the middle of the screen.
      { rootMargin: '-35% 0px -60% 0px' },
    )

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    window.removeEventListener('scroll', update)
  })

  return active
}
