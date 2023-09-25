export function formatBytes(bytes: number) {
  if (bytes >= 1e9) {
    return (bytes / 1e9).toFixed(1) + ' GB'
  } else if (bytes >= 1e6) {
    return (bytes / 1e6).toFixed(1) + ' MB'
  } else if (bytes >= 1e3) {
    return (bytes / 1e3).toFixed(1) + ' KB'
  } else {
    return bytes + ' bytes'
  }
}
