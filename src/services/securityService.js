// Todo o Backend "Fake" fica aqui

const STORAGE_KEY = "security_events"

export function getEvents() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

export function addEvent(event) {
  const events = getEvents()

  events.unshift({
    id: Date.now(),
    createdAt: Date.now(),
    ...event,
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
}

export function clearEvents() {
  localStorage.removeItem(STORAGE_KEY)
}
