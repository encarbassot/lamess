export function formatDuration(seconds) {
  // Calculate hours and minutes from the given seconds
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  // Format hours and minutes as HH:mm
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}